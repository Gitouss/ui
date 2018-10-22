import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { RestComponent } from './rest/rest.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'rest', component: RestComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
