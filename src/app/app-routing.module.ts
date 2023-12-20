import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherComponent } from './analyse/afficher/afficher.component';
import { AnalysesComponent } from './analyse/analyses/analyses.component';
import { CreateAnalyseComponent } from './analyse/create-analyse/create-analyse.component';
import { CreateLaboComponent } from './analyse/create-labo/create-labo.component';
import { CreateResultatComponent } from './analyse/create-resultat/create-resultat.component';
import { CreateComponent } from './analyse/create/create.component';
import { DashboardComponent } from './analyse/dashboard/dashboard.component';
import { EditLaboComponent } from './analyse/edit-labo/edit-labo.component';
import { EditPatientComponent } from './analyse/edit-patient/edit-patient.component';
import { EditResultatComponent } from './analyse/edit-resultat/edit-resultat.component';
import { EditComponent } from './analyse/edit/edit.component';
import { FichierComponent } from './analyse/fichier/fichier.component';
import { LaboComponent } from './analyse/labo/labo.component';
import { ListeComponent } from './analyse/liste/liste.component';
import { PatientComponent } from './analyse/patient/patient.component';
import { ResultatComponent } from './analyse/resultat/resultat.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



const routes: Routes = [
  { path: 'analyse', redirectTo: 'analyse/dashboard'},
  { path: 'analyse/dashboard', component: DashboardComponent,canActivate:[AuthGuard]     },
  // { path: 'analyse/:analyseId/view', component: ViewComponent },
  // { path: 'post/create', component: CreateComponent },
  {path:'analyse/analyses' , component:AnalysesComponent},
  {path:'analyse/resultat',component:ResultatComponent},
  { path: 'analyse/edit', component: EditComponent } ,
  { path: 'analyse/create', component: CreateComponent },
  { path: 'analyse/editResultat', component: EditResultatComponent },
  { path: 'analyse/createLabo', component: CreateLaboComponent },
  { path: 'analyse/createAnalyse', component: CreateAnalyseComponent },
  { path: 'analyse/createResultat', component: CreateResultatComponent },
  { path: 'analyse/Afficher', component: AfficherComponent },
  {path:'analyse/Patient' , component:PatientComponent},
  {path:'analyse/Labo' , component:LaboComponent},
  {path:'analyse/editLabo' , component:EditLaboComponent},
  {path:'analyse/editPatient' , component:EditPatientComponent},
  {path:'analyse/fichier' , component:FichierComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'profile',component:ProfileComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
