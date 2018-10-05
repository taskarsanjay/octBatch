import {Injectable} from '@angular/core';
@Injectable()

export class StudentService{
public stud:any=[
    {name:'Sanjay', std:'Angular'},
    {name:'Swapnil', std:'Java'},
    {name:'Rahul', std:'DOTNET'}
];

public getStudent()
{
    return this.stud;
}
}