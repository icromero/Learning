import { CharacterResponseInterface } from '../../models/character.interface';
import { CharacterInterface } from '../../models/character.interface';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { RickMortyService } from 'src/services/rick-morty.service';
@Component({
  selector: 'app-mix-list',
  templateUrl: './mix-list.component.html',
  styleUrls: ['./mix-list.component.scss']
})
export class MixListComponent implements OnInit {
  filter: string;
  pageSize: number = 25;
  pageNumber: number = 1;
  characterList: CharacterInterface[] = [];
  constructor(private rickMortyService : RickMortyService) {
    this.filter = '';
  }

  ngOnInit(): void {
    this.getCharacters();
    console.log(this.characterList);
  }

  getCharacters(){
    this.rickMortyService.getCharacters()
    .subscribe((data: CharacterResponseInterface| any) =>{
      const results: CharacterInterface[] = data.results;
      console.log(data);
      const formattedResults = results.map(({id,name,image}) =>({
        id,
        name,
        image
      }));
      this.characterList =formattedResults;

    })
  }

  handlePage(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }
}
