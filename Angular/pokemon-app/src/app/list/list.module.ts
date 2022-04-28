import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonService } from '../../services/pokemon.service';
import { RickMortyService } from '../../services/rick-morty.service';

import { ListRoutingModule } from './list-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CardsComponent } from './cards/cards.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail/detail.component';


import { FilterNamesPipe } from './pipes/filter-names.pipe';
import { FilterPagePipe } from './pipes/filter-page.pipe';
import { MixListComponent } from './mix-list/mix-list.component';


@NgModule({
  declarations: [
    CardsComponent,
    ListComponent,
    DetailComponent,
    FilterNamesPipe,
    FilterPagePipe,
    MixListComponent,
  ],
  exports: [
    FilterNamesPipe,
    FilterPagePipe
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [
    PokemonService,
    RickMortyService
  ]
})
export class ListModule { }
