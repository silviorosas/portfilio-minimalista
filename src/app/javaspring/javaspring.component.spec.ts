import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaspringComponent } from './javaspring.component';

describe('JavaspringComponent', () => {
  let component: JavaspringComponent;
  let fixture: ComponentFixture<JavaspringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaspringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaspringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
