import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-metamask-check',
  templateUrl: './metamask-check.component.html',
  styleUrls: ['./metamask-check.component.css']
})
export class MetamaskCheckComponent implements OnInit {
  @Input()heading: string

  constructor() { }

  ngOnInit() {
    console.log(this.heading)
  }

}
