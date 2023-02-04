import { customers } from "./customers";

export class Customer{
    public Id: string = "";
    public CompanyName: string = "";
    public ContactName: string = "";
    public ContactTitle: string = "";
    public Address: string = "";
    public City: string = "";
    public PostalCode: string = "";
    public Country: string = "";
    public Phone: string = "";
    public Fax: string = "";
    public DOB?: Date
}

export const customerObjs = customers.map(element => Object.assign(new Customer(), element));