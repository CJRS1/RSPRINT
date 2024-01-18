import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsprintlocationComponent } from './rsprintlocation.component';

describe('RsprintlocationComponent', () => {
  let component: RsprintlocationComponent;
  let fixture: ComponentFixture<RsprintlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsprintlocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RsprintlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
