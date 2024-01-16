import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-professional-summary',
  templateUrl: './professional-summary.component.html',
  styleUrls: ['./professional-summary.component.css'],
  template: '<div #flameGraph></div>'
})
export class ProfessionalSummaryComponent implements OnInit {
  @ViewChild('flameGraph', { static: true }) flameGraph!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    const timelineData = [
      { company: 'Caremore', start: new Date('Aug 2021'), end: new Date() },
      { company: 'Waste Management', start: new Date('Aug 2019'), end: new Date('July 2021') },
      { company: 'Splunk', start: new Date('March 2018'), end: new Date('July 2019') },
      { company: 'Standalone IT Solutions', start: new Date('Aug 2017'), end: new Date('Feb 2018') }
    ];

    const margin = { top: 20, right: 20, bottom: 30, left: 130 };
    const width = 800 - margin.left - margin.right;
    const height = 120 - margin.top - margin.bottom;

    const svg = d3.select(this.flameGraph.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Define scales
    const xScale = d3.scaleTime()
      .domain([d3.min(timelineData, d => d.start)!, d3.max(timelineData, d => d.end)!])
      .range([0, width]);

    const yScale = d3.scaleBand()
      .domain(timelineData.map(d => d.company))
      .range([height, 0])
      .padding(0.1);

    // Draw x-axis
    svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale));

    // Draw y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale));

    // Draw rectangles with tooltips
    const bars = svg.selectAll('rect')
      .data(timelineData)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.start)!)
      .attr('y', d => yScale(d.company)!)
      .attr('width', d => xScale(d.end)! - xScale(d.start)!)
      .attr('height', yScale.bandwidth())
      .attr('fill', (d, i) => d3.schemeCategory10[i % 10])
      .on('mouseover', (event, d) => {
        // Show tooltip on mouseover
        svg.append('text')
          .attr('x', xScale(d.start)! + (xScale(d.end)! - xScale(d.start)!) / 2)
          .attr('y', yScale(d.company)!)
          .attr('dy', '-0.5em')
          .attr('text-anchor', 'middle')
          .text(d.company)
          .classed('tooltip', true); // Add class for easy removal
      })
      .on('mouseout', () => {
        // Hide tooltip on mouseout
        svg.selectAll('text.tooltip').remove();
      });

    // Draw text labels
    svg.selectAll('text')
      .data(timelineData)
      .enter()
      .append('text')
      .attr('x', d => xScale(d.start)!)
      .attr('y', d => yScale(d.company)!)
      .attr('dy', '1.2em')
      .attr('dx', '0.5em')
      .text(d => d.company);
  }
}
