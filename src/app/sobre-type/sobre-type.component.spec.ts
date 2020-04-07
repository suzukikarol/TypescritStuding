import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreTypeComponent } from './sobre-type.component';

describe('SobreTypeComponent', () => {
  let component: SobreTypeComponent;
  let fixture: ComponentFixture<SobreTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
