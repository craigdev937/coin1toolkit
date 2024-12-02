export interface IPage {
    page: number,
    perPage: number | string
};

export interface ICoin {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    fully_diluted_valuation: number,
    total_volume: number,
    high_24h: number,
    low_24h: number,
    price_change_24h: number,
    price_change_percentage_24h: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    ath: number,
    ath_change_percentage: number,
    ath_date: string,
    atl: number,
    atl_change_percentage: number,
    atl_date: string,
    roi: {
        times: number,
        currency: string,
        percentage: number
    },
    last_updated: string
};

export interface IDetail {
    id: string,
    symbol: string,
    name: string,
    categories: string[],
    description: {
        en: string
    },
    links: {
        homepage: string[]
    },
    blockchain_site: string[],
    image: {
        thumb: string,
        small: string,
        large: string
    },
    market_data: {
        current_price: {
            usd: number
        },
        market_cap: {
            usd: number
        },
        high_24h: {
            usd: number
        },
        low_24h: {
            usd: number
        }
    },
    market_cap_rank: number
};

export interface IGraph {
    prices: [number[]],
    market_caps: [number[]],
    total_volumes: Array<number[]>
};


