import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    template: require('./counter.component.html'),
    styles: [require('./counter.component.css')]
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount = this.currentCount+2;
    }
}
