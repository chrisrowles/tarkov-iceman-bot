import type { Ammo } from '../../interfaces/dao/Ammo';
import { Parser } from '../../interfaces/Parser';
import { BaseParser } from '../BaseParser';

export class AmmoParser extends BaseParser implements Parser<AmmoParser, Ammo>
{ 
    /**
    * Fetch data
    * 
    * @param key
    */
    async fetchSource(key: string): Promise<AmmoParser> {
        const response = await fetch(`${this.url}/${key}`);
        this.source = await response.text();
        
        return this;
    }
    
    /**
    * Parse data
    * 
    * @returns 
    */
    async parseData(): Promise<Array<Ammo> | false> {
        return await this.parseHtmlTable(this.source, 'table.wikitable');
    }
}

export const ammoParser = new AmmoParser;