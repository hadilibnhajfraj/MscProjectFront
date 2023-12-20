import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Labo } from 'src/app/model/labo';
import { AnalysesService } from 'src/app/service/analyses.service';

@Component({
  selector: 'app-edit-labo',
  templateUrl: './edit-labo.component.html',
  styleUrls: ['./edit-labo.component.css']
})
export class EditLaboComponent implements OnInit {

 
 
  angform: FormGroup;
  constructor(private analyseService:AnalysesService , 
    
    private router: Router , private f:FormBuilder) {
      this.angform = this.f.group({
        
        nom_labo: new FormControl('', [Validators.required]),
        adresse_labo: new FormControl('', [Validators.required]),
        commune_labo: new FormControl('', [Validators.required]),
        pays_labo: new FormControl('', [Validators.required]),
        id_labo: ['']
      });
     }

 
    ngOnInit() {
      let id_labo = window.localStorage.getItem("labo ID");
      
      if(!id_labo ) {
        this.router.navigate(['/analyse/editLabo']);
        return;
      }
      this.analyseService.getLaboratoireId(+id_labo)
        .subscribe( data => {
         
          this.angform.patchValue({
            id_labo:data[0].id_labo,
            nom_labo:data[0].nom_labo,
            adresse_labo:data[0].adresse_labo,
            commune_labo:data[0].commune_labo,
            
            pays_labo:data[0].pays_labo,
             
   
         });
        });
    }
  
  postdata(angform1:any): void
  {
    this.analyseService.updateLabo(
      angform1.value.id_labo,
      angform1.value.nom_labo,
      angform1.value.adresse_labo,
      angform1.value.commune_labo,
      angform1.value.pays_labo
       )
 
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/analyse/Labo']);
        },
        error => {
        });
      }

      get id_labo(){return this.angform.get('id_labo');}
 
  get nom_labo() { return this.angform.get('nom_labo'); }
  get adresse_labo() { return this.angform.get('adresse_labo'); }
  get commune_labo() { return this.angform.get('commune_labo'); }
  get pays_labo() { return this.angform.get('pays_labo'); }


  }