import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
// In your component.ts file
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
