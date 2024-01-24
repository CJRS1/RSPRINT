import { Component, OnInit } from '@angular/core';
import { RsprintheaderComponent } from '../rsprintheader/rsprintheader.component';
import { RsprintfooterComponent } from '../rsprintfooter/rsprintfooter.component';




@Component({
  selector: 'app-rsprintservice',
  standalone: true,
  imports: [RsprintheaderComponent, RsprintfooterComponent],
  templateUrl: './rsprintservice.component.html',
  styleUrl: './rsprintservice.component.scss'
})
export class RsprintserviceComponent  {

  
}
