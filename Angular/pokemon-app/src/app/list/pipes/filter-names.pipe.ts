import { Pipe, PipeTransform } from '@angular/core';
import { PokemonList } from '../../models/pokemon.list';
@Pipe({
  name: 'filterNames'
})
export class FilterNamesPipe implements PipeTransform {

  transform(list: PokemonList[], filter: string = ''): PokemonList[] {
    const lowerCaseFilter: string = filter.toLocaleLowerCase().trim();
    const filteredList: PokemonList[] = list.filter((el: PokemonList) => el.name.toLocaleLowerCase().includes(lowerCaseFilter));
    if (filter === '') {
      return list;
    }
    return filteredList;
  }

}
