import { Component, OnInit } from '@angular/core';

import { cilAt } from '@coreui/icons'

import {AutofillMonitor} from '@angular/cdk/text-field';
import {AfterViewInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit, AfterViewInit, OnDestroy {

  public icon = cilAt

  @ViewChild('first', { read: ElementRef }) firstName!: ElementRef<HTMLElement>; 
  @ViewChild('last', {read: ElementRef}) lastName!: ElementRef<HTMLElement> 
  firstNameAutofilled: boolean = false;
  lastNameAutofilled: boolean = false;

  constructor(private _autofill: AutofillMonitor) {}
  
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this._autofill
      .monitor(this.firstName)
      .subscribe(e => (this.firstNameAutofilled = e.isAutofilled));
    this._autofill
      .monitor(this.lastName)
      .subscribe(e => (this.lastNameAutofilled = e.isAutofilled));
  }

  ngOnDestroy() {
    this._autofill.stopMonitoring(this.firstName);
    this._autofill.stopMonitoring(this.lastName);
  }

}
