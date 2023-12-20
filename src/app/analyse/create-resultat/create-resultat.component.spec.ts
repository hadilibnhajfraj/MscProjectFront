import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResultatComponent } from './create-resultat.component';

describe('CreateResultatComponent', () => {
  let component: CreateResultatComponent;
  let fixture: ComponentFixture<CreateResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResultatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
