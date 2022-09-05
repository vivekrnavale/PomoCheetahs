import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-text',
  templateUrl: './paragraph-text.component.html',
  styleUrls: ['./paragraph-text.component.css']
})
export class ParagraphTextComponent implements OnInit {

  @Input() content = "";

  constructor() { }

  ngOnInit(): void {
  }

}
