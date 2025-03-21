import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroSectionComponent } from '../../hero-section/hero-section.component';
import { FeaturedBeersComponent } from '../../featured-beers/featured-beers.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    FeaturedBeersComponent
  ]
})
export class HomepageComponent { }
