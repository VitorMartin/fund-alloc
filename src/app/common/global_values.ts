export const pjson = {
    name: 'Fund Alloc',
    version: '3.0'
}

export const basedate = new Date().toISOString().split('T')[0];

export const http_config = {
    protocol: 'http',
    host: 'localhost',
    port: '8080',
    root: '',
    base_url: 'http://localhost:8080'
}

export const route = {
    fund: '/fund',
    fund_princ: '/fund/princ',
    fund_flow: '/fund/flow',
    desemb: '/desemb',
    avail_funds: '/desemb/availability',
    amort_desemb: '/amort_desemb'
}

export const key = {
    funds: 'funds',
    desembs: 'desembs',
    fund: 'fund',
    desemb: 'desemb',
    deal_id: 'dealId',
    basedate: 'basedate',
    kold: 'kold',
    princ: 'princ',
    flow: 'flow',
    ccb: 'ccb',
    amortDesembs: 'amortDesembs',
    type: 'type',
    val: 'val',
    avail_bef: 'availBefore',
    avail_aft: 'availAfter',
    data: 'data',
    desemb_princ: 'desembPrinc',
    fund_princ: 'fundPrinc',
    ccy: 'ccy',
    ini: 'ini',
    venc: 'venc',
    amort_id: 'amortId',
    override: 'override',
}

export enum FLOW_TYPE {
    fund = 'fund',
    desemb = 'desemb',
    amort_fund = 'amort_fund',
    amort_desemb = 'amort_desemb'
}

export enum CCY {
    USD = 'USD',
    EUR = 'EUR',
    BRL = 'BRL'
}

export enum AMORT_COLUMN {
    data = 'data',
    type = 'type',
    val = 'val',
    avail_aft = 'avail_aft'
}