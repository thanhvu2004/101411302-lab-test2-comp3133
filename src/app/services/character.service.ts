import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly apiUrl: string = 'https://hp-api.onrender.com/api/characters';

  constructor(private readonly http: HttpClient) {}

  fetchCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  fetchCharacterById(id: string): Observable<any> {
    return this.http.get<any>(`https://hp-api.onrender.com/api/character/${id}`);
  }

  fetchCharactersByHouse(house: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/house/${house.toLowerCase()}`);
  }
}