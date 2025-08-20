import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKHR'
})
export class ToKHRPipe implements PipeTransform {

  transform(amount: number): unknown {
    let res: number = amount * 4100;
    let roundPrice: number = Math.round(res / 100) * 100;
    let local_res: string = roundPrice.toLocaleString() + " ៛";
    return local_res;
  }
}
