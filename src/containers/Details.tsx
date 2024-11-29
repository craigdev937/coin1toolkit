import React from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { GeckoAPI } from "../global/GeckoAPI";

export const Details = () => {
    const params = useParams();
    const { id } = params;
    const coinID = id !== undefined ? String(id) : "";
    const { data: coin } = GeckoAPI.useOneQuery(coinID);
    console.log("single", coin);

    return (
        <React.Fragment>
            <h1>Details</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae, quos eaque est ipsam reiciendis perferendis eius natus magni vel autem hic quasi voluptatibus unde pariatur. Dolorem aliquid quidem nisi.</p>
        </React.Fragment>
    );
};


