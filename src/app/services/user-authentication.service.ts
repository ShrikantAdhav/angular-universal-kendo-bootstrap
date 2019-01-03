import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from './../modules/firebase/services/firebase/firebase.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';

@Injectable()
export class UserAuthenticationService implements CanActivate {

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.firebaseService.isUserLoggedIn()
      .pipe(map(res => {
        if (res) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }));
  }
}
