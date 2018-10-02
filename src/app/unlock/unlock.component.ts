import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent implements OnInit {
  accountsForm: FormGroup;
  @Input() accounts: String [];
  // selected: String


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkAccounts()
    this.createForm()
  }

createForm(){
  this.accountsForm = this.fb.group({
    selected: ''
  })
}

  checkAccounts(){
    console.log("test single")
 
 
  }
  unlockSelected(){
  }

}
