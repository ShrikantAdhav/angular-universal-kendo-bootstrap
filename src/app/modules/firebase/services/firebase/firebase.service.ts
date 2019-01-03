import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  loginUser(
    emailId?: string,
    password?: string
  ): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(
      emailId || 's.adhav@easternenterprise.com',
      password || 'Ansh@123'
    );
  }

  logout(): Promise<void> {
    return this.angularFireAuth.auth.signOut();
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.angularFireAuth.authState
      .take(1)
      .map(user => !!user)
      .do(loggedIn => loggedIn);
  }
}
