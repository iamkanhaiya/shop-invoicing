import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { kanhaiyaComponent } from './view.component';

describe('kanhaiyaComponent', () => {
  let component: kanhaiyaComponent;
  let fixture: ComponentFixture<kanhaiyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ kanhaiyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(kanhaiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
