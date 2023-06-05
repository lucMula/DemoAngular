import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'tronca'
})
export class TroncaPipe implements PipeTransform
{
    transform(value: string,limite?:number) {
        let limiteReale=limite ?? 30;
        if(value.length<=limiteReale)return value;
        return value.substring(0,limiteReale)+'...';
    }
    
}