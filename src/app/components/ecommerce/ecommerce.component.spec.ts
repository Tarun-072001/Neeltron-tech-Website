import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceComponent } from './ecommerce.component';

describe('EcommerceComponent', () => {
  let component: EcommerceComponent;
  let fixture: ComponentFixture<EcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
