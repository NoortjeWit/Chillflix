import { LoginService } from './../../shared/login.service';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;

  constructor(private authService: AuthService, public loginService: LoginService) {

    this.authService.authState.subscribe((user) => {
    console.log(user);
    this.loginService.user = user;
    this.user = user;
    this.loginService.loggedIn = (user != null);
    })
  }

  ngOnInit(): void {

  };

  signInWithGoogle(): void {
    console.log("loggin in...");

    let platform = GoogleLoginProvider.PROVIDER_ID;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (response) => {
        console.log(platform + " logged in user data is= " , response);
        this.loginService.user = response;
      }
    );
  }


  signOut(): void {
    this.authService.signOut(true);
    this.loginService.user = null;
    this.user = null;
    console.log('User signed out.');
  }

}
