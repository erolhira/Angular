import { Component } from '@angular/core';
import { LoggerService } from './service/logger.service';

/**
 * AppComponent is the root component of what will become a tree of nested components as the application evolves.
 * 
 * You define a component's view with its companion template. 
 * A template is a form of HTML that tells Angular how to render the component.
 * 
 * A directive is a class with a @Directive decorator.
 * A component is a directive-with-a-template;
 * a @Component decorator is actually a @Directive decorator extended with template-oriented features.
 * 
 * Component classes should be lean. They don't fetch data from the server, validate user input, or log directly to the console.
 * They delegate such tasks to services.
 * A good component presents properties and methods for data binding. It delegates everything nontrivial to services.
 * 
 * 
 * 
 */ 
@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent {    
    
    name: string = 'Angular';
    
    constructor(private logger: LoggerService){        
    }
    
    
}
