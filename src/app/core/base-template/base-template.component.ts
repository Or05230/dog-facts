import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {OverlaySpinner} from '../overlay-spinner/overlay-spinner';

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.scss'],
})
export class BaseTemplateComponent {
  copyright = '© Or Ahlagi 2021';


  constructor(private overlaySpinner: OverlaySpinner, private router: Router) {
  }

  async navigateToHome() {
    await this.router.navigate(['/'])

  }
}
