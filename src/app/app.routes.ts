import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { RsprintserviceComponent } from './rsprintservice/rsprintservice.component';
import { RsprintusComponent } from './rsprintus/rsprintus.component';
import { RsprintcontactComponent } from './rsprintcontact/rsprintcontact.component';
import { RsprinthomeComponent } from './rsprinthome/rsprinthome.component';

export const routes: Routes = [
    { path: '', component: RsprinthomeComponent},
    { path: 'servicios', component: RsprintserviceComponent },
    { path: 'nosotros', component: RsprintusComponent },
    { path: 'contactanos', component: RsprintcontactComponent }


];
