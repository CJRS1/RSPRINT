import { Component } from '@angular/core';
import { RsprintheaderComponent } from '../rsprintheader/rsprintheader.component';
import { RsprintfooterComponent } from '../rsprintfooter/rsprintfooter.component';

@Component({
  selector: 'app-rsprintus',
  standalone: true,
  imports: [RsprintheaderComponent, RsprintfooterComponent],
  templateUrl: './rsprintus.component.html',
  styleUrl: './rsprintus.component.scss'
})
export class RsprintusComponent {

}
