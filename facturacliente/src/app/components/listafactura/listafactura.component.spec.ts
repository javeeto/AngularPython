import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafacturaComponent } from './listafactura.component';

describe('ListafacturaComponent', () => {
  let component: ListafacturaComponent;
  let fixture: ComponentFixture<ListafacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListafacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListafacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
