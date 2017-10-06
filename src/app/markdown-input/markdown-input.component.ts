import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-markdown-input',
  templateUrl: './markdown-input.component.html',
  styleUrls: ['./markdown-input.component.css']
})
export class MarkdownInputComponent implements OnInit {
  @Output() contentChange = new EventEmitter<{content: string}>();

  inputContent: String = "";

  constructor() { }

  ngOnInit() {
  }

  inputChange(e){
    this.contentChange.emit({
      content: e
    })
  }

}
