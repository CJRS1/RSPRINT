import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsprintmainComponent } from './rsprintmain.component';

describe('RsprintmainComponent', () => {
  let component: RsprintmainComponent;
  let fixture: ComponentFixture<RsprintmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsprintmainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RsprintmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
