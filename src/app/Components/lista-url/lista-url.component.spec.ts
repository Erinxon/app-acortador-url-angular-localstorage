import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUrlComponent } from './lista-url.component';

describe('ListaUrlComponent', () => {
  let component: ListaUrlComponent;
  let fixture: ComponentFixture<ListaUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
