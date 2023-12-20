import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AnalysesService } from 'src/app/service/analyses.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private AnalyseService: AnalysesService,private router:Router) {
 
    this.angForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date_naissance: ['', Validators.required],
      adresse: ['', Validators.required],
      code_postal: ['', Validators.required],
      commune: ['', Validators.required],
      pays:['',Validators.required]
    });
   }
 
  ngOnInit() {
  }
  postdata(angForm1:any)
  {
    this.AnalyseService.createPatient
    (angForm1.value.nom,angForm1.value.prenom,angForm1.value.date_naissance,angForm1.value.adresse
      ,angForm1.value.code_postal,angForm1.value.commune,angForm1.value.pays)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['/analyse/Patient']);
          },
          error => {
          });
  }
  get nom() { return this.angForm.get('nom'); }
  get prenom() { return this.angForm.get('prenom'); }
  get adresse() { return this.angForm.get('adresse'); }
  get date_naissance() { return this.angForm.get('date_naissance'); }
  get commune() { return this.angForm.get('commune'); }
  get code_postal() { return this.angForm.get('code_postal'); }
  get pays() { return this.angForm.get('pays'); }
 
}