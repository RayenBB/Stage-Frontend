import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { StorageService } from '../../../services/storage/storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../Models/User";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class AcceuilComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private storageService: StorageService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  roles: string[]=[]; // Declare roles here
  user :User={nom:'', titre: '',telephone: '', numerodebureau : '', nomentreprise: '', numinscription : '' ,numidentifiant:'', typesoumissionnaire: '',
    pays: '',typedemarche: '',numtel : '',numfax : '',emailsociete:'',email:'',password:'',role:''}


  ngOnInit(): void {
    const token = this.storageService.getUser().access_token;
    console.log('Token:', token);

    const tokenParts = token.split('.');
    console.log('Token Parts:', tokenParts);

    const tokenPayload = JSON.parse(atob(tokenParts[1]));
    console.log('Token Payload:', tokenPayload);

    const email = tokenPayload.sub; // Replace 'email' with the actual key used in your JWT payload
    console.log('Email:', email);

    this.userService.getUserbymail(email).subscribe(
      (user: User) => {
        this.user = user;
        console.log(this.user)
        // Your other logic here
      },
      (error) => {
        console.error(error);
      }
    );
    if (this.storageService.isLoggedIn()) {
      this.roles = this.storageService.getUser().roles; // Initialize roles here

      if (this.roles.includes('ROLE_ADMIN')) {
        this.user1 = this.storageService.getUser().username;
        // Your other admin-related code here
      } else if (this.roles.includes('ROLE_USER')) {
        this.user1 = this.storageService.getUser().username;
        // Your other user-related code here
      }
    }

  }
user1!:''

}
