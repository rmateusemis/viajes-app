import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesListComponent } from './viajes-list.component';

describe('ViajesListComponent', () => {
  let component: ViajesListComponent;
  let fixture: ComponentFixture<ViajesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
