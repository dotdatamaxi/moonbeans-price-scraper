import {ScraperStatus} from "@/scraper/ScraperStatus";

export class ScraperData {
    items: any[];
    status: ScraperStatus;

    constructor() {
        this.items = [];
        this.status = new ScraperStatus();
    }
}
