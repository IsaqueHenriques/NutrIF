import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTelaComponent } from './usuario-tela.component';

describe('UsuarioTelaComponent', () => {
  let component: UsuarioTelaComponent;
  let fixture: ComponentFixture<UsuarioTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
