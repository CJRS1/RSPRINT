import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RsprintheaderComponent } from './rsprintheader/rsprintheader.component';
import { RsprintcarouselComponent } from './rsprintcarousel/rsprintcarousel.component';
import { RsprintfooterComponent } from './rsprintfooter/rsprintfooter.component';
import { RsprintmainComponent } from './rsprintmain/rsprintmain.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RsprintheaderComponent, RsprintcarouselComponent, RsprintfooterComponent, RsprintmainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rsprint';
}
