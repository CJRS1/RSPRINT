import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-rsprintcontact',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, CommonModule],
  templateUrl: './rsprintcontact.component.html',
  styleUrls: ['./rsprintcontact.component.scss']
})
export class RsprintcontactComponent {
  ngOnInit() {
    this.reloadPage();
  }

  reloadPage() {
    window.scrollTo(0, 0);
  }



  myForm: FormGroup = this.fb.group({
    name:'',
    lastname:'',
    email:'',
    cellphone:'',
    department:'',
    message:'',
  })

  myFormCompany: FormGroup = this.fb.group({
    name_company: '',
    ruc_company: '',
    department_company: '',
    cellphone_company: '',
    email_company: '',
    message_company: '',
  })

  constructor(private fb: FormBuilder) {};

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

  async send() {
    console.log('hola')
    emailjs.init('1xLTJn9dskBjJvp1F');
    let response = await emailjs.send("service_ws0qnqr","template_1k4toxr", {
      name: this.myForm.value.name,
      lastname: this.myForm.value.lastname,
      department: this.myForm.value.department,
      cellphone: this.myForm.value.cellphone,
      email: this.myForm.value.email,
      message: this.myForm.value.message,
      
    });
    alert('El mensaje ha sido enviado correctamente');
    window.location.reload();

  };



  async send_company() {
    emailjs.init('1xLTJn9dskBjJvp1F');
    let response2 = await emailjs.send("service_ws0qnqr","template_q1bmm2x", {
      name_company: this.myFormCompany.value.name_company,
      ruc_company: this.myFormCompany.value.ruc_company,
      department_company: this.myFormCompany.value.department_company,
      cellphone_company: this.myFormCompany.value.cellphone_company,
      email_company: this.myFormCompany.value.email_company,
      message_company: this.myFormCompany.value.message_company,
      
    });
    alert('El mensaje ha sido enviado correctamente');
    window.location.reload();
};




}
