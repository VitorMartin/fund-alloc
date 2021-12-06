import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaksPageComponent } from './breaks-page.component';

describe('BreaksPageComponent', () => {
  let component: BreaksPageComponent;
  let fixture: ComponentFixture<BreaksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreaksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreaksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
