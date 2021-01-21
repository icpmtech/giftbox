import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello GiftBox {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
