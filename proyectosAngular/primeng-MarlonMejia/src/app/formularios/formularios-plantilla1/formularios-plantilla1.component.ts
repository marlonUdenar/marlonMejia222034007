import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-formularios-plantilla1',
  standalone: true,
  imports: [InputTextModule, FormsModule, PasswordModule, ButtonModule],
  templateUrl: './formularios-plantilla1.component.html',
  styleUrl: './formularios-plantilla1.component.css'
})
export class FormulariosPlantilla1Component {
  user: string="";
  password: string="";

}
