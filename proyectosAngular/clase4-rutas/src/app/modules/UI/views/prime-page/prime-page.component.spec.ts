import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimePageComponent } from './prime-page.component';

describe('PrimePageComponent', () => {
  let component: PrimePageComponent;
  let fixture: ComponentFixture<PrimePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
