import { IBaseModel } from "./base-model";

export enum UserRolesEnum {
    superAdmin = 0,
    admin = 1,
    user = 2,
}

export interface IUser extends IBaseModel {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: UserRolesEnum;
    cgv: Date;
    stripeCustomer: string;
    stripeSession: string;
}
