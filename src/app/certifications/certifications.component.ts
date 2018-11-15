import { Component, OnInit, ElementRef, Inject, HostListener } from '@angular/core';
import { expand } from '../animations/app-animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  animations:[expand()]
})
export class CertificationsComponent implements OnInit {
  state= 'hide'

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document:any ) { }
  @HostListener('window:scroll', ['$event'])
  checkScroll(){
 
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = document.documentElement.scrollTop+600
    console.log("scroll posion is ", document.documentElement.scrollTop)
    console.log("component postion is ", this.el.nativeElement.offsetTop)

    if(scrollPosition >= componentPosition){
      this.state = 'show'
    }else{
      this.state = 'hide'
    }

  }


  ngOnInit() {
  }

}
