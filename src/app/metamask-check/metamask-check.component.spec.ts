import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamaskCheckComponent } from './metamask-check.component';

describe('MetamaskCheckComponent', () => {
  let component: MetamaskCheckComponent;
  let fixture: ComponentFixture<MetamaskCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetamaskCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetamaskCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
