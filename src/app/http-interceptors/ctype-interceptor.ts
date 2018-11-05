import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentTypeInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('enter hete');
        if (req.headers.has('Content-Type') || req.body instanceof FormData) {

            return next.handle(req);
        }

        const newReq = req.clone({
            setHeaders: { 'Content-Type': 'application/json' }
        });

        return next.handle(newReq);
    }
}
