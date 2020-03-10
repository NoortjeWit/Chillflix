import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin-module/admin.component';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "admin", component: AdminComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true },
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
