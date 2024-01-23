import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RsprintheaderComponent } from './rsprintheader/rsprintheader.component';
import { RsprintcarouselComponent } from './rsprintcarousel/rsprintcarousel.component';
import { RsprintfooterComponent } from './rsprintfooter/rsprintfooter.component';
import { RsprintmainComponent } from './rsprintmain/rsprintmain.component';
import { RsprintserviceComponent } from './rsprintservice/rsprintservice.component';
import { RsprintcontactComponent } from './rsprintcontact/rsprintcontact.component';
import { RsprintusComponent } from './rsprintus/rsprintus.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RsprintheaderComponent, RsprintcarouselComponent, RsprintfooterComponent, RsprintmainComponent, RsprintserviceComponent, RsprintcontactComponent, RsprintusComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rsprint';

}
