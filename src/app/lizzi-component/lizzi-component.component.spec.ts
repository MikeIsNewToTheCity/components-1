import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LizziComponentComponent } from './lizzi-component.component';

describe('LizziComponentComponent', () => {
  let component: LizziComponentComponent;
  let fixture: ComponentFixture<LizziComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LizziComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LizziComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
