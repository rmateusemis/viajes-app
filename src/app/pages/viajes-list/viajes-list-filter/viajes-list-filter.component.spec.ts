import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesListFilterComponent } from './viajes-list-filter.component';

describe('ViajesListFilterComponent', () => {
  let component: ViajesListFilterComponent;
  let fixture: ComponentFixture<ViajesListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
