import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { ContentTypeInterceptor } from './ctype-interceptor';


export const httpInterceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true },
];
