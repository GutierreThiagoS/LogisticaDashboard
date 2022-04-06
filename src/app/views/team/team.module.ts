import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceComponent } from './performance/performance.component';
import { WorkersComponent } from './workers/workers.component';

import { TeamRoutingModule } from './team-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  BadgeModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';



@NgModule({
  declarations: [
    PerformanceComponent,
    WorkersComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,

    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    BadgeModule
  ]
})
export class TeamModule { }
