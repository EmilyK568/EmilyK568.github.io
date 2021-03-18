import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Guest } from 'src/app/shared/interfaces/guest.interface';
import * as d3 from 'd3';

@Component({
  selector: 'app-age-range',
  templateUrl: './age-range.component.html',
  styleUrls: ['./age-range.component.scss']
})
export class AgeRangeComponent implements OnChanges {
  @Input() guests: Array<Guest> | null = [];
  @ViewChild('chart', { static: true })
  chartContainer!: ElementRef;

  constructor() { }

  ngOnChanges() {
    this.createChart();
  }

  private createChart(): void {
    d3.select('svg').remove();

    const data = this.guests ? this.guests : [];

    const element = this.chartContainer.nativeElement;
    d3.select(element).append('svg');

    const svg = d3.select('svg')
    .attr('width', element.offsetWidth)
    .attr('height', element.offsetHeight);
    const margin = 80;
    const width = 1200 - 2 * margin;
    const height = 500 - 2 * margin;

    const chart = svg.append('g')
      .attr('transform', `translate(${margin}, ${margin})`);

    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, 100]);

    chart.append('g')
      .call(d3.axisLeft(yScale));

    const xScale = d3.scaleBand()
      .range([0, width])
      .domain(data.map((s) => s.name))
      .padding(0.2)
  
    chart.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    chart.selectAll()
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (s) => xScale(s.name) || 0)
      .attr('y', (s) => yScale(s.age))
      .attr('height', (s) => height - yScale(s.age))
      .attr('width', xScale.bandwidth())

    svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', margin / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Age (in years)')
      .attr('fill', '#69f0ae')

    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Name of Guest')
      .attr('fill', '#69f0ae')

    svg.append('text')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Age of Guests')
      .attr('fill', 'white')
      .attr('font-size', '24px')
  }

}
