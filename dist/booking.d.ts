import { IBaseModel } from './base-model';
import { IOffer } from './offer';
export declare enum BookingOccasionEnum {
    'plaisir' = 0,
    'anniv' = 1,
    'potdepart' = 2,
    'entreprise' = 3,
    'autre' = 4
}
export interface IBooking extends IBaseModel {
    date: Date;
    pax: number;
    occasion: BookingOccasionEnum;
    bookTable: boolean;
    offer: IOffer;
    business: string;
}
