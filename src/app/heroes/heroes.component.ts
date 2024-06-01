import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}

