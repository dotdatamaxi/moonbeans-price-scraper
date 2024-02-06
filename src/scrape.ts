require('module-alias/register')

import {Scraper} from "@/scraper/Scraper";

(async () => {
    const url = process.env.npm_config_url;

    if (url === undefined) {
        console.log('[]');
        return
    }

    const scraper = new Scraper();
    let items = await scraper.scrape(url);
    items = items.sort((a: any, b: any) => a.price - b.price)

    console.log(JSON.stringify(items));
})();
