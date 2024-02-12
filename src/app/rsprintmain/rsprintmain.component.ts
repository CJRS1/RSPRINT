import { Component, ElementRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rsprintmain',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rsprintmain.component.html',
  styleUrl: './rsprintmain.component.scss'
})
export class RsprintmainComponent implements OnInit{
  contador: number = 0; // Inicializamos el contador en 0

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            this.contador++;
            if (this.contador >= 100) {
              clearInterval(interval);
            }
          }, 50);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.elementRef.nativeElement.querySelector('.works_done_container'));
  }
}
