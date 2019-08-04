
import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.css']
})
export class FormatterComponent implements OnInit {

  inputTextField = '';
  outputTextField = '';

  constructor() {}

  ngOnInit() {
  }

  formatAction() {


    this.outputTextField = this.cleanUpJSON(this.inputTextField);
  }

  cleanUpJSON(inputTextField: string): string {
    // TODO: Clean up JSON and set output form field

    // Example input: {type: normal, chatId: asdf, docId: null, senderName: Stephen Tan, senderPhotoUrl: https://lh6.googleusercontent.com/-b0rPtp0hFXg/AAAAAAAAAAI/AAAAAAAAAE4/29rLUJXK8sE/s96-c/photo.jpg, text: k, timestampModified: null, senderId: asdf, isGroupChat: true, actionGroupId: null, actionGroupName: null, actionTitle: null, imageId: null, imageUrl: null}

    // Example output: {'type': 'normal', 'chatId': 'asdf', 'docId': 'null', 'senderName': 'Stephen Tan', 'senderPhotoUrl': 'https://lh6.googleusercontent.com/-b0rPtp0hFXg/AAAAAAAAAAI/AAAAAAAAAE4/29rLUJXK8sE/s96-c/photo.jpg', 'text': 'k', 'timestampModified': 'null', 'senderId': 'asdf', 'isGroupChat': 'true', 'actionGroupId': 'null', 'actionGroupName': 'null', 'actionTitle': 'null', 'imageId': 'null', 'imageUrl': 'null'}

    // throw new Error('Method not implemented.');

    // Return cleaned string
    return inputTextField;
  }
}
