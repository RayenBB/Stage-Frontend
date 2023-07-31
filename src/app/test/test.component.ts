import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  formData = {
    nomentreprise:'',
    nom:'',
    password: '',
    email: '',
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  onSubmit() {
    // Perform form submission logic here, e.g., sending data to the server
    console.log('Form submitted:', this.formData);
  }
}
