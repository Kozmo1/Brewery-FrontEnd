import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeaturedBeersComponent } from './featured-beers/featured-beers.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroSectionComponent, FeaturedBeersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Brewery-UI';
}
