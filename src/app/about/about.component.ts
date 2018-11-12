import { Component, OnInit, Inject, ElementRef, HostListener } from '@angular/core';
import { flyInOut } from '../animations/app-animations';
import { DOCUMENT } from '@angular/platform-browser';

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

  constructor() { }

  // @HostListener('window:scroll', ['$event'])
  // checkScroll(){
  //   console.log("check scroll")
 
  //   const componentPosition = this.el.nativeElement.offsetTop
  //   const scrollPosition = document.documentElement.scrollTop + 430;
  //   console.log("scroll posion is ", document.documentElement.scrollTop)
  //   console.log("component postion is ", this.el.nativeElement.offsetTop)

  //   if(scrollPosition >= componentPosition){
  //     this.state = 'show'
  //   }else{
  //     this.state = 'hide'
  //   }
  // }


  ngOnInit() {
    this.state='show'
  }

}
