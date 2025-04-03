import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../services/character.service';


@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  characterId: string | null = null;
  character: any = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.characterId = this.route.snapshot.paramMap.get('id');
    if (this.characterId) {
      this.fetchCharacterDetails(this.characterId);
    }
  }

  fetchCharacterDetails(id: string): void {
    this.characterService.fetchCharacterById(id).subscribe(
      (data) => {
        this.character = data[0];
      },
      (error) => {
        console.error('Error fetching character details:', error);
      }
    );
  }
}