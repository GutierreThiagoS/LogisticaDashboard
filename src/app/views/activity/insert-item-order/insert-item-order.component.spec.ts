import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertItemOrderComponent } from './insert-item-order.component';

describe('InsertItemOrderComponent', () => {
  let component: InsertItemOrderComponent;
  let fixture: ComponentFixture<InsertItemOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertItemOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertItemOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
