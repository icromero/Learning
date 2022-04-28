import { PokemonDetail } from '../models/pokemon.detail';

import { PokemonService } from '../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonList } from '../models/pokemon.list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  pokemonsList: PokemonList[] = [];
  pokemonsLimit: number = 180;


  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    for (let index = 1; index < this.pokemonsLimit+1; index++) {
      this.pokeService.getPokemons(index).subscribe(
        (res: any) => {
          const results: PokemonDetail = res;
          const formattedResultsList: PokemonList = {
            id: results.id,
            name: results.name,
            image: results.sprites.front_default
          }
          this.pokemonsList.push(formattedResultsList);


        },
        err => {
          console.log(err);
        }
      );
    }

  }

}
