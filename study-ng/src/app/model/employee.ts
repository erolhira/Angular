export class Employee {

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }
    
    static newInstance(name: string) {
        return new Employee(name);
    }
    
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}