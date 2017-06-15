import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LocalDateTimeFormatterPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'localDateTimeFormatter',
})
export class LocalDateTimeFormatterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
    let dataHora = value.dayOfMonth + "/" + value.monthValue + "/" + value.year + " " + value.hour + ":" + value.minute
    return dataHora;
  }
}
