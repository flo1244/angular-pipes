import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'shorten'
})
//custom pipe
export class ShortenPipe implements PipeTransform{
    transform(value: any, limit: number) {
        if (value.length > limit) {
        return value.substr(0, limit) + ' ...'; // this would give us onl 10 characters of string.
    }
        return value;
}
}