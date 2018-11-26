import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator

function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn{

    (control: AbstractControl) : {[key: string]:any} | null => {
        const forbidden = /admin/.test(control.value);
        return forbidden ? {'forbiddenName': {value: control.value}} : null;
    }

}