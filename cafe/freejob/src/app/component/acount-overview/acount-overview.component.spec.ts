import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountOverviewComponent } from './acount-overview.component';

describe('AcountOverviewComponent', () => {
  let component: AcountOverviewComponent;
  let fixture: ComponentFixture<AcountOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcountOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcountOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
