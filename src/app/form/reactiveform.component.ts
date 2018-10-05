import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {StudentService} from '../service/student.service';
@Component({
    selector: 'model-form',
    templateUrl: './reactiveform.component.html',
    providers:[StudentService]
})

export class ReactiveFormComponent {
    public student:any;
    public studentModel: FormGroup
    constructor(private st:StudentService) {
        this.studentModel = new FormGroup({
            name: new FormControl(),
            city: new FormControl('Pune', [Validators.required]),
            phone: new FormControl('', [Validators.pattern('^([9]{1})([234789]{1})([0-9]{8})$')])
        });

    }

    public getStudent()
    {
        this.student=this.st.getStudent()
    }
}