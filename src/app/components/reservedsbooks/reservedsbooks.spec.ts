import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservedsbooks } from './reservedsbooks';

describe('Reservedsbooks', () => {
  let component: Reservedsbooks;
  let fixture: ComponentFixture<Reservedsbooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reservedsbooks],
    }).compileComponents();

    fixture = TestBed.createComponent(Reservedsbooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
