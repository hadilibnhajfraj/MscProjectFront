import { Component, OnInit } from '@angular/core';
import { AnalysesService } from 'src/app/service/analyses.service';
import { Router } from '@angular/router';
import * as xlsx from 'xlsx';
import { Patient } from 'src/app/model/patient';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients : any ;
  fileName= 'ExcelSheet.xlsx';

  p: number = 1;
  selectedAnalyse: any;
  

  constructor(private analyseService : AnalysesService , 
    private router:Router) { }


  ngOnInit(): void {


    this.analyseService.getAllPatient(150,40).subscribe(
      (res) => { 
        this.patients = res;
        console.log(this.patients);
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
  updatePatient(patient: Patient) {
    window.localStorage.removeItem("Patient ID");
    window.localStorage.setItem("Patient ID", patient.id_patient.toString());
  
    this.router.navigate(['/analyse/editPatient']);
  };
  addPatient(): void {
    this.router.navigate(['/analyse/create']);
  };
  deletePatient(patient:Patient)
  {
    this.analyseService.removePatient(patient.id_patient)
    .subscribe( data => {
      //this.users = this.users.filter(u => u !== user);
      
    })
   
  }
}
