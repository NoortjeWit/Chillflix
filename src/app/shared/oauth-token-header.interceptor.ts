import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
	token: string;

	constructor(private loginService: LoginService) { };

	intercept(req: HttpRequest<any>, next: HttpHandler):
		Observable<HttpEvent<any>> {
		if (this.loginService.user) {
			this.token = this.loginService.user.authToken;
			console.log(this.loginService.user);
			if (req.url.includes("https://www.googleapis.com/youtube")) {
				req = req.clone(
					{
            headers: req.headers.set('Authorization', `Bearer ${this.token}`).set('Accept', 'application/json')
					}
				)
				console.log(req.headers);
			};
			return next.handle(req);
		}
	};

}
