import { Injectable, OnInit } from '@angular/core';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: AuthService, ) {
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    console.log("loggin in...");

    let platform = GoogleLoginProvider.PROVIDER_ID;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (response) => {
        console.log(platform + " logged in user data is= ", response);
        this.user = response;
        this.loggedIn = (response != null);
      }
    );
  }

  signOut(): void {
    this.authService.signOut(true);
    this.user = null;
    console.log('User signed out.');
  }

  isAdmin(): boolean {
    if (this.user) {
      if (this.user.email == "chantalschot91@gmail.com" || this.user.email == "noortjewittink@gmail.com") {
        return true;
      }
      else{
        return false;
      }
    } else {
      return false;
    }
  }

}
