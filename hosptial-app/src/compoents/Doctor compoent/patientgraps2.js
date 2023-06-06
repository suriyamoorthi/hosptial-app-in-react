import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Graphemail, { WeightGerapDatas } from "../../Services/User.service";
import { useState } from "react";


import "../css/Doctor/Patientgraph2.css"

function Patientgraps2() {

    const [Graph, SetGraph] = useState([])
    const location = useLocation();

    const QueryStringWeightGraph = () => {

        const searchParams = new URLSearchParams(location.search);
        const WGrapnData = searchParams.get("data");
        if (WGrapnData) {
            const GeraphParsingData = JSON.parse(WGrapnData);
            console.log("WeightGeraphParsingData", GeraphParsingData);
            const WeightGeraphEmail = GeraphParsingData.Email
            console.log(" WeightGeraphEmail", WeightGeraphEmail);
            return WeightGeraphEmail;
        }
        else {
            console.log("");
        }
    }

    const GetData = async () => {
        Graphemail.Email = QueryStringWeightGraph();
        console.log("MEthod Graphemail", Graphemail.Email);
        const { data } = await WeightGerapDatas();
        SetGraph(data);
        console.log("GetData", data);

    }


    const getGeraphData = Graph.map((item) => ({
        Date: item.Date,
        Weight: item.Weight,


    }));
    console.log("getGeraphData", getGeraphData);

    useEffect(() => {
        console.log("WeightGraph USEEFFECT");
        QueryStringWeightGraph();
        GetData();

    }, [])
    return (

        <div className="Patientgraph2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "25px", fontWeight: "600", marginLeft: "1%", color: "blue" }}> Weight</h5>

                    <hr />
                    <BarChart
                        width={600}
                        height={400}
                        data={getGeraphData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* <Bar dataKey="pv" stackId="a" fill="#8884d8" /> */}
                        <Bar dataKey="Weight" stackId="a" fill="#82ca9d" />
                    </BarChart>

                </div>
            </div>
        </div>



    )
}

export default Patientgraps2;