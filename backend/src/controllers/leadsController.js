// Lead capture and eligibility calculation controller
export const createLead = async (req, res) => {
  try {
    const { name, phone, email, service, loanAmount, message, city } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name and phone number are required.'
      });
    }

    const newLead = {
      id: `lead_${Date.now()}`,
      name,
      phone,
      email: email || '',
      service: service || 'General Advisory',
      loanAmount: loanAmount || '',
      city: city || '',
      message: message || '',
      createdAt: new Date().toISOString(),
      status: 'NEW'
    };

    // Ready for database insertion (MongoDB/PostgreSQL) or CRM webhook
    console.log('[New Lead Received]:', newLead);

    return res.status(201).json({
      success: true,
      message: 'Inquiry received successfully. Our consultant will contact you shortly.',
      data: newLead
    });
  } catch (error) {
    console.error('Error handling lead submission:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing your inquiry.'
    });
  }
};

export const calculateEligibility = async (req, res) => {
  try {
    const { projectCost, sector, category, location } = req.body;

    const cost = parseFloat(projectCost) || 0;
    let subsidyPercentage = 15;

    // Standard PMEGP / Scheme heuristic rules
    if (location === 'rural') {
      subsidyPercentage = (category === 'special') ? 35 : 25;
    } else {
      subsidyPercentage = (category === 'special') ? 25 : 15;
    }

    const estimatedSubsidy = (cost * subsidyPercentage) / 100;
    const promoterContributionPct = (category === 'special') ? 5 : 10;
    const estimatedPromoterContribution = (cost * promoterContributionPct) / 100;
    const bankLoan = cost - estimatedPromoterContribution;

    return res.status(200).json({
      success: true,
      data: {
        projectCost: cost,
        subsidyPercentage,
        estimatedSubsidy,
        promoterContributionPct,
        estimatedPromoterContribution,
        bankLoan
      }
    });
  } catch (error) {
    console.error('Error calculating eligibility:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error during eligibility calculation.'
    });
  }
};
