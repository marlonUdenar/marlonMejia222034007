import { Component } from '@angular/core';
import { SidetopPageComponent } from "../../../sidetop/views/sidetop-page/sidetop-page.component";
import { SidebarPageComponent } from "../../../sidebar/views/sidebar-page/sidebar-page.component";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [SidetopPageComponent, SidebarPageComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

}
