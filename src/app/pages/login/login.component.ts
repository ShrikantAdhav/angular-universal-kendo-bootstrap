import { FirebaseService } from './../../modules/firebase/services/firebase/firebase.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  loginUser() {
    this.firebaseService.loginUser('s.adhav@easternenterprise.com', 'Ansh@123')
      .then((success) => {
        this.router.navigate(['home']);
      })
      .catch((failed) => {
        console.log('failed to log in - ', failed);
      });
  }
}
