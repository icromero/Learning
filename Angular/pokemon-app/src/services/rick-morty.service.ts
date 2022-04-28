import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  baseURL = environment.rickMortyBaseUrl;
  characterURL = environment.rickMortyBaseUrl+'character';

  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get(this.characterURL);
  }
}
