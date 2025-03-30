import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { FeaturedBeersComponent } from '../../featured-beers/featured-beers.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [
    HeroSectionComponent,
    FeaturedBeersComponent
  ]
})
export class HomepageComponent { }
