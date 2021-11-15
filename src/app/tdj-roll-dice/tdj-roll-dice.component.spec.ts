import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdjRollDiceComponent } from './tdj-roll-dice.component';

describe('TdjRollDiceComponent', () => {
  let component: TdjRollDiceComponent;
  let fixture: ComponentFixture<TdjRollDiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdjRollDiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdjRollDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
