import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resultat } from 'src/app/model/resultat';
import { AnalysesService } from 'src/app/service/analyses.service';
import * as xlsx from 'xlsx';
@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {

  resultats : any ;
  fileName= 'ExcelSheet.xlsx';

  p: number = 1;
  selectedAnalyse: any;
  

  constructor(private analyseService : AnalysesService , private router:Router) { }


  ngOnInit(): void { 
    this.getResultat();
  }

  getResultat(){
    this.analyseService.getAllResultat(150,40).subscribe(
      (res) => { 
        this.resultats = res;
        console.log(this.resultats);
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
  updateResultat(resultat: Resultat) {
    window.localStorage.removeItem("resultat ID");
    window.localStorage.setItem("resultat ID", resultat.id_resultat.toString());
  
    this.router.navigate(['/analyse/editResultat']);
  };
  addResultat(): void {
    this.router.navigate(['/analyse/createResultat']);
  };
  deleteResultat(resultat:Resultat)
{
  this.analyseService.removeResultat(resultat.id_resultat)
  .subscribe( data => {
    //this.users = this.users.filter(u => u !== user);
    
  })
 
}
  
}

