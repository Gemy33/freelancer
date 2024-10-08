import { ApplicationConfig, } from '@angular/core';
import { provideRouter,  withViewTransitions } from '@angular/router';
import {  provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes,withViewTransitions()),
  provideClientHydration(),
  provideHttpClient(withFetch()),
  provideAnimations()
   
     
    
  ],
}
  
  





// import {
//   HttpClientModule,
//   provideHttpClient,
//   withFetch,
// } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideClientHydration(),
//     provideHttpClient(withFetch()),
//     importProvidersFrom(BrowserAnimationsModule, RouterModule),
//   ],
// };

