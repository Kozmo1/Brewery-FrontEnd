import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBeersComponent } from './featured-beers.component';

describe('FeaturedBeersComponent', () => {
  let component: FeaturedBeersComponent;
  let fixture: ComponentFixture<FeaturedBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedBeersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
