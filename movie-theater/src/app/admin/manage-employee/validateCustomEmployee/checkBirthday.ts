import {AbstractControl} from '@angular/forms';


export function checkBirthday(control: AbstractControl) {
  const dateOfBirth = new Date(control.value);
  if (new Date().getFullYear() - dateOfBirth.getFullYear() < 16 || new Date().getFullYear() - dateOfBirth.getFullYear() > 50) {
    return {checkAge : true};
  }
  return null;
}
