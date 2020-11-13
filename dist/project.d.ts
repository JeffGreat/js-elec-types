import { IBaseModel } from './base-model';
export interface IFolio extends IBaseModel {
    name: string;
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
    users: string[];
    groundImages?: string[];
}
