import { Component, OnInit } from '@angular/core';
import { FormBuilder as NeatFormBuilder, persistControl } from '@ngneat/reactive-forms';
import { FormBuilder } from '@angular/forms';

interface sampleForm {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'test';
  constructor(private fb: FormBuilder, private nfb: NeatFormBuilder){}
  form = this.fb.group({
    firstName: '',
    lastName: ''
  })
  neatForm = this.nfb.group<sampleForm>({
    firstName: "",
    lastName: ""
  })
  ngOnInit() {
    persistControl(this.neatForm, "neatForm", {}).subscribe()
    this.form.valueChanges.subscribe(value => {})
    this.neatForm.valueChanges.subscribe(value => {})
    this.neatForm.value$.subscribe(value => console.log(value))
    //this.form.controls.firstName // <- controlsは{[key: string]: AbstractControl;}型のためintellisenseは効かない
    this.neatForm.controls.firstName // <- 型が定義されているためintellisenseがききます
  }
}
