import { useEffect } from 'react';

/**
 * Custom hook to dynamically manage head tags (Title, Description, Canonical, Author, Publisher, OG, Twitter)
 * for Single Page Applications (SPA) so browser extensions and search crawlers see 100% compliant meta data.
 */
export function useSEO({ title, description, canonical, keywords }) {
  useEffect(() => {
    // 1. Title (< 60 chars)
    if (title) {
      document.title = title;
      setMetaTag('og:title', title, 'property');
      setMetaTag('twitter:title', title, 'name');
    }

    // 2. Description (150 - 160 chars)
    if (description) {
      setMetaTag('description', description, 'name');
      setMetaTag('og:description', description, 'property');
      setMetaTag('twitter:description', description, 'name');
    }

    // 3. Keywords
    if (keywords) {
      setMetaTag('keywords', keywords, 'name');
    }

    // 4. Canonical URL
    if (canonical) {
      setCanonical(canonical);
      setMetaTag('og:url', canonical, 'property');
      setMetaTag('twitter:url', canonical, 'name');
    }

    // 5. Author & Publisher
    setMetaTag('author', 'AB Consultancy', 'name');
    setMetaTag('publisher', 'AB Consultancy', 'name');
  }, [title, description, canonical, keywords]);
}

function setMetaTag(key, value, attributeName = 'name') {
  if (!value) return;
  let element = document.querySelector(`meta[${attributeName}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

function setCanonical(url) {
  if (!url) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}
