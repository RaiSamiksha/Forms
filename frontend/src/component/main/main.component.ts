import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../service/data-service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required]],
      address: ['',Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      this.userService.createUser(this.myForm.value).subscribe({
        next: (response) => {
          console.log("User created successfully!!", response);
        },
        error: (error) => {
          console.error('Error creating user', error);
        }
      });
    }else{
      console.log('form is invalid..');
    }
  }

}
