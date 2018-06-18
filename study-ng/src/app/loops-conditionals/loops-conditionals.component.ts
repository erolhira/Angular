import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../model/employee';
import { ActivatedRoute } from '@angular/router';

@Component( {
    selector: 'app-loops-conditionals',
    templateUrl: './loops-conditionals.component.html',
    styleUrls: ['./loops-conditionals.component.css']
} )
export class LoopsConditionalsComponent implements OnInit {

    title: string = 'Loops & Conditionals'
    employeeList: Employee[] = [Employee.newInstance('Kahn Lahn'), Employee.newInstance('John Dohn'), Employee.newInstance('Shan Yann')];
    
    paramsSub: any;
    loopsSelected: boolean = false;
    conditionalsSelected: boolean = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {        
        this.paramsSub = this.route.params.subscribe( params => {
            let choice = params['choice'];
            this.loopsSelected = choice == 'loops';
            this.conditionalsSelected = choice == 'conditionals';
        } );
    }
    
    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
}
