import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiComponent } from './thai.component';

describe('ThaiComponent', () => {
  let component: ThaiComponent;
  let fixture: ComponentFixture<ThaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
