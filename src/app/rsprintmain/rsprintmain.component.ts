import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsprintmain',
  standalone: true,
  imports: [],
  templateUrl: './rsprintmain.component.html',
  styleUrl: './rsprintmain.component.scss'
})
export class RsprintmainComponent {
  constructor(private router: Router) { }

  onLinkClick(fragment: string) {
    this.router.navigate(['/servicios'], { fragment: fragment });
  }
}
