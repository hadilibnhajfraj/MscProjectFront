import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalysesService } from 'src/app/service/analyses.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  analyses : any ;
  fileName= 'ExcelSheet.xlsx';

  p: number = 1;
  selectedAnalyse: any;
  

  constructor(private analyseService : AnalysesService , private router:Router) { }


  ngOnInit(): void { this.getAnalyse()}

   getAnalyse(){
    this.analyseService.getAllAnalyse().subscribe(
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