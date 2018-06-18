import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LoggerService} from '../service/logger.service';

/**
 * Data binding plays an important role in communication between a template and its component.
 * Data binding is also important for communication between parent and child components.
 */

@Component( {
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.css']
} )
export class DataBindingComponent implements OnInit {

    title: string = 'Data Binding';
    count: number = 0;
    name: string = '';
    surname: string = '';
    imgUrl: string = 'https://angular.io/assets/images/logos/angular/shield-large.svg';

    constructor(private logger: LoggerService) { }

    ngOnInit() {
    }
    
    handleClick(): void {
        this.logger.log('clicked..');
        alert('clicked');
    }

    setUppercaseName(event): void {
      this.name = this.name.toUpperCase();
    }

}
