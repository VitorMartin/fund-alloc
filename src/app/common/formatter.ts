import { CCY } from "./global_values";

export class Number_Formatter {
    REGION = {
        en_us: 'en-US'
    }
    STYLE = {
        ccy: 'currency'
    }

    format_ccy(number: number, ccy: string) {
        return Intl.NumberFormat('en-US', {style: this.STYLE.ccy, currency: ccy}).format(number)
    }
}