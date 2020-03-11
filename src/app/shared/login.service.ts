import { Injectable, OnInit } from '@angular/core';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  adminAccount: boolean;

  constructor(private authService: AuthService, ) { }

  ngOnInit(): void {
    this.adminAccount = false;
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
      this.loggedIn = (user != null);
      if (this.user.email == "chantalschot91@gmail.com") {
        this.adminAccount = true;
      };
    });
  }

  signInWithGoogle(): void {
    console.log("loggin in...");

    let platform = GoogleLoginProvider.PROVIDER_ID;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (response) => {
        console.log(platform + " logged in user data is= ", response);
        this.user = response;
      }
    );
  }

  signOut(): void {
    this.authService.signOut(true);
    this.user = null;
    console.log('User signed out.');
  }
}
