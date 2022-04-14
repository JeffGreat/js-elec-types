import { IAddress, IBaseModel } from "./base-model";

export enum UserRolesEnum {
    superAdmin = 0,
    admin = 1,
    user = 2,
}

export enum OfferEnum {
    freemium,
    standard,
    premium
}

export enum SubscriptionPeriodEnum {
    month,
    yearl
}

export interface ISubscription {
    startDate: SubscriptionPeriodEnum
    period: SubscriptionPeriodEnum
    duration: number
    offer: OfferEnum
}

export interface ICompany {
    name: string;
    address: IAddress
}

export interface IUser extends IBaseModel {
    id?: string;
    email: string;
    subscription?: ISubscription
    company?: ICompany;
    firstName?: string;
    lastName?: string;
    tel?: string;
    role: UserRolesEnum;
    password: string;
    cgv: Date;
    stripeCustomer: string;
    stripeSession: string;
    lastLogins: Date[];
    projectCount: number;
}
