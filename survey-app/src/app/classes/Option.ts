import { IOption } from '../interfaces/IOption';

export class Option implements IOption
{
    id: number;
    name: string;
    votes: number;
}