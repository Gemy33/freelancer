import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCostComponent } from './shoping-cost.component';

describe('ShopingCostComponent', () => {
  let component: ShopingCostComponent;
  let fixture: ComponentFixture<ShopingCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopingCostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopingCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
