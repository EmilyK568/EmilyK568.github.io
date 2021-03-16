import { Component, Input, OnInit } from '@angular/core';
import { Guest } from 'src/app/shared/interfaces/guest.interface';
import * as d3 from 'd3';

@Component({
  selector: 'app-age-range',
  templateUrl: './age-range.component.html',
  styleUrls: ['./age-range.component.scss']
})
export class AgeRangeComponent implements OnInit {
  @Input() guests: Array<Guest> | null = [];

  constructor() { }
  
  ngOnInit() {
    this.createChart();
  }

  private createChart(): void {
    const data = this.guests ? this.guests : [];
    const svg = d3.select('svg');
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
      .text('Name')
      .attr('fill', '#69f0ae')

    svg.append('text')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Age of Guests')
      .attr('fill', '#7b1fa2')
      .attr('font-size', '24px')
  }

}
