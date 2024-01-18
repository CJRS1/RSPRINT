import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsprintcontactComponent } from './rsprintcontact.component';

describe('RsprintcontactComponent', () => {
  let component: RsprintcontactComponent;
  let fixture: ComponentFixture<RsprintcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsprintcontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RsprintcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
