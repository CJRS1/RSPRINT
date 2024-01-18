import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsprintcarouselComponent } from './rsprintcarousel.component';

describe('RsprintcarouselComponent', () => {
  let component: RsprintcarouselComponent;
  let fixture: ComponentFixture<RsprintcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsprintcarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RsprintcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
