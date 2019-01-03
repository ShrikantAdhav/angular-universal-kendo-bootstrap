import { FirebaseService } from './../../../modules/firebase/services/firebase/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dropDownButtonItems: Array<any> = [
    {
      text: 'My Profile',
    }, {
      text: 'Log Out',
      callback: () => {
        this.logoutUser();
      }
    }
  ];

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  public onSplitButtonItemClick(dataItem: any): void {
    if (dataItem) {
      console.log(dataItem.text);
      if (dataItem.callback) {
        dataItem.callback();
      }

    }
  }

  logoutUser() {
    this.firebaseService.logout()
    .then((success) => {
      console.log('success - ', success);
      localStorage.setItem('isLoggedIn', 'false');
      this.router.navigate(['login']);
    })
    .catch((failed) => {
      console.log('failed - ', failed);
    });
  }

}
