import { ISurvey } from './ISurvey';

export interface ICategory
{
    name : string,
    description : string,
    surveys : ISurvey[]
}
