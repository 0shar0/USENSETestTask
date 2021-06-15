import {Component} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {

  text: string = ''
  textSub: Subscription

  constructor() {
    this.textSub = interval(3000).subscribe(() => this.text = this.generator())
  }

  generator() {
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyz0123456789";
    let random = abc[Math.floor(Math.random() * abc.length)];
    let newAbc = "";
    while (newAbc.length < 5) {
      newAbc += random
      random = abc[Math.floor(Math.random() * abc.length)];
    }
    return newAbc
  }

  isNan() {
    return isNaN(Number(this.text))
  }

  isZero() {
    return this.text.split('').some(element => Number(element) === 0)
  }

  isPalindrome() {
    return this.text == this.text.toLowerCase().split('').reverse().join('')
  }
}
