import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminComponent } from './admin-module/admin.component';

@Injectable({
  providedIn: 'root'
})
export class FormfillGuard implements CanDeactivate<AdminComponent> {
  canDeactivate(
    component: AdminComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!component.formChanged()) {
        alert("Your changes have not been saved!");
      }
    return component.formChanged();
  }

}
