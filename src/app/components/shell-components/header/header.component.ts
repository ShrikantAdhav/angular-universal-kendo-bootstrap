import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: any[] = [
    {
      text: 'Item1',
      items: [{ text: 'Item1.1' }, { text: 'Item1.2', items: [{ text: 'Item1.2.1' }, { text: 'Item1.2.2' }] }]
    }, {
      text: 'Item2',
      items: [{ text: 'Item2.1' }, { text: 'Item2.2' }, { text: 'Item2.3' }]
    }, {
      text: 'Item3'
    }
  ];

  dropDownButtonItems: Array<any> = [
    {
      text: 'My Profile',
      // disabled: true
    }, {
      text: 'Account Settings'
    }, {
      text: 'Support'
    }, {
      text: 'Log Out',
      callback: () => {
        this.logoutUser();
      }
    }
  ];

  constructor(private router: Router) { }

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
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['login']);
  }

}
