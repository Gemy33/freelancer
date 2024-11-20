import { ApplicationConfig, importProvidersFrom, } from '@angular/core';
import { provideRouter,  withComponentInputBinding,  withInMemoryScrolling,  withViewTransitions } from '@angular/router';
import {  provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { alertInterceptor } from './interceptor/alert.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
  
  provideRouter(routes,withViewTransitions(),withComponentInputBinding(),withInMemoryScrolling({scrollPositionRestoration:"top"})),
  provideClientHydration(),
  provideHttpClient(withFetch(),withInterceptors([alertInterceptor])),
  provideAnimations(),
  provideToastr(),
  provideAnimations(),
  importProvidersFrom( NgxSpinnerModule )   
     
    
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

