export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: number;
    zipCode: number;
    city: string;

    constructor(object?: any){ // ? hier bedeutet, dass nicht unbedingt ein Object verwenden werden muss, es ist optional.
        this.firstName = object ? object.firstName : ''; // Wenn ein object existiert, dann soll object.firstName angewendet werden, ansonsten ein leerer string
        this.lastName = object ? object.lastName : '';
        this.birthDate = object ? object.birthDate : '';
        this.street = object ? object.street : '';
        this.zipCode = object ? object.zipCode : '';
        this.city = object ? object.city : '';
    }
}