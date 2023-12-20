import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnalyseComponent } from './create-analyse.component';

describe('CreateAnalyseComponent', () => {
  let component: CreateAnalyseComponent;
  let fixture: ComponentFixture<CreateAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
