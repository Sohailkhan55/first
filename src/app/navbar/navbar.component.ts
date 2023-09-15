import { Component,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
   title="List of Posts";
   mesagePost="Message Post";
   @Input() item=" ";
  message="Parent to child";
   childMessage="From Child Component";
   outputChildMessage="Message from child via output";
   @Output() messageEvent = new EventEmitter<string>();
   sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
   }
}
