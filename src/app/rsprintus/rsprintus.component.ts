import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsprintheaderComponent } from '../rsprintheader/rsprintheader.component';
import { RsprintfooterComponent } from '../rsprintfooter/rsprintfooter.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-rsprintus',
  standalone: true,
  imports: [RsprintheaderComponent, RsprintfooterComponent, MatButtonToggleModule, CommonModule],
  templateUrl: './rsprintus.component.html',
  styleUrl: './rsprintus.component.scss'
})
export class RsprintusComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.reloadPage();
  }

  reloadPage() {
    window.scrollTo(0, 0);
  }

  listenRouting() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.reloadPage();
      }
    });
  }

  // En el componente
  active = 'nosotros';

  setActive(section : string) {
    this.active = section;
  }
}
