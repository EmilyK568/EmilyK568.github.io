import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'ng-bullet';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggle side nav', () => {
    const emitSpy = spyOn(component['toggleSideNav'], 'emit').and.returnValue(Promise.resolve());
    component.emitToggleSideNav();
    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  it('should navigate to settings', () => {
    const emitSpy = spyOn(component['router'], 'navigate').and.returnValue(Promise.resolve());
    component.navigateToSettings();
    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith(['/settings']);
  });

  it('should navigate to linked in', () => {
    const emitSpy = spyOn(window, 'open').and.returnValue(Promise.resolve());
    component.navigateToLinkedIn();
    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith("https://www.linkedin.com/in/emilykennedy568", "_blank");
  });

  
});
