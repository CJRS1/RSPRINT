import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsprintheaderComponent } from './rsprintheader.component';

describe('RsprintheaderComponent', () => {
  let component: RsprintheaderComponent;
  let fixture: ComponentFixture<RsprintheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsprintheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RsprintheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
