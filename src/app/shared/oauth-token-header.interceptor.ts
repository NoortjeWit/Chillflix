import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { isUndefined } from 'util';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
	token: string;

	constructor(private loginService: LoginService) { };

	intercept(req: HttpRequest<any>, next: HttpHandler):
		Observable<HttpEvent<any>> {
		if (this.loginService.user !== null && this.loginService.user !== undefined) {
			this.token = this.loginService.user.authToken;
			console.log("test")
			if (req.url.includes("https://www.googleapis.com/youtube")) {
				req = req.clone({
					headers: req.headers.set('Authorization', `Bearer ${this.token}`).set('Accept', 'application/json')
				})
				console.log(req.headers);
			};
		}
		return next.handle(req);
	};

}
