import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-fixed',
  standalone: true,
  imports: [],
  templateUrl: './bg-fixed.component.html',
  styleUrl: './bg-fixed.component.scss'
})
export class BgFixedComponent {
  @Input() page_tital?:string;
  @Input() path?:string;

}
