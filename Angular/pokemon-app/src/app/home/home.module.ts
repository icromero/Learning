
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SectionAComponent } from './pages/section-a/section-a.component';
import { SectionBComponent } from './pages/section-b/section-b.component';
import { SectionCComponent } from './pages/section-c/section-c.component';

@NgModule({
  declarations: [
    HomeComponent,
    SectionAComponent,
    SectionBComponent,
    SectionCComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
