import React from "react";
import { Link } from "react-router-dom";
import { ICoin } from "../models/Interfaces";

type COI = {
    coin: ICoin
};

export const CoinCard = ({ coin }: COI) => {
    return (
        <React.Fragment>
            <section>
                <Link to={`/coin/${coin.id}`}>
                    <aside key={coin.id} className="table__layout">
                        <p>{coin.market_cap_rank}</p>
                        <div>
                            <img src={coin.image} alt={coin.name} />
                            <p>{coin.name + " - " + coin.symbol}</p>
                        </div>
                        <p>$ {coin.current_price.toLocaleString()}</p>
                        <p className={
                            coin.price_change_percentage_24h > 0 ? "green" : "red"
                        }>
                            {Math.floor(coin.price_change_percentage_24h*100)/100}
                        </p>
                        <p className="market__cap">$ {coin.market_cap.toLocaleString()}</p>
                    </aside>
                </Link>
            </section>
        </React.Fragment>
    );
};


