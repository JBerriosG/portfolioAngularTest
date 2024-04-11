import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevButtonComponent } from './prev-button.component';

describe('PrevButtonComponent', () => {
  let component: PrevButtonComponent;
  let fixture: ComponentFixture<PrevButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrevButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
