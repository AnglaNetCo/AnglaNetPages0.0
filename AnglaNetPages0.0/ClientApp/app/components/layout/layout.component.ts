import { Component } from '@angular/core';

@Component({
    selector: 'layout',
    template: require('./layout.component.html'),
    styles: [require('./layout.component.css')]
})
export class LayoutComponent {
    title: string;
    selected: number;

    constructor() {
        this.title = "AnglaNet";
    }

    select() {
        //this.selected = chosen;
        this.title = "Hello";
        console.log(this.selected)
    }
}