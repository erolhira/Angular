import { Component, OnInit } from '@angular/core';

@Component( {
    selector: 'app-styling',
    templateUrl: './styling.component.html',
    styleUrls: ['./styling.component.css']
} )
export class StylingComponent implements OnInit {
    
    title: string = 'Styling';
    isBlue: boolean = true;
    badCurlyClass: string = 'badCurly';
    isSpecial: boolean = true;
    
    constructor() { }

    ngOnInit() {
    }

    toggleBlue(){
        this.isBlue = !this.isBlue;
    }
}
