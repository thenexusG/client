import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesFormComponent } from './clothes-form.component';

describe('ClothesFormComponent', () => {
  let component: ClothesFormComponent;
  let fixture: ComponentFixture<ClothesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
