import { Component, OnInit } from '@angular/core';
import { RsprintheaderComponent } from '../rsprintheader/rsprintheader.component';
import { RsprintfooterComponent } from '../rsprintfooter/rsprintfooter.component';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-rsprintservice',
  standalone: true,
  imports: [RsprintheaderComponent, RsprintfooterComponent, CommonModule],
  templateUrl: './rsprintservice.component.html',
  styleUrl: './rsprintservice.component.scss'
})

export class RsprintserviceComponent implements OnInit {
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
}
