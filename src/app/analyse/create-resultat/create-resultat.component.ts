import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AnalysesService } from 'src/app/service/analyses.service';

@Component({
  selector: 'app-create-resultat',
  templateUrl: './create-resultat.component.html',
  styleUrls: ['./create-resultat.component.css']
})
export class CreateResultatComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,
    private AnalyseService: AnalysesService,
    private router:Router) {
 
    this.angForm = this.fb.group({
      num_analyse: ['', Validators.required],
      nom_resultat: ['', Validators.required],
      valeur_resultat: ['', Validators.required]
      
    });
   }
 
  ngOnInit() {
  }
  postdata(angForm1:any)
  {
    this.AnalyseService.createResultat
    (angForm1.value.num_analyse,angForm1.value.nom_resultat,angForm1.value.valeur_resultat
      )
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['']);
          },
          error => {
          });
  }
  get num_analyse() { return this.angForm.get('num_analyse'); }
  get nom_resultat() { return this.angForm.get('nom_resultat'); }
  get valeur_resultat() { return this.angForm.get('valeur_resultat'); }


 
}