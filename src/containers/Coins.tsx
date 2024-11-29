import React from "react";
import "./Coins.css";
import { GeckoAPI } from "../global/GeckoAPI";
import { CoinCard } from "./CoinCard";

export const Coins = () => {
    const { error, isLoading, data } = GeckoAPI.useCoinsQuery();

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
                <h1>Loading...</h1>
            ) : (
                <section className="coin">
                    <aside className="coin__hero">
                        <h1>Largest <br/> Crypto Marketplass</h1>
                        <p>
                            Welcome to the World's largest cryptocurrency 
                            marketplace.  Sign up to explore more 
                            about cryptos.
                        </p>
                        <form>
                            <input type="text" placeholder="Search Crypto..." />
                            <button type="submit">Search</button>
                        </form>
                    </aside>
                    <aside className="crypto__table">
                        <div className="table__layout">
                            <p>#</p>
                            <p>Coins</p>
                            <p>Price</p>
                            <p className="change">24H Change</p>
                            <p className="market__cap">Market Cap</p>
                        </div>
                    </aside>
                    <aside className="crypto__table">
                        {data!.map((coin) => (
                            <CoinCard key={coin.id} coin={coin} />
                        ))}
                    </aside>
                </section>
            )}
        </React.Fragment>
    );
};


