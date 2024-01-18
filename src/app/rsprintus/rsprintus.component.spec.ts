import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsprintusComponent } from './rsprintus.component';

describe('RsprintusComponent', () => {
  let component: RsprintusComponent;
  let fixture: ComponentFixture<RsprintusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsprintusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RsprintusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
