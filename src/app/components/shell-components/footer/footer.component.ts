import { environmentsFreeContent } from './../../../../environments-free-content/environments-free-content';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public environmentsFreeContent;
  constructor() {
    this.environmentsFreeContent = environmentsFreeContent;
  }
}
