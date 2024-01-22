import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsprinthomeComponent } from './rsprinthome.component';

describe('RsprinthomeComponent', () => {
  let component: RsprinthomeComponent;
  let fixture: ComponentFixture<RsprinthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsprinthomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RsprinthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
