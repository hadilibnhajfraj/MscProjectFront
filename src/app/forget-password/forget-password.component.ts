import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  message:any;
  error={
    email:null
  }
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }
 onSubmit(form :NgForm){
const email = form.value.email;
this.dataService.forget(email).subscribe(res=>{
  console.log(res);
},(err)=>{
  this.error = err.error.error;
}
)
 }

}
