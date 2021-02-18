import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenericKeyValue } from './shared/interfaces/generic-key-value.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmilyK568';
  navItems: Array<GenericKeyValue> = [
    {
      key: 'Home',
      value: '/home'
    },
    {
      key: 'Example',
      value: '/example'
    }
  ]

  constructor(private readonly router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
