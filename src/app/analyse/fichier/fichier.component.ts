import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnalysesService } from 'src/app/service/analyses.service';

@Component({
  selector: 'app-fichier',
  templateUrl: './fichier.component.html',
  styleUrls: ['./fichier.component.css']
})
export class FichierComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    pdf: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder,
     private analyseService: AnalysesService , private http: HttpClient) { }
  get f(){
    return this.myForm.controls;
  }
  onFileChange(event:any) {
   
    if (event.target.files.length > 0) {
      const pdf = event.target.files[0];
      this.myForm.patchValue({
        fileSource: pdf
      });
    }
  } 
  ngOnInit() {
    
  }
  submit(){
    const formData = new FormData();
    formData.append('pdf', this.myForm.get('fileSource')?.value);
      
    this.http.post('http://localhost/base/display_pdf.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }
  
}

