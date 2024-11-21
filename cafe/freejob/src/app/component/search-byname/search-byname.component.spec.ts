import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBynameComponent } from './search-byname.component';

describe('SearchBynameComponent', () => {
  let component: SearchBynameComponent;
  let fixture: ComponentFixture<SearchBynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBynameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchBynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
