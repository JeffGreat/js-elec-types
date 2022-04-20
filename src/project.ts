import { IBaseModel } from './base-model';

export enum ProjectStatusEnum {
    pending = 0,
    complete = 100,
    deleted = 200
}
export interface IFolio extends IBaseModel {
    name: string;
    modelData: { [index: string]: any };
    nodeDataArray: { [index: string]: any }[];
    linkDataArray: { [index: string]: any }[];
}

export interface IProject extends IBaseModel {
    name: string;
    folios: IFolio[];
    users: string[];
    status: ProjectStatusEnum
    groundImages?: string[];
}
