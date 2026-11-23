import { Router } from 'express';
import { createLead, calculateEligibility } from '../controllers/leadsController.js';

const router = Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'AB Consultancy API',
    timestamp: new Date().toISOString()
  });
});

// Lead capture & appointment booking
router.post('/leads', createLead);

// Eligibility calculator API
router.post('/eligibility', calculateEligibility);

export default router;
