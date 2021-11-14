import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdhAdditionComponent } from './jdh-addition.component';

describe('JdhAdditionComponent', () => {
  let component: JdhAdditionComponent;
  let fixture: ComponentFixture<JdhAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdhAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JdhAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
