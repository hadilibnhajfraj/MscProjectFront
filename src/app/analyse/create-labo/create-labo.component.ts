import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AnalysesService } from 'src/app/service/analyses.service';

@Component({
  selector: 'app-create-labo',
  templateUrl: './create-labo.component.html',
  styleUrls: ['./create-labo.component.css']
})
export class CreateLaboComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private AnalyseService: AnalysesService,private router:Router) {
 
    this.angForm = this.fb.group({
      nom_labo: ['', Validators.required],
    
      adresse_labo: ['', Validators.required],
      
      commune_labo: ['', Validators.required],
      pays_labo:['',Validators.required]
    });
   }
 
  ngOnInit() {
  }
  postdata(angForm1:any)
  {
    this.AnalyseService.createlabo
    (angForm1.value.nom_labo,angForm1.value.adresse_labo
      ,angForm1.value.commune_labo,angForm1.value.pays_labo)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['/analyse/createAnalyse']);
          },
          error => {
          });
  }
  get nom_labo() { return this.angForm.get('nom_labo'); }
 
  get adresse_labo() { return this.angForm.get('adresse_labo'); }
  
  get commune_labo() { return this.angForm.get('commune_labo'); }
 
  get pays_labo() { return this.angForm.get('pays_labo'); }
 
}
