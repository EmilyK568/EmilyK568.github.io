import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Guest } from 'src/app/shared/interfaces/guest.interface';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {
  @Input() guests: Array<Guest> | null = [];
  sortedData: Array<Guest> = [];

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.sortedData = this.guests ? this.guests : [];
  }

  removeGuest(index: number) {
    this.sortedData.splice(index, 1);
    // add dispatch to store
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.guests = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'age': return this.compare(a.age, b.age, isAsc);
        case 'weight': return this.compare(a.weight, b.weight, isAsc);
        default: return 0;
      }
    });
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
