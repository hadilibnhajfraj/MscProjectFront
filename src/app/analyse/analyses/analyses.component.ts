import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Analyse } from 'src/app/model/analyse';

import { AnalysesService } from 'src/app/service/analyses.service';
import * as xlsx from 'xlsx';
@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {
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
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: xlsx.WorkSheet =xlsx.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    xlsx.writeFile(wb, this.fileName);
 
  }
  updateAnalyse(analyse: Analyse) {
    window.localStorage.removeItem("ID Analyse");
    window.localStorage.setItem("ID Analyse", analyse.id_analyse.toString());
  
    this.router.navigate(['analyse/edit']);
  };
  addUser(): void {
    this.router.navigate(['/analyse/createAnalyse']);
  };
  deleteAnalyse(analyse:Analyse)
{
  this.analyseService.removeAnalyse(analyse.id_analyse)
  .subscribe( data => {
    //this.users = this.users.filter(u => u !== user);
   
  })
}
}