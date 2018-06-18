import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { LoggerService } from './service/logger.service';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LoopsConditionalsComponent } from './loops-conditionals/loops-conditionals.component';
import { BasicsComponent } from './basics/basics.component';
import { StylingComponent } from './styling/styling.component';

/*
Every Angular app has at least one NgModule class, the root module, conventionally named AppModule.
An NgModule, whether a root or feature, is a class with an @NgModule decorator.
Decorators are functions that modify JavaScript classes.

AppModule is the root module that tells Angular how to assemble the application.
Every application has at least one Angular module, the root module that you bootstrap to launch the application.

The import statements at the top of the file and the Angular module's imports array are unrelated and have completely different jobs.
The JavaScript import statements give you access to symbols exported by other files so you can reference them within this file.
You add import statements to almost every application file. They have nothing to do with Angular and Angular knows nothing about them.

bootstrap array:
You launch the application by bootstrapping the root AppModule.
Among other things, the bootstrapping process creates the component(s) listed in the bootstrap array
and inserts each one into the browser DOM.
Each bootstrapped component is the base of its own tree of components.
Inserting a bootstrapped component usually triggers a cascade of component creations that fill out that tree.
Most applications have only one component tree and they bootstrap a single root component.

if a class is declared with export; then it could be imported inside any other js file.

Each Angular library name begins with the @angular prefix.
You install them with the npm package manager and import parts of them with JavaScript import statements.
*/

@NgModule( {
    declarations: [
        //the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
        //declerations alanina sadece bu module ait componentleri yazabilirsin. iki module ait bir component olamaz, hata verir.
        AppComponent,
        DataBindingComponent,
        LoopsConditionalsComponent,
        BasicsComponent,
        StylingComponent
    ],
    imports: [
        //other modules whose exported classes are needed by component templates declared in this module.
        //only NgModule classes go in the imports array. Do not put any other kind of class in imports.
        BrowserModule, // every application needs this module to run in a browser        
        FormsModule,    // needed to be imported into NgModule to use the ngModel directive in a two-way data binding
        HttpModule,
        AppRoutingModule
    ],
    exports: [
        //the subset of declarations that should be visible and usable in the component templates of other modules.
        //A root module has no reason to export anything because other components don't need to import the root module.
    ],
    providers: [
        //service classes; when added here; they become accessible in all parts of the app by injection.  
        LoggerService
    ],
    bootstrap: [
        //the main application view, called the root component, that hosts all other app views. 
        //only the root module should set this bootstrap property.
        AppComponent
    ]
} )
export class AppModule { }
