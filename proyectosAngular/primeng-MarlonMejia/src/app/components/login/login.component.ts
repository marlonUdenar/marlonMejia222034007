import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import "../../formularios/formularios-plantilla1/formularios-plantilla1.component";
import { FormulariosPlantilla1Component } from '../../formularios/formularios-plantilla1/formularios-plantilla1.component';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, FormulariosPlantilla1Component, ButtonModule, 
    ReactiveFormsModule, PasswordModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm;

  constructor(private fb: FormBuilder){

    this.loginForm = this.fb.group({

      //email
      email: ['', {
        Validators: [
          Validators.required, 
          Validators.email
        ], 
      }],
      
      //password
      password: ['', {
        Validators: [
          Validators.required, 
        ], 
      }],
  
    });
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }
}
