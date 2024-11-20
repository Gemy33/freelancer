import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataForPayingComponent } from './data-for-paying.component';

describe('DataForPayingComponent', () => {
  let component: DataForPayingComponent;
  let fixture: ComponentFixture<DataForPayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataForPayingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataForPayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
