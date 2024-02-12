import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsprintporfolioComponent } from './rsprintporfolio.component';

describe('RsprintporfolioComponent', () => {
  let component: RsprintporfolioComponent;
  let fixture: ComponentFixture<RsprintporfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsprintporfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RsprintporfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
