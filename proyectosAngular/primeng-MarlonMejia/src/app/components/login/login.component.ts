import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import "../../formularios/formularios-plantilla1/formularios-plantilla1.component";
import { FormulariosPlantilla1Component } from '../../formularios/formularios-plantilla1/formularios-plantilla1.component';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, FormulariosPlantilla1Component, ButtonModule, 
    ReactiveFormsModule, PasswordModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

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

  onSubmit() {
    if(this.loginForm.validator) {
      console.log(this.loginForm.value);
    } else {
      console.log('Formulario Invalido')
    }
  };


}
