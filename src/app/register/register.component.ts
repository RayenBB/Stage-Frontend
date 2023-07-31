import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../services/authentication.service";
import {User} from "../Models/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user :User={nom:'', titre: '',telephone: '', numerodebureau : '', nomentreprise: '', numinscription : '' ,numidentifiant:'', typesoumissionnaire: '',
  pays: '',typedemarche: '',numtel : '',numfax : '',emailsociete:'',email:'',password:'',role:''}
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  const  data = {
    nom: this.user.nom,
    titre: this.user.titre,
    telephone: this.user.telephone,
    numerodebureau: this.user.numerodebureau,
    nomentreprise: this.user.nomentreprise,
    numinscription: this.user.numinscription,
    numidentifiant:this.user.numidentifiant,
    typesoumissionnaire: this.user.typesoumissionnaire,
    pays: this.user.pays,
    typedemarche: this.user.typedemarche,
    numtel: this.user.numtel,
    numfax: this.user.numfax,
    emailsociete: this.user.emailsociete,
    email: this.user.email,
    password: this.user.password,
    role:"USER"
  };

  this.authService.register(data).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }

    });
  }
}
