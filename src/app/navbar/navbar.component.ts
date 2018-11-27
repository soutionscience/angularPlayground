import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dropdown: boolean

  constructor() { }

  ngOnInit() {
    this.dropdown = false;
  }
  dropDown(){
    this.dropdown =this.dropdown? false: true
    console.log(this.dropdown)
  }

}
