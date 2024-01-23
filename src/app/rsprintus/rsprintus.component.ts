import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsprintheaderComponent } from '../rsprintheader/rsprintheader.component';
import { RsprintfooterComponent } from '../rsprintfooter/rsprintfooter.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-rsprintus',
  standalone: true,
  imports: [RsprintheaderComponent, RsprintfooterComponent, MatButtonToggleModule, CommonModule],
  templateUrl: './rsprintus.component.html',
  styleUrl: './rsprintus.component.scss'
})
export class RsprintusComponent {

}
