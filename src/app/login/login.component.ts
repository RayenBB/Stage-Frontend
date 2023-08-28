import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Navigation, Router} from "@angular/router";
import {StorageService} from "../services/storage/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    email!: ''
    password!: ''

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthenticationService,
    private storageService: StorageService,
    private router: Router
  ) {}

ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {

    this.authService.login(this.email, this.password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log(this.roles)
        if (this.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['admin/dashboard']).then(() => {
            //window.location.reload();
          });
        } else if (this.roles.includes('ROLE_USER')) {
          this.router.navigate(['admin/appel']).then(() => {
            window.location.reload();
          });
        }
        localStorage.setItem(
          'access_token',
          this.storageService.getUser().access_token

        );
        console.log(localStorage.getItem('access_token'))
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
        this.isLoginFailed = true;
      },
    });
  }
 /* onSubmit(): void {
    this.authService.login(this.email,this.password).subscribe(
      (response) => {
        // Handle successful authentication
        console.log('Authentication successful', response.role,response.token);
        this.router.navigate(['admin/dashboard']);
      },
      (error) => {
        // Handle authentication error
        this.errorMessage = 'Authentication failed. Please check your credentials.';
        console.error('Authentication error', error);
      }
    );
  }*/

}
