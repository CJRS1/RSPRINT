import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router, NavigationEnd } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-rsprintcontact',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, CommonModule],
  templateUrl: './rsprintcontact.component.html',
  styleUrl: './rsprintcontact.component.scss'
})
export class RsprintcontactComponent implements OnInit {
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

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  emailFormControl2 = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  personaSelected = true; // Por defecto, Persona está seleccionado
  empresaSelected = false;

  togglePersona() {
    this.personaSelected = true;
    this.empresaSelected = false;
  }

  toggleEmpresa() {
    this.personaSelected = false;
    this.empresaSelected = true;
  }

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    cellphone: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    name_company: new FormControl('', Validators.required),
    ruc_company: new FormControl('', Validators.required),
    department_company: new FormControl('', Validators.required),
    cellphone_company: new FormControl('', Validators.required),
    text2: new FormControl('', Validators.required),
  });

}
