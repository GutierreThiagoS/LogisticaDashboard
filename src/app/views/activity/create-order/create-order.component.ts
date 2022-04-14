import { Component, OnInit } from '@angular/core';

import { formatDate } from '@angular/common';

import { RegisterOrderService } from '../../../services/register-order.service'
import { Worker } from '../../../models/worker'

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  public workers: Worker[] = []

  public timeout: number = 4000;

  public isError: boolean = false;
  public hintUserIdError: boolean = false;
  public hintCodeNfError: boolean = false;
  public hintDateError: boolean = false;

  public user_id: string = ''

  public code_nf: string = ''

  public dateOrder: string = ''

  private date = new Date()

  constructor(private service: RegisterOrderService) {}

  ngOnInit(): void {
    this.dateOrder = formatDate(this.date.getTime(), 'yyyy-MM-dd', 'pt-PT')

    this.service.getWorders().subscribe(
      {
       next: (res) => {
         console.log(res)
         this.workers = res.users;
       },
       error: (error) => {
        console.error(error)
       }
      }
    )
  }

  public createOrder() {

    console.log("dateOrder: " + this.dateOrder)
    console.log("code_nf: " + this.code_nf)
    console.log("user_id: " + this.user_id)

    if(this.user_id.trim() === "") {
      this.hintUserIdError = true;
      this.isError = true;
      setTimeout(() => {
        this.hintUserIdError = false;
      }, this.timeout);
    }

    if(this.code_nf === "") {
      this.hintCodeNfError = true;
      this.isError = true;
      setTimeout(() => {
        this.hintCodeNfError = false;
      }, this.timeout);
    }

    if(this.dateOrder.trim() === "") {
      this.hintDateError = true;
      this.isError = true;
      setTimeout(() => {
        this.hintDateError = false;
      }, this.timeout);
    }

    if(this.isError) {
      this.isError = false;
      console.log("isError: " + this.isError)

    } else {

      this.service.createOrder({date: this.dateOrder, nf: this.code_nf, user_id: this.user_id}).subscribe(
        {
          next: (res) => {
            alert(res.info)
          }, error: (error) => {
            alert(error)
          }
        }
      )
    }

  }

}
