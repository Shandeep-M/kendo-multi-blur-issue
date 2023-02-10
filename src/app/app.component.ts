import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
    <form [formGroup]="myForm">
      <div class="example-config">
        The form.gender value is: <strong>{{ myForm.controls.gender.value | json }}</strong>
      </div>
      <kendo-label text="Select gender">
        <kendo-multiselect
            formControlName="gender"
            [data]="genders"
            textField="text"
            valueField="value"
            (valueChange)="onChange()"
            [valuePrimitive]="true"
            (change)="onBlur()"
        >
        </kendo-multiselect>
        <small *ngIf="myForm.get('gender').touched && !!myForm.get('gender').errors && 
        !!myForm.get('gender').errors['required']">This
                                            is a required field</small>
      </kendo-label>
    </form>
  `,
})
export class AppComponent {
  public genders: Array<{ text: string; value: number }> = [
    { text: 'Male', value: 1 },
    { text: 'Female', value: 2 },
    { text: 'Other', value: 3 },
  ];

  onBlur() {
    console.log(this.myForm.get('gender'));
  }

  public myForm: FormGroup = new FormGroup({
    gender: new FormControl([2], {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
  });

  onChange() {
    console.log(this.myForm.get('gender'));
  }
}
