import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  showFooter: boolean = true;

  onLoginClick() {
    // Handle the Login button click
    this.showFooter = false;
    // Additional actions if needed
  }
}
