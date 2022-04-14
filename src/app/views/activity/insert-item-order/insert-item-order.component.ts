import { Component, OnInit } from '@angular/core';

import { InsertItemOrderService } from '../../../services/insert-item-order.service'

@Component({
  selector: 'app-insert-item-order',
  templateUrl: './insert-item-order.component.html',
  styleUrls: ['./insert-item-order.component.scss']
})
export class InsertItemOrderComponent implements OnInit {

  public order_id: string = "";

  public orders: any[] = [];

  public hintOrderIdError: boolean = false;

  public description: string = "";

  public street: string = "";
  public module: string = "";
  public height: string = "";
  public position: string = "";

  public quantity: string = "";
  public codeTag: string = "";
  public unity: string = "UN";
  public colorTag: string = "";
  public ean: string = "";
  public price: string = "";

  constructor(private service: InsertItemOrderService) { }

  ngOnInit(): void {
    this.service.getAllOrdersUsers().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  public insertItemOrder() {
    console.log("description: " + this.description)
    console.log("street: " + this.street)
    console.log("module: " + this.module)
    console.log("height: " + this.height)
    console.log("position: " + this.position)

    console.log("quantity: " + this.quantity)
    console.log("codeTag: " + this.codeTag)
    console.log("unity: " + this.unity)
    console.log("colorTag: " + this.colorTag)
    console.log("ean: " + this.ean)
    console.log("price: " + this.price)

  }

}
