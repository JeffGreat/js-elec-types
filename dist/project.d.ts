import { IBaseModel } from './base-model';
export interface IFolio extends IBaseModel {
    modelData: {
        [index: string]: any;
    };
    nodeDataArray: {
        [index: string]: any;
    }[];
    linkDataArray: {
        [index: string]: any;
    }[];
}
export interface IProject extends IBaseModel {
    name: string;
    folios: IFolio[];
    groundImages: string[];
    users: string[];
}
