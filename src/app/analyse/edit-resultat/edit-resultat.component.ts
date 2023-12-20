import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';

import { Resultat } from 'src/app/model/resultat';
import { AnalysesService } from 'src/app/service/analyses.service';

@Component({
  selector: 'app-edit-resultat',
  templateUrl: './edit-resultat.component.html',
  styleUrls: ['./edit-resultat.component.css']
})
export class EditResultatComponent implements OnInit {

  resultat!: Resultat;
  angform: FormGroup;
  constructor(private analyseService:AnalysesService , 
    private router: Router , private f:FormBuilder) {
      this.angform = this.f.group({
       id_resultat: [''],
        num_analyse: new FormControl('', [Validators.required]),
        nom_resultat: new FormControl('', [Validators.required]),
        valeur_resultat: new FormControl('', [Validators.required]),
      });
     }
    ngOnInit() {
      let id_resultat = window.localStorage.getItem("resultat ID");
      
      if(!id_resultat ) {
        this.router.navigate(['/analyse/editResultat']);
        return;
      }
      this.analyseService.getResultatId(+id_resultat)
        .subscribe( data => {
         
          this.angform.patchValue({
            id_resultat:data[0].id_resultat,
            num_analyse:data[0].num_analyse,
            nom_resultat:data[0].nom_resultat,
            valeur_resultat:data[0].valeur_resultat,
         });
        });
    }
  
  postdata(form1:any)
  {
    this.analyseService.updateResultat(
      form1.value.id_resultat,
      form1.value.num_analyse,
      form1.value.nom_resultat,
      form1.value.valeur_resultat)
 
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/analyse/Afficher']);
        },
        error => {
        });
      }

  get id_resultat() { return this.angform.get('id_resultat'); }
  get num_analyse() { return this.angform.get('num_analyse'); }
  get nom_resultat() { return this.angform.get('nom_resultat'); }
  get valeur_resultat() { return this.angform.get('valeur_resultat'); }


  }