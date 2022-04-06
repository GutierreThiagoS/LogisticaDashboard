import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceComponent } from './performance/performance.component';
import { WorkersComponent } from './workers/workers.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: TeamComponent,
  //   data: {
  //     title: 'Team'
  //   }
  // },
  {
    path: '',
    data: {
      title: 'Team',
    },
    children: [
      {
        path: '',
        redirectTo: 'workers',
        pathMatch: 'prefix',
      },
      {
        path: 'workers',
        component: WorkersComponent,
        data: {
          title: 'Workers',
        },
      },
      {
        path: 'performance',
        component: PerformanceComponent,
        data: {
          title: 'Performance',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule { }
