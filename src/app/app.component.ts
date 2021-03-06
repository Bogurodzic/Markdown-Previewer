import { Component, OnInit } from '@angular/core';
import * as marked from 'marked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  markdown = ""

  ngOnInit(){
    console.log(marked('I am using __markdown__.'));
  }

  onContentChange(data: {content: string}){
    this.markdown = marked(data.content);
  }

}
