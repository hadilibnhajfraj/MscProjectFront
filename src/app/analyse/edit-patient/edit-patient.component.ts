import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AnalysesService } from 'src/app/service/analyses.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  
  
  angform: FormGroup;
  constructor(private analyseService:AnalysesService , 
    
    private router: Router , private f:FormBuilder) {
      this.angform = this.f.group({
        
        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        date_naissance: new FormControl('', [Validators.required]),
        adresse: new FormControl('', [Validators.required]),
        code_postal: new FormControl('', [Validators.required]),
        commune: new FormControl('', [Validators.required]),
        pays: new FormControl('', [Validators.required]),
       
        id_patient: ['']
      });
     }

 
    ngOnInit() {
      let id_patient = window.localStorage.getItem("Patient ID");
      
      if(!id_patient ) {
        this.router.navigate(['/analyse/editPatient']);
        return;
      }
      this.analyseService.getPatientId(+id_patient)
        .subscribe( data => {
         
          this.angform.patchValue({
            id_patient:data[0].id_patient,
            nom:data[0].nom,
            prenom:data[0].prenom,
            date_naissance:data[0].date_naissance,
            adresse:data[0].adresse,
            code_postal:data[0].code_postal,
            commune:data[0].commune,
            pays:data[0].pays
         });
        });
    }
  
  postdata(angform1:any): void
  {
    this.analyseService.updatePatient(
      angform1.value.id_patient,
      angform1.value.nom,
      angform1.value.prenom,
      angform1.value.date_naissance,
      angform1.value.adresse,
      angform1.value.code_postal,
      angform1.value.commune,
      angform1.value.pays
       )
 
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/analyse/Patient']);
        },
        error => {
        });
      }

  get id_patient(){return this.angform.get('id_patient');}
  get nom() { return this.angform.get('nom'); }
  get prenom() { return this.angform.get('prenom'); }
  get date_naissance() { return this.angform.get('date_naissance'); }
  get adresse() { return this.angform.get('adreese'); }
  get code_postal(){return this.angform.get('code_postal');}
  get commune(){return this.angform.get('commune');}
  get pays(){return this.angform.get('pays');}

  }