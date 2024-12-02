import React from "react";
import "./LineChart.css";
import Chart from "react-google-charts";
import { IGraph } from "../models/Interfaces";

type CHA = {
    graph: IGraph
};

export const LineChart = ({ graph }: CHA) => {
    const [data, setData] = 
        React.useState([["Date", "Prices"]]);    

    React.useEffect(() => {
        let dataCopy: any = [["Date", "Prices"]];
        if (graph.prices) {
            graph.prices.map((item) => {
                dataCopy
                    .push([`${new Date(item[0])
                    .toLocaleDateString()
                    .slice(0,-5)}`, item[1]])
            })
            setData(dataCopy);
            console.log(dataCopy);
        }
    }, [graph]);
    console.log(data);
    

    return (
        <React.Fragment>
            <Chart 
                chartType="LineChart"
                data={data}
                height={"100%"}
                options={{
                    title: "Prices"
                }}
                legendToggle
            />
        </React.Fragment>
    );
};


