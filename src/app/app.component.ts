import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './shared/interfaces/nav-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmilyK568';
  navItems: Array<NavItem> = [
    {
      key: 'Home',
      value: '/home'
    },
    {
      key: 'Guest List',
      value: '/guest-list'
    },
    {
      key: 'Add a Guest',
      value: '/add-guest'
    },
    {
      key: 'Reception Meal',
      value: '',
      comingSoon: true
    }
  ]

  constructor(private readonly router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
