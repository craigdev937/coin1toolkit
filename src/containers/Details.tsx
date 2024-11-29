import React from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { GeckoAPI } from "../global/GeckoAPI";

export const Details = () => {
    const params = useParams();
    const { id } = params;
    const coinID = id !== undefined ? String(id) : "";
    const { error, isLoading, data: coin } = GeckoAPI.useOneQuery(coinID);
    console.log("single", coin);

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
                <h1>BitCoin: {coin?.name}</h1>
                <aside className="coin__name">
                    <img src={coin?.image.large} alt={coin?.name} />
                    <p><b>{coin?.name} ({coin?.symbol.toUpperCase()})</b></p>
                    <p>{coin?.description.en}</p>
                </aside>
            </section>
        )}
    </React.Fragment>
    );
};


