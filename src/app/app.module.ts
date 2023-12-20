import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule} from '@angular/common/http';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { FormsModule ,  ReactiveFormsModule }   from '@angular/forms';
import { AnalysesComponent } from './analyse/analyses/analyses.component';
import { DashboardComponent } from './analyse/dashboard/dashboard.component';
import { EditComponent } from './analyse/edit/edit.component';
import { ResultatComponent } from './analyse/resultat/resultat.component';
import { CreateComponent } from './analyse/create/create.component';
import { EditResultatComponent } from './analyse/edit-resultat/edit-resultat.component';
import { CreateLaboComponent } from './analyse/create-labo/create-labo.component';
import { CreateResultatComponent } from './analyse/create-resultat/create-resultat.component';
import { CreateAnalyseComponent } from './analyse/create-analyse/create-analyse.component';
import { AfficherComponent } from './analyse/afficher/afficher.component';
import { PatientComponent } from './analyse/patient/patient.component';
import { LaboComponent } from './analyse/labo/labo.component';
import { EditLaboComponent } from './analyse/edit-labo/edit-labo.component';
import { EditPatientComponent } from './analyse/edit-patient/edit-patient.component';
import { FichierComponent } from './analyse/fichier/fichier.component';
import { ListeComponent } from './analyse/liste/liste.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ToastrModule } from 'ngx-toastr';
import{ GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    EditComponent,
    ResultatComponent,
    NavbarComponent,

    AnalysesComponent,
      CreateComponent,
      EditResultatComponent,
      CreateLaboComponent,
      CreateResultatComponent,
      CreateAnalyseComponent,
      AfficherComponent,
      PatientComponent,
      LaboComponent,
      EditLaboComponent,
      EditPatientComponent,
      FichierComponent,
      ListeComponent,
      LoginComponent,
      LogoutComponent,
      RegisterComponent,
      ResetPasswordComponent,
      ForgetPasswordComponent,
      ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    NgxPaginationModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    SocialLoginModule,
    SnotifyModule,

  ],
  providers: [
    {
    provide: 'SocialAuthServiceConfig',
    useValue : {
      autoLogin: false,
      providers: [

        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '566489257523-afh58fs4h3pb7jmle8lbf61ao0du9tvq.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig
     },
      {
        provide:'SnotifyToastConfig', useValue:ToastDefaults},
        SnotifyService],

  bootstrap: [AppComponent]
})
export class AppModule { }
