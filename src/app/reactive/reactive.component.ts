import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from "@angular/common";
import {  ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-reactive',
  imports: [
    CommonModule, 
    ReactiveFormsModule,
  ],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    // Initialize the form
    this.userForm = this.fb.group({
      name: ['', Validators.required], // Required field
      email: ['', [Validators.required, Validators.email]], // Email validation
      gender: ['', Validators.required], // Dropdown required
      terms: [false, Validators.requiredTrue],
      
      
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      this.toastr.info('Form Submitted Successfully!');
    } else {
      this.toastr.error('Please fill out all required fields!');
    }
  }
}
