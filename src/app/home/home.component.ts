import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../service/rick-and-morty.service';
import { Character } from '../model/rickandmorty';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  characters!: Character[];
  filteredCharacters!: Character[];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.rickAndMortyService.getAllCharacters().subscribe((data: any) => {
      this.characters = data.results;
      this.filteredCharacters = this.characters;
    });
  }

  onSearchInputChange(value: string) {
    this.filteredCharacters = this.characters.filter((character) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );
  }
}
