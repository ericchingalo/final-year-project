import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../../account/models/user.model';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly navCtrl: NavController,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentUser: User = this.authService.currentUserValue;

    if (currentUser && currentUser.authdata) {
      return true;
    } else {
      this.navCtrl.navigateRoot('/launch/auth');
      return false;
    }

    return currentUser && currentUser.authdata ? true : false;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(next, state);
  }
}
