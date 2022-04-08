import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserComponent } from './create-user/create-user.component';

import { ActivityRoutingModule } from './activity.routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';


import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';

@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule,

    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
})
export class ActivityModule { }
