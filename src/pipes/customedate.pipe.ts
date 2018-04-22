import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {

  public transform(value: Date, fmt: string): string {
    if(moment.isDate(value)) {
    let dateTime = moment(value);
    return dateTime.format(fmt);
    }
    else {
      return '';
    }
  }
}
