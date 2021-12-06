import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesembsPageComponent } from './desembs-page.component';

describe('DesembsPageComponent', () => {
  let component: DesembsPageComponent;
  let fixture: ComponentFixture<DesembsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesembsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesembsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
