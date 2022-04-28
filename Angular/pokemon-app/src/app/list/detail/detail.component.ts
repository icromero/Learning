import { PokemonService } from './../../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from '../../models/pokemon.detail';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {


  pokemonsDetail!: PokemonDetail;

  constructor(private pokemonService: PokemonService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemonsDetail(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemonsDetail(id: any) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        const results: PokemonDetail = res;

        const formattedResultsDetails: PokemonDetail = {
          id: results.id,
          order: results.order,
          name: results.name,
          height: results.height,
          abilities: results.abilities,
          species: results.species,
          types: results.types,
          weight: results.weight,
          sprites: results.sprites,
          stats: results.stats
        }
        this.pokemonsDetail = formattedResultsDetails;
      },
      err => { 
        console.log(err);
      }
    )
  }

}
