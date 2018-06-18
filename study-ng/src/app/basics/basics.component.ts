import { Component, OnInit, Input } from '@angular/core';

@Component( {
    selector: 'app-basics',
    templateUrl: './basics.component.html',
    styleUrls: ['./basics.component.css']
} )
export class BasicsComponent implements OnInit {

    @Input() staticText: string;
    @Input() dynamicText: string;
    text: string;
    
    constructor() { }

    ngOnInit() {
        this.text = this.staticText + ' ' + this.dynamicText;
    }

}
