import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';

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
        path: 'create-user',
        component: CreateUserComponent,
        data: {
          title: 'Create User',
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