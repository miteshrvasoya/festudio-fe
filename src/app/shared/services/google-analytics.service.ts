import { Injectable } from '@angular/core';

declare var gtag: Function; // Declaring gtag to avoid TypeScript error

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  constructor() {
    // Injecting the GA tracking script if not already added in index.html
    if (typeof gtag === 'undefined') {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-HMGNRJ8H3Y`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        gtag('js', new Date());
        gtag('config', 'YOUR_TRACKING_ID');
      };
    }
  }

  trackPageView(url: string): void {
    gtag('event', 'page_view', {
      page_path: url
    });
  }

  trackEvent(eventName: string, eventParams: { [key: string]: any }): void {
    gtag('event', eventName, eventParams);
  }
}
