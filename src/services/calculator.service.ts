import { Injectable } from "@angular/core"

@Injectable()
export class CalculatorService {
    add(a, b) {
        return a + b;
    }
}