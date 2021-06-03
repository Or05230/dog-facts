import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseTemplateComponent} from './core/base-template/base-template.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '', component: BaseTemplateComponent, children: [
      { path: 'home', component: HomeComponent },
    ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
