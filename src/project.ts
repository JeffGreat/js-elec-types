import { IBaseModel } from './base-model';

export interface IFolio extends IBaseModel {
    modelData: {
        units: string;
        unitsAbbreviation: string;
        unitsConversionFactor: number;
        gridSize: number;
        wallThickness: number;
        preferences: {
            showWallGuidelines: boolean;
            showWallLengths: boolean;
            showWallAngles: boolean;
            showOnlySmallWallAngles: boolean;
            showGrid: boolean;
            gridSnap: boolean;
        };
    };
    nodeDataArray: any[];
    linkDataArray: any[];
}

export interface IProject extends IBaseModel {
    name: string;
    folios: IFolio[];
    users: string[];
}
