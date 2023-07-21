import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickRoutingModule } from './rick-routing.module';
import { MortyComponent } from './components/morty/morty.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { HeadComponent } from './components/head/head.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    MortyComponent,
    DialogComponent,
    HeadComponent,
    NosotrosComponent,
    WelcomeComponent,
    
  ],
  imports: [
    CommonModule,
    RickRoutingModule,
    MaterialModule,
     
  ]
})
export class RickModule { }
