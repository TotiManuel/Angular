import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoMailComponent } from './contacto-mail.component';

describe('ContactoMailComponent', () => {
  let component: ContactoMailComponent;
  let fixture: ComponentFixture<ContactoMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoMailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactoMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
