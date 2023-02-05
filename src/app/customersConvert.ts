import { customers } from "./customers";

interface ICustomer{
    Id: string;
    CompanyName: string;
    ContactName: string;
    ContactTitle: string;
    Address: string;
    City: string;
    PostalCode: string;
    Country: string;
    Phone: string;
    Fax: string;
    DOB?: Date;
}

//export const customerObjs = customers
//    .map(element => Object.assign(new Customer(), element));

export const customerObjs = customers.map(
    x=>({
        Id: x.Id,
        CompanyName: x.CompanyName,
        ContactName: x.ContactName,
        ContactTitle: x.ContactTitle,
        Address: x.Address,
        City: x.City,
        PostalCode: x.PostalCode,
        Country: x.Country,
        Phone: x.Phone,
        Fax: x.Fax,
        DOB: x.DOB ? new Date(x.DOB) : undefined
    })
)