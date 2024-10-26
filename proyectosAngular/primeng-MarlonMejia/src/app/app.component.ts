import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import "./formularios/formularios-plantilla1/formularios-plantilla1.component";
import { FormulariosPlantilla1Component } from './formularios/formularios-plantilla1/formularios-plantilla1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, FormulariosPlantilla1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeng-MarlonMejia';
}
