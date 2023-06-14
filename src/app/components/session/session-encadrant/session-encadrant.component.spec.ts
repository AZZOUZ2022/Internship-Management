import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEncadrantComponent } from './session-encadrant.component';

describe('SessionEncadrantComponent', () => {
  let component: SessionEncadrantComponent;
  let fixture: ComponentFixture<SessionEncadrantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionEncadrantComponent]
    });
    fixture = TestBed.createComponent(SessionEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
