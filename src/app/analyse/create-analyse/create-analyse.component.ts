import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnalysesService } from 'src/app/service/analyses.service';
import { first } from 'rxjs';
@Component({
  selector: 'app-create-analyse',
  templateUrl: './create-analyse.component.html',
  styleUrls: ['./create-analyse.component.css']
})
export class CreateAnalyseComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,
    private AnalyseService: AnalysesService,
    private router:Router) {
 
    this.angForm = this.fb.group({
      patient_num: ['', Validators.required],
      labo_num: ['', Validators.required],
      date: ['', Validators.required],
      pdf_num: ['', Validators.required]
      
    });
   }
 
  ngOnInit() {
  }
  postdata(angForm1:any)
  {
    this.AnalyseService.createAnalyse
    (angForm1.value.patient_num,angForm1.value.labo_num,angForm1.value.date,angForm1.value.pdf_num
      )
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['/analyse/createResultat']);
          },
          error => {
          });
  }
  get patient_num() { return this.angForm.get('patient_num'); }
  get labo_num() { return this.angForm.get('labo_num'); }
  get date() { return this.angForm.get('date'); }
  get pdf_num() { return this.angForm.get('pdf_num'); }

 
}