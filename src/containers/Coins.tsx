import React from "react";
import "./Coins.css";

export const Coins = () => {
    return (
        <React.Fragment>
            <section className="coin">
                <aside className="coin__hero">
                    <h1>Largest <br/> Crypto Marketplass</h1>
                    <p>Welcome to the World's largest cryptocurrency marketplace.  Sign up to explore more about cryptos.</p>
                    <form>
                        <input type="text" placeholder="Search Crypto..." />
                        <button type="submit">Search</button>
                    </form>
                </aside>
            </section>
        </React.Fragment>
    );
};


