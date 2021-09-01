import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooFormComponent } from './foo-form.component';

describe('FooFormComponent', () => {
  let component: FooFormComponent;
  let fixture: ComponentFixture<FooFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
