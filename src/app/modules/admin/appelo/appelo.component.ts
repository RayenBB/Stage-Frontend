import {Component, OnInit} from '@angular/core';
import {Appelo} from "../Models/Appelo";
import {Router} from "@angular/router";
import {AppelService} from "../services/appel.service";

@Component({
  selector: 'app-Appelo',
  templateUrl: './Appelo.component.html',
  styleUrls: ['./Appelo.component.css']
})
export class AppeloComponent implements OnInit{
  appel!: Array<Appelo>;
  errorMessage!: string;
  currentIndex = -1;


  constructor(private appelservice: AppelService ,private router: Router) {}

  ngOnInit() {
    this.retrieveAppelos();
  }

  retrieveAppelos(): void {
    this.appelservice.getAllappels().subscribe({
      next: (data: any) => {
        this.appel= data;
      },
      error: (err: any) => {
        this.errorMessage = err;
      }
    });
  }

  refreshList(): void {
    this.retrieveAppelos();
    this.currentIndex = -1;
  }






}
