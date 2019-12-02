import { Component, OnInit, Inject, ElementRef, HostListener } from '@angular/core';
import { flyInOut } from '../animations/app-animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[
    flyInOut()
  ]
})
export class AboutComponent implements OnInit {
   state='hide'
   showWeb: Boolean;
   showAdmin: Boolean
   showCloud: Boolean;

  constructor() { }




  ngOnInit() {
    this.showWeb = true;
    this.showAdmin = false;
    this.showCloud= false
   }
  ngAfterViewInit(){
    this.state = 'show'
  }

  animate(){
    this.state = this.state === 'hide'? 'show': 'hide';
  }
  selected(displine){
    if(displine == 'web'){
      this.showWeb = true;
      this.showAdmin = false;
      this.showCloud = false;
    }else if(displine =='it'){
      this.showAdmin = true;
      this.showWeb = false;
      this.showCloud = false;
    }else{
      this.showWeb= false;
      this.showAdmin = false;
      this.showCloud = true;

    }
  }

}
