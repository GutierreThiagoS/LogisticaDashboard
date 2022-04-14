import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';

import { CreateUserComponent } from './create-user/create-user.component';
import { InsertItemOrderComponent } from './insert-item-order/insert-item-order.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Activity',
    },
    children: [
      {
        path: '',
        redirectTo: 'activity',
        pathMatch: 'prefix',
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: {
          title: 'Create User',
        },
      },
      {
        path: 'create-order',
        component: CreateOrderComponent,
        data: {
          title: 'Create Order',
        },
      },
      {
        path: 'insert-item-order',
        component: InsertItemOrderComponent,
        data: {
          title: 'Insert Item Order',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule { }