import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl-cool-lib',
  template: `
    <p>
      cool-lib works!
    </p>
  `,
  styles: [
  ]
})
export class CoolLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
