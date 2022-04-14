import { IAddress, IBaseModel } from "./base-model";
export declare enum UserRolesEnum {
    superAdmin = 0,
    admin = 1,
    user = 2
}
export declare enum OfferEnum {
    freemium = 0,
    standard = 1,
    premium = 2
}
export declare enum SubscriptionPeriodEnum {
    month = 0,
    yearl = 1
}
export interface ISubscription {
    startDate: SubscriptionPeriodEnum;
    period: SubscriptionPeriodEnum;
    duration: number;
    offer: OfferEnum;
}
export interface ICompany {
    name: string;
    address: IAddress;
}
export interface IUser extends IBaseModel {
    id?: string;
    email: string;
    subscription?: ISubscription;
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
