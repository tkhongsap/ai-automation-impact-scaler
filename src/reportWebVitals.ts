import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry); // Collect Cumulative Layout Shift (CLS)
    onFID(onPerfEntry); // Collect First Input Delay (FID)
    onFCP(onPerfEntry); // Collect First Contentful Paint (FCP)
    onLCP(onPerfEntry); // Collect Largest Contentful Paint (LCP)
    onTTFB(onPerfEntry); // Collect Time to First Byte (TTFB)
  }
};

export default reportWebVitals;