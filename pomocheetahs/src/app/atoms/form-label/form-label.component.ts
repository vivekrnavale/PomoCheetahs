import { Component, Input } from '@angular/core';

@Component({
  selector: 'sc-atom-form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.css']
})
export class FormLabelComponent {
  @Input() label: any;
}
