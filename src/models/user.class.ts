export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: number;
    zipCode: number;
    city: string;
    email: string;

    constructor(object?: any){ // ? hier bedeutet, dass nicht unbedingt ein Object verwenden werden muss, es ist optional.
        this.firstName = object ? object.firstName : ''; // Wenn ein object existiert, dann soll object.firstName angewendet werden, ansonsten ein leerer string
        this.lastName = object ? object.lastName : '';
        this.birthDate = object ? object.birthDate : '';
        this.street = object ? object.street : '';
        this.zipCode = object ? object.zipCode : '';
        this.city = object ? object.city : '';
        this.email = object ? object.email : '';
    }

    public toJSON(){
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            email: this.email
        };
    }
}