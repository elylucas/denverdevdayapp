import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {

  public transform(value: Date, fmt: string): string {

    let dateTime = moment(value);

    return dateTime.format(fmt);// this.formatter.format(value, CustomDatePipe.namedFormats[fmt]);

  }
}