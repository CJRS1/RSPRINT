import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-rsprintcarousel',
  standalone: true,
  imports: [],
  templateUrl: './rsprintcarousel.component.html',
  styleUrl: './rsprintcarousel.component.scss'
})
export class RsprintcarouselComponent implements OnInit{
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
