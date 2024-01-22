import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RsprintserviceComponent } from './rsprintservice/rsprintservice.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'servicios', component: RsprintserviceComponent }
];
