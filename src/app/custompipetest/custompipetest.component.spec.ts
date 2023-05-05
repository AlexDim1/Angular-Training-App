import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeTestComponent } from './custompipetest.component';

describe('CustompipetestComponent', () => {
  let component: CustomPipeTestComponent;
  let fixture: ComponentFixture<CustomPipeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPipeTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
