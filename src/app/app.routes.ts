import { Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
    {path:"",redirectTo:"signup",pathMatch:'full'},
    {path:"etudiant",component:EtudiantComponent},
    {path:"signup",component:SignupComponent},
    {path:"signin",component:SigninComponent}
];
