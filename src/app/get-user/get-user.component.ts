import {Component, OnInit} from '@angular/core';
import {User} from "../Models/User";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit{
  Users!: Array<User>;
  errorMessage!: string;
  public currentUser!: User;
  currentIndex = -1;


  constructor(private UserService: UserService ,private router: Router) {}

  ngOnInit() {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.UserService.getAllUsers().subscribe({
      next: (data: any) => {
        this.Users = data;
      },
      error: (err: any) => {
        this.errorMessage = err;
      }
    });
  }

  refreshList(): void {
    this.retrieveUsers();
    this.currentIndex = -1;
  }

  removeUser(User: User): void {
    this.UserService.deleteUser(User.id).subscribe({
      next: (response) => {
        console.log(response);
        this.refreshList();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  setActiveUser(User: User, index: number): void {
    this.currentUser = User;
    this.currentIndex = index;
    this.router.navigate(['/update', User.id]);
  }
}
