import {ScraperData} from "@/scraper/ScraperData";
import {Ask, Offers, Token} from "@/types/Types";

export function handleOffers(json: Offers, data: ScraperData) {
    const tokens = json.data.validTokens.nodes;
    const allAsks = json.data.allAsks.nodes;

    const result = tokens.map((token: Token) => {
        const ask: Ask|undefined = allAsks.find((ask: Ask) => ask.id === token.id);

        if (ask === undefined) {
            return null;
        }

        return {
            price: (ask.value / (10 ** 18)).toFixed(2),
            edition: token.tokenNumber
        };
    });

    data.items = result.filter((element: any) => element !== null)
}
