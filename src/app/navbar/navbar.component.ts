import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  theme = 'light';
  constructor() { }

  ngOnInit(): void {
  }
  switchTheme () {
    if(this.theme==='dark')
    this.theme ='light';
    else this.theme="dark"
  }
  

}
