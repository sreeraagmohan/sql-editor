import React from "react"
import { useContext } from "react";
import AppContext from "../AppContext";
import { query1, query2, query3 } from "../utils/DataDump";

import "../App.scss";

const Panel = () => {
    const { query, setAllQueries, setQuery } = useContext(AppContext);
    const runQuery = () => {
        if (query.trim() === "") {
            return;
        }
        if (query.trim() === "SELECT * FROM customers;") {
            setAllQueries((prev) => ({
                ...prev,
                outputData: query1,
            }));
        }
        else if (query.trim() === "SELECT companyName, contactName FROM customers;") {
            setAllQueries((prev) => ({
                ...prev,
                outputData: query2,
            }));
        }

        else if (query.trim() === "SELECT * FROM territories") {
            setAllQueries((prev) => ({
                ...prev,
                outputData: query3,
            }))
        }
        else {
            return;
        }
        setAllQueries((prev) => ({
            ...prev,
        }));
    };

    const saveQuery = () => {
        if (query.trim() === "") {
            return;
        }
        setAllQueries((prev) => ({
            ...prev,
            saved: [...prev.saved, query.trim()],
        }));
    };
    const clearQuery = () => {
        setQuery("");
    };

    return (
        <div className="panel">
            <div className="btn-wrapper">
                <div className="btn primary-btn">
                    <a href="Javascript;" onClick={() => runQuery()} >
                        <i className="bi-play"></i>
                    </a>
                </div>
                Run
            </div>
            <div className="btn-wrapper">
                <div className="btn secondary-btn">
                    <a href="Javascript;" onClick={() => saveQuery()}>
                        <i className="bi-save"></i>
                    </a>
                </div>
                Save
            </div>
            <div className="btn-wrapper">
                <div className="btn alert-btn">
                    <a href="Javascript;" onClick={() => clearQuery()} >
                        <i className="bi-trash"></i>
                    </a>
                </div>
                Clear
            </div>
        </div>
    )
}

export default Panel