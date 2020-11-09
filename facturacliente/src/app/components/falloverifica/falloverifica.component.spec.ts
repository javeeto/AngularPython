import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalloverificaComponent } from './falloverifica.component';

describe('FalloverificaComponent', () => {
  let component: FalloverificaComponent;
  let fixture: ComponentFixture<FalloverificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalloverificaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalloverificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
