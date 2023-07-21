import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortyComponent } from './components/morty/morty.component';
import { HeadComponent } from './components/head/head.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'Inicio',
    component : MortyComponent
  },
  {
    path: 'Nosotros',
    component : NosotrosComponent
  },
  {
    path: '',
    component : WelcomeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickRoutingModule { }
