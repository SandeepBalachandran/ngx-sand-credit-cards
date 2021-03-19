import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[credit-card]'
})
export class creditCardDirective {
    @HostListener('input', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        console.log(event)
        const input = event.target as HTMLInputElement
        console.log(input)
        let trimmed = input.value.replace(/\s+/g, '')
        if (trimmed.length > 16) {
            trimmed = trimmed.substr(0, 16)
        }
        let numbers = [];
        for (let i = 0; i < trimmed.length; i += 4) {
            numbers.push(trimmed.substr(i, 4))
        }
        input.value = numbers.join(' ')
        // debugger
    }
}