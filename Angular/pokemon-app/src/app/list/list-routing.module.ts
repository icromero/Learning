import { MixListComponent } from './mix-list/mix-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail/detail.component'; 

const routes: Routes = [
  { path: '', children: [
    { path: 'mix', component: MixListComponent},
    { path: ':id', component: DetailComponent },
    { path: '**', component: ListComponent  }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
