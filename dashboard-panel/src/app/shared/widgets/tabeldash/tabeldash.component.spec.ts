import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabeldashComponent } from './tabeldash.component';

describe('TabeldashComponent', () => {
  let component: TabeldashComponent;
  let fixture: ComponentFixture<TabeldashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabeldashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabeldashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
