import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppeloComponent } from './appelo.component';

describe('AppeloComponent', () => {
  let component: AppeloComponent;
  let fixture: ComponentFixture<AppeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
