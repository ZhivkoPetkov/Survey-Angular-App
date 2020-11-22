import { ISurvey } from './ISurvey';

export interface ICategory
{
    id: number,
    name : string,
    description : string,
    surveys : ISurvey[]
}
