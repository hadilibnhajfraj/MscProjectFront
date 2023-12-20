import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Analyse } from 'src/app/model/analyse';

import { AnalysesService } from 'src/app/service/analyses.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  pdfSource="assets/PDF/analyse.pdf";

  analyses:any;
  fileName= 'ExcelSheet.xlsx';

  constructor(private analyseService:AnalysesService , 
    
    private router: Router , private f:FormBuilder) {
    }
    ngOnInit(): void { this.getAnalyse()}

    getAnalyse(){
     this.analyseService.getAllAnalyses(150,10).subscribe(
       (res) => { 
         this.analyses = res;
         console.log(this.analyses);
       },
       (err) => {
         console.log(err);
       }
     )
     
   }
  }