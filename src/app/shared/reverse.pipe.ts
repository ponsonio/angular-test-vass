import {Pipe} from '@angular/core';

@Pipe({
    name:'reverse'
})
export class ReversePipe {

    transform(value: String) {
        return value.split("").reverse().join("");
    }
    
}
