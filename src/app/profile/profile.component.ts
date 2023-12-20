import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userDetails:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');
    if(storage){
      this.userDetails = JSON.parse(storage);
    } else{
     this.SignOut();
    }
  }
  SignOut(){
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }

}
