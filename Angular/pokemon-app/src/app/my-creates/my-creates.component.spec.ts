import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCreatesComponent } from './my-creates.component';

describe('MyCreatesComponent', () => {
  let component: MyCreatesComponent;
  let fixture: ComponentFixture<MyCreatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCreatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCreatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
