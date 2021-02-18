import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<boolean>();

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  emitToggleSideNav() {
    this.toggleSideNav.emit();
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

}
