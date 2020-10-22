import { IBaseModel } from "./base-model";
export interface IPageSeo extends IBaseModel {
    published: boolean;
    metaTitle: string;
    metaDescription: string;
    urlCanonical?: string;
    url: string;
    title: string;
    subtitle?: string;
    heroPicture?: string;
    body: string;
    searchQuery?: string;
}
