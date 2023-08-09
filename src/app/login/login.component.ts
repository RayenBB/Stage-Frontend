import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Navigation, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email!: ''
    password!: ''

  errorMessage = '';

  constructor(private authService: AuthenticationService , private router:Router) {}

  onSubmit(): void {
    this.authService.login(this.email,this.password).subscribe(
      (response) => {
        // Handle successful authentication
        console.log('Authentication successful', response);
        this.router.navigate(['/acceuil']);
      },
      (error) => {
        // Handle authentication error
        this.errorMessage = 'Authentication failed. Please check your credentials.';
        console.error('Authentication error', error);
      }
    );
  }

}
