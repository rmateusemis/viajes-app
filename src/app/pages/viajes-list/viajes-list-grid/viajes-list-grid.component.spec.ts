import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesListGridComponent } from './viajes-list-grid.component';

describe('ViajesListGridComponent', () => {
  let component: ViajesListGridComponent;
  let fixture: ComponentFixture<ViajesListGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesListGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
