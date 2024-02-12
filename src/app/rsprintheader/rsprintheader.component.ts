import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rsprintheader',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './rsprintheader.component.html',
  styleUrl: './rsprintheader.component.scss'
})
export class RsprintheaderComponent {
  isMenuOpen = false;
  isMenuButtonVisible = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuButtonVisible = !this.isMenuOpen; // Ocultar el botón de hamburguesa cuando se abre el menú

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isMenuButtonVisible = true; // Mostrar el botón del menú al cerrar el menú

    document.body.style.overflow = '';
    document.body.style.height = '';
  }
}
