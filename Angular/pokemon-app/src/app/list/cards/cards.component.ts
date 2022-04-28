import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { PokemonList } from '../../models/pokemon.list';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() pokemonList: PokemonList[] = [];
  filter: string;
  pageSize: number = 25;
  pageNumber: number = 1;
  constructor(private router: Router) {
    this.filter = '';
  }

  ngOnInit(): void {
  }

  handlePage(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }

  getDetails(e: PokemonList) {
    this.router.navigateByUrl(`detail/${e.id}`);  
  }

}
