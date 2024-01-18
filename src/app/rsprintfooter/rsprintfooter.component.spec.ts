import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsprintfooterComponent } from './rsprintfooter.component';

describe('RsprintfooterComponent', () => {
  let component: RsprintfooterComponent;
  let fixture: ComponentFixture<RsprintfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsprintfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RsprintfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
