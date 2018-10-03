import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  sendForm: FormGroup;
  @Input() accounts: String [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
  createForm(){
    this.sendForm = this.fb.group({
      From:'',
      To: '',
      value:'',
      gas:'',
      price:''

    })

  }

}
