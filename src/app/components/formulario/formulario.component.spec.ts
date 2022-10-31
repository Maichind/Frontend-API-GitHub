import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioComponent } from './formulario.component';
import { asyncData, asyncError} from '../../../testing'

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('usuario invalido', () => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.inputValue.length<5;
    expect(component.inputValue).withContext('usuario con pocos caracteres').toBeTruthy();

    component.inputValue === 'doublevpartners';
    expect(component.inputValue).withContext('usuario no permitido').toBeTruthy();
  });
});