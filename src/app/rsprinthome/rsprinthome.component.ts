import { Component } from '@angular/core';
import { RsprintcarouselComponent } from '../rsprintcarousel/rsprintcarousel.component';
import { RsprintmainComponent } from '../rsprintmain/rsprintmain.component';

@Component({
  selector: 'app-rsprinthome',
  standalone: true,
  imports: [RsprintcarouselComponent, RsprintmainComponent],
  templateUrl: './rsprinthome.component.html',
  styleUrl: './rsprinthome.component.scss'
})
export class RsprinthomeComponent {

}
