import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesembListComponent } from './desemb-list.component';

describe('DesembListComponent', () => {
  let component: DesembListComponent;
  let fixture: ComponentFixture<DesembListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesembListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesembListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
