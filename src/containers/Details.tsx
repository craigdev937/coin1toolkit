import React from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { GeckoAPI } from "../global/GeckoAPI";
import { LineChart } from "../components/LineCart";

export const Details = () => {
    const params = useParams();
    const { id } = params;
    const coinID = id !== undefined ? String(id) : "";
    const { error, isLoading, data: coinData } = 
        GeckoAPI.useOneQuery(coinID);
    const { data: graphData } = GeckoAPI.useGraphQuery(coinID);
    const coin = coinData!;
    const graph = graphData!;

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
    <React.Fragment>
        {isLoading ? (
            <section className="spinner">
                <div className="spin"></div>
            </section>
        ) : (
            <section className="coin">
                <h1>BitCoin: {coin.name}</h1>
                <aside className="coin__name">
                    <img src={coin.image.large} alt={coin.name} />
                    <p><b>{coin.name} ({coin.symbol.toUpperCase()})</b></p>
                </aside>
                <aside className="coin__chart">
                    <LineChart graph={graph}  />
                </aside>
                <aside className="coin__info">
                    <ul>
                        <li>Crypto Market Rank</li>
                        <li>{coin.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current Price</li>
                        <li>$ {coin.market_data
                                .current_price
                                .usd
                                .toLocaleString()}
                        </li>
                    </ul>
                    <ul>
                        <li>Market Cap</li>
                        <li>$ {coin.market_data
                                .market_cap
                                .usd
                                .toLocaleString()}
                        </li>
                    </ul>
                    <ul>
                        <li>24 Hour Low</li>
                        <li>$ {coin.market_data
                                .low_24h
                                .usd
                                .toLocaleString()}
                        </li>
                    </ul>
                    <ul>
                        <li>24 Hour High</li>
                        <li>$ {coin.market_data
                                .high_24h
                                .usd
                                .toLocaleString()}
                        </li>
                    </ul>
                </aside>
            </section>
        )}
    </React.Fragment>
    );
};


