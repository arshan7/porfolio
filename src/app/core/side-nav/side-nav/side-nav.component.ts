import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { parse, stringify } from 'yaml';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  parsedYaml: any;

  @Input()
  yamlPath: string = '';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchYaml();
  }

  fetchYaml() {
    this.http
      .get(this.yamlPath, {
        responseType: 'text',
      }) // Adjust file path if needed
      .pipe(map((yamlString) => parse(yamlString)))
      .subscribe((data) => {
        this.parsedYaml = data;
      });
  }
}
