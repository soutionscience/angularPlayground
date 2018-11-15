import { Component, OnInit, ElementRef, Inject, HostListener } from '@angular/core';
import { expand, flyInOut, flyFromRight } from '../animations/app-animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations:[expand(), flyInOut(), flyFromRight()]
})
export class ProjectsComponent implements OnInit {
  state= 'hide'

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: any) { }
  
  @HostListener('window:scroll', ['$event'])
  checkScroll(){
 
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = document.documentElement.scrollTop+ 400
    // console.log("scroll posion is ", document.documentElement.scrollTop)
    // console.log("component postion is ", this.el.nativeElement.offsetTop)

    if(scrollPosition >= componentPosition){
      this.state = 'show'
    }else{
      this.state = 'hide'
    }
  }

  ngOnInit() {
  }

}
