import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCatalogComponent } from './dashboard-catalog.component';

describe('DashboardCatalogComponent', () => {
  let component: DashboardCatalogComponent;
  let fixture: ComponentFixture<DashboardCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
