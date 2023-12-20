import { Component, OnInit } from '@angular/core';
import {  FormGroup , FormControl, FormBuilder, Validators , NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Analyse } from 'src/app/model/analyse';

import { AnalysesService } from 'src/app/service/analyses.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  analyse!: Analyse;
  angform: FormGroup;
  constructor(private analyseService:AnalysesService , 
    
    private router: Router , private f:FormBuilder) {
      this.angform = this.f.group({
        
        date: new FormControl('', [Validators.required]),
        patient_num: new FormControl('', [Validators.required]),
        pdf_num: new FormControl('', [Validators.required]),
        labo_num: new FormControl('', [Validators.required]),
        id_analyse: ['']
      });
     }

 
    ngOnInit() {
      let id_analyse = window.localStorage.getItem("ID Analyse");
      
      if(!id_analyse ) {
        this.router.navigate(['/analyse/edit']);
        return;
      }
      this.analyseService.getAnalyseId(+id_analyse)
        .subscribe( data => {
         
          this.angform.patchValue({
            id_analyse:data[0].id_analyse,
            patient_num:data[0].patient_num,
            labo_num:data[0].labo_num,
            date:data[0].date,
            
            pdf_num:data[0].pdf_num,
             
   
         });
        });
    }
  
  postdata(angform1:any): void
  {
    this.analyseService.updateAnalyse(
      angform1.value.id_analyse,
      angform1.value.patient_num,
      angform1.value.labo_num,
      angform1.value.date,
      angform1.value.pdf_num
       )
 
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/analyse/analyses']);
        },
        error => {
        });
      }

      get id_analyse(){return this.angform.get('id_analyse');}
 
  get patient_num() { return this.angform.get('patient_num'); }
  get labo_num() { return this.angform.get('labo_num'); }
  get date() { return this.angform.get('date'); }
  get pdf_num() { return this.angform.get('pdf_num'); }


  }


