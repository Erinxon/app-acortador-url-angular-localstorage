import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarUrlComponent } from './generar-url.component';

describe('GenerarUrlComponent', () => {
  let component: GenerarUrlComponent;
  let fixture: ComponentFixture<GenerarUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
