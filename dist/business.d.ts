import { IBaseModel } from './base-model';
import { IOffer } from './offer';
export interface IBusinessAddress extends IBaseModel {
    street: string;
    street2?: string;
    district?: string;
    zip: string;
    city: string;
    country: string;
    location?: {
        type: string;
        coordinates: number[];
    };
}
export declare enum BookingSpacesEnum {
    'tables' = 0,
    'spaces' = 1,
    'all' = 10
}
export interface IBookingOptions {
    enabled: boolean;
    fromPax: number;
    minBefore: number;
    capacity: number;
    noShowEnabled: boolean;
    noShowCaution: number;
    spaces: BookingSpacesEnum[];
}
export interface IBusiness extends IBaseModel {
    name: string;
    description: string;
    phone: string;
    email: string;
    openingHours: string;
    accessInfos: string;
    address: IBusinessAddress;
    siren: string;
    bookingOptions: IBookingOptions;
    pictures: string[];
    offers: IOffer[];
    users: string[];
}
