import { environmentsFreeContent } from './../../../../environments-free-content/environments-free-content';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-with-only-logo',
  templateUrl: './header-with-only-logo.component.html',
  styleUrls: ['./header-with-only-logo.component.scss']
})
export class HeaderWithOnlyLogoComponent {
  public environmentsFreeContent;
  constructor() {
    this.environmentsFreeContent = environmentsFreeContent;
  }
}
