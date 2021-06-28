import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = environment.Token;
    request = request.clone({
      setHeaders: {Authorization: `Bearer ${TOKEN}`}
    })
    return next.handle(request)
    .pipe(catchError((error: HttpErrorResponse) => {
      console.log(error.status)
      return throwError(error);
   }));
  }
}
