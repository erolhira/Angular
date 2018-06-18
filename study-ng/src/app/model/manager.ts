/*
It might not look like the class has properties, but it does. 
The declaration of the constructor parameters takes advantage of a TypeScript shortcut.
*/
export class Manager {
    
    constructor(
        public id: number,
        public name: string) { }
    
}