import { Component, Input, OnInit } from '@angular/core';
import { Guest } from 'src/app/shared/interfaces/guest.interface';

@Component({
  selector: 'app-age-range',
  templateUrl: './age-range.component.html',
  styleUrls: ['./age-range.component.scss']
})
export class AgeRangeComponent implements OnInit {
  @Input() guests: Array<Guest> | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
