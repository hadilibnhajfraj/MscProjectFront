import { Component, OnInit } from '@angular/core';
import { AnalysesService } from 'src/app/service/analyses.service';
import { Router } from '@angular/router';
import * as xlsx from 'xlsx';
import { Labo } from 'src/app/model/labo';
@Component({
  selector: 'app-labo',
  templateUrl: './labo.component.html',
  styleUrls: ['./labo.component.css']
})
export class LaboComponent implements OnInit {

  labos : any ;
  fileName= 'ExcelSheet.xlsx';

  p: number = 1;
  selectedAnalyse: any;
  

  constructor(private analyseService : AnalysesService , 
    private router:Router) { }


  ngOnInit(): void {


    this.analyseService.getAllLabo(150,40).subscribe(
      (res) => { 
        this.labos = res;
        console.log(this.labos);
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
  updateLabo(labo: Labo) {
    window.localStorage.removeItem("labo ID");
    window.localStorage.setItem("labo ID", labo.id_labo.toString());
  
    this.router.navigate(['/analyse/editLabo']);
  };
  addLabo(): void {
    this.router.navigate(['/analyse/createLabo']);
  };
  deleteLabo(labo:Labo)
  {
    this.analyseService.removeLabo(labo.id_labo)
    .subscribe( data => {
      //this.users = this.users.filter(u => u !== user);
      
    })
   
  }
}