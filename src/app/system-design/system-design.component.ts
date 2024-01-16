import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-design',
  templateUrl: './system-design.component.html',
  styleUrls: ['./system-design.component.css']
})
export class SystemDesignComponent {

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
 

  iscodeDesignOpen: boolean = false;
  iseleaningDesignOpen: boolean = false;

  togglecodeDesign() {
    this.iscodeDesignOpen = !this.iscodeDesignOpen;
  }
  toggleeleaningDesign() {
    this.iseleaningDesignOpen = !this.iseleaningDesignOpen;
  }

  isJobOverviewActive = true;
  isJobReportActive = false;
  isJobsActive = false;
  isAgedIncidents = false;
  isUnclosedChangeTickets = false;
  setActiveContent(activeContent: string): void {
    this.isJobOverviewActive = activeContent === "jobOverview";
    this.isJobReportActive = activeContent === "jobReport";
    this.isJobsActive = activeContent === "jobs";
    this.isAgedIncidents = activeContent === "AgedIncidents";
    this.isUnclosedChangeTickets = activeContent === "UnclosedChangeTickets";
  
    const jobOverviewContent = document.getElementById("jobOverviewContent");
    const jobReportContent = document.getElementById("jobReportContent");
    const jobsactiveContent = document.getElementById("jobsactiveContent");
    const AgedIncidentsContent = document.getElementById("AgedIncidentsContent");
    const UnclosedChangeTicketsContent = document.getElementById("UnclosedChangeTicketsContent");
  
    if (
      jobOverviewContent &&
      jobReportContent &&
      jobsactiveContent &&
      AgedIncidentsContent &&
      UnclosedChangeTicketsContent
    ) {
      jobOverviewContent.style.display = activeContent === "jobOverview" ? "block" : "none";
      jobReportContent.style.display = activeContent === "jobReport" ? "block" : "none";
      jobsactiveContent.style.display = activeContent === "jobs" ? "block" : "none";
      AgedIncidentsContent.style.display = activeContent === "AgedIncidents" ? "block" : "none";
      UnclosedChangeTicketsContent.style.display = activeContent === "UnclosedChangeTickets" ? "block" : "none";
    }
  }
  


}
