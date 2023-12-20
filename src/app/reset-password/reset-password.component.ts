import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
 
    public error=[];
    public form = {
      email:null,
      password : null,
      password_confirmation:null,
      resetToken : null

    }
  constructor(private route:ActivatedRoute , private dataService:DataService , private router:Router) {
    this.route.queryParams.subscribe(params =>{
      this.form.resetToken = params['resetToken'];
    })
   }
  

  ngOnInit(): void {
   
  }
 onSubmit(){
this.dataService.reset(this.form).subscribe(
  data =>this.handleResponse(data),
  error => this.handleError(error)
)

}
handleResponse(data:any){
this.router.navigateByUrl('/login');
}
handleError(error:any){}

}
