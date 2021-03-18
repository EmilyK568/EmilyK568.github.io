import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSideNav = new EventEmitter<boolean>();

  constructor(private readonly router: Router) { }

  emitToggleSideNav() {
    this.toggleSideNav.emit();
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  navigateToLinkedIn() {
    window.open("https://www.linkedin.com/in/emilykennedy568", "_blank");
  }

}
