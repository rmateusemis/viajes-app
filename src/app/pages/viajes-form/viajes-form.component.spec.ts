import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesFormComponent } from './viajes-form.component';

describe('ViajesFormComponent', () => {
  let component: ViajesFormComponent;
  let fixture: ComponentFixture<ViajesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
