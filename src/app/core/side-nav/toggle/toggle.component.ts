import {
  AfterContentChecked,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements AfterContentChecked {
  ngAfterContentChecked(): void {
    if (this.ToggleObj) {
      this.transformed = this.ToggleObj[Object.keys(this.ToggleObj)[0]];
    }
  }

  @Input()
  linkName = '';
  @Input()
  isOpen = false;
  @Input()
  parentOpen = false;
  @Input()
  ToggleObj: any = null;

  transformed: any | null = null;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
