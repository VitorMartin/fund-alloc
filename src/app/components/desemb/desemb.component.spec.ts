import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesembComponent } from './desemb.component';

describe('DesembComponent', () => {
  let component: DesembComponent;
  let fixture: ComponentFixture<DesembComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesembComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesembComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
