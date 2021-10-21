import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorralonRoutingModule } from './corralon-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    IndexComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CorralonRoutingModule
  ]
})
export class CorralonModule { }
