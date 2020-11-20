import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangry',
  templateUrl: './hangry.component.html',
  styleUrls: ['./hangry.component.scss']
})
export class HangryComponent implements OnInit {
  location: string;
  money: boolean;
  pick: boolean;
  type: string;
  expire: string;
  want: string;

  decision: string;

  constructor() { }

  ngOnInit(): void {
  }

  click(key: string, value: any) {
    switch (key) {
      case 'location':
        this.location = value;
        break;
      case 'money':
        this.money = value;
        break;
      case 'expire':
        this.expire = value;
        break;
      case 'pick':
        this.pick = value;
        break;
      case 'type':
        this.type = value;
        break;
    }
  }

}
