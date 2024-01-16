// src/app/resume/resume.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  // Add your resume and skills data here
  resume: string = `
    Your resume details go here.
    Include your education, work experience, projects, etc.
  `;

  skills: string[] = [
    'Angular',
    'JavaScript/TypeScript',
    'HTML/CSS',
    'RESTful APIs',
    // Add more skills as needed
  ];
}

