export interface IBaseModel {
    id?: string;
    _id?: string;
    updatedAt?: Date;
    createdAt?: Date;
}
export interface IAddress extends IBaseModel {
    street: string;
    street2?: string;
    zip: string;
    city: string;
    region: string;
    country: string;
    label: string;
}
