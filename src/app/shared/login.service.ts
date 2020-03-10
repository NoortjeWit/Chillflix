import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: SocialUser;
  loggedIn: boolean;

  constructor() { }
}
