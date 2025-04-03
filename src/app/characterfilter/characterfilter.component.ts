import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatCardModule, FormsModule, RouterModule],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css']
})
export class CharacterFilterComponent implements OnInit {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse: string = '';
  characters: any[] = [];

  constructor(private readonly characterService: CharacterService) {}

  ngOnInit(): void {}

  onHouseChange(): void {
    if (this.selectedHouse) {
      this.characterService.fetchCharactersByHouse(this.selectedHouse).subscribe(
        (data) => {
          this.characters = data;
        },
        (error) => {
          console.error('Error fetching characters by house:', error);
        }
      );
    } else {
      this.characters = [];
    }
  }
}