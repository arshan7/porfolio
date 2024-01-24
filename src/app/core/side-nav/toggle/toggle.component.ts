import {
  AfterContentChecked,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements AfterContentChecked, OnInit {
  currentFragment: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.currentPath = this.route.snapshot.routeConfig?.path;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Extract the current fragment
        this.currentFragment = this.route.snapshot.fragment;
      });
  }

  ngAfterContentChecked(): void {
    if (this.ToggleObj) {
      this.transformed = this.ToggleObj[Object.keys(this.ToggleObj)[0]];
    }
  }

  @Input()
  linkName = '';
  @Input()
  isOpen = true;
  @Input()
  parentOpen = true;
  @Input()
  ToggleObj: any = null;

  transformed: any | null = null;
  currentPath: string | undefined = undefined;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
