import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Graphemail, { BpGraphDisplayData } from "../../Services/User.service";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';


import "../css/Patient/Visitgraph1.css"

function Visitgrap1() {
    const [bpgraphData, SetbpgrapnData] = useState([])

    const location = useLocation();
    const QueystringData = () => {

        const searchParams = new URLSearchParams(location.search);
        const data = searchParams.get("data");

        if (data) {
            const parsedData = JSON.parse(data);
            console.log("PARSEING DATA GRAPH", parsedData);
            const Emailvalues = parsedData.Email;
            console.log("Emailvalues", Emailvalues);

            return Emailvalues;

        }
        else {
            console.log("");
        }
    }
        ;
    const data12 = async () => {
        Graphemail.Email = QueystringData();
        console.log("MEthod", Graphemail.Email);
        const { data } = await BpGraphDisplayData();
        console.log("data", data);
        SetbpgrapnData(data);
    }


    const updatedData = bpgraphData.map((item, index) => ({
        Date: item.Date,
        Bp: item.Bp,


    }));

    console.log(updatedData);

    useEffect(() => {
        console.log("useEffect patientgraph");

        QueystringData();
        data12();
    }, []);

    return (
        <div className="visitgraph1">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "25px", fontWeight: "600", marginLeft: "1%", color: "blue" }}> BP Graph</h5>
                    <hr />
                    <LineChart

                        width={600}
                        height={400}
                        data={updatedData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,


                        }}

                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Date" style={{ overflow: "hidden" }} />
                        <YAxis style={{ overflow: "hidden" }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Bp" stroke="#8884d8" activeDot={{ r: 8 }} />
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    </LineChart>

                </div>
            </div>
        </div>
    )
}

export default Visitgrap1;