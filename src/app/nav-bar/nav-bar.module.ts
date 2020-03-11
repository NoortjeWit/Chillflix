import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavBarComponent, SearchBarComponent, LoginComponent],
  exports: [NavBarComponent, SearchBarComponent, LoginComponent]
})
export class NavBarModule { }
