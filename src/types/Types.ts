export type Offers = {
    data: Data
}

type Data = {
    validTokens: TokenNodes,
    allAsks: AskNodes,
}

type TokenNodes = {
    nodes: Token[]
}

type AskNodes = {
    nodes: Ask[]
}

export type Token = {
    id: string,
    tokenNumber: string
}

export type Ask = {
    id: string,
    value: number
}
