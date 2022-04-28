import { Pipe, PipeTransform } from '@angular/core';
import { PokemonList } from '../../models/pokemon.list';

@Pipe({
  name: 'filterPage'
})
export class FilterPagePipe implements PipeTransform {

  transform(list: PokemonList[], pageSize: string | number, pageNumber: number): PokemonList[] {
    if (!list.length) return []
    if (pageSize === 'all') return list;
    --pageNumber;
    //@ts-ignore
    const filteredList: PokemonList[] = list.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
    return filteredList;

  }

}
