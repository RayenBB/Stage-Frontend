import {Component, OnInit} from '@angular/core';
import {User} from "../Models/User";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  user: User = {
    nom: '',
    titre: '',
    telephone: '',
    numerodebureau: '',
    nomentreprise: '',
    numinscription: '',
    numidentifiant: '',
    typesoumissionnaire: '',
    pays: '',
    typedemarche: '',
    numtel: '',
    numfax: '',
    emailsociete: '',
    email: '',
    password: '',
    role: ''
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private UserService: UserService, private route: ActivatedRoute, private location: Location ,private router:Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.UserService.getUser(id).subscribe(User => this.user = User);
  }

  onSave(): void {
    this.UserService.updateUser(this.user.id, this.user).subscribe(
      (user) => {
        console.log(user);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.goBack(); // Naviguer vers une autre page ici si nécessaire
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


  goBack(): void {
    this.router.navigate(['/user']); // Navigate back to the previous page
  }

}
