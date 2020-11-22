import { OptionUpdateModel } from './OptionUpdateModel';

export interface SurveyUpdateModel
{
    id: number
    name: string
    categoryId : number
    options: OptionUpdateModel[]
}