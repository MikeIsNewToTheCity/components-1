import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrissSlackNTellComponent } from './briss-slack-n-tell.component';

describe('BrissSlackNTellComponent', () => {
  let component: BrissSlackNTellComponent;
  let fixture: ComponentFixture<BrissSlackNTellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrissSlackNTellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrissSlackNTellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
