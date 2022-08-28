import { useContext } from "react";
import AppContext from "../AppContext";

import Table from "./Table";
import "../App.scss";

const Result = () => {
    const { queries } = useContext(AppContext);
    return (
        <div className="results-wrapper">
            {queries.outputData.length > 0 ? (
                <>
                    <div className="row justify-content-between">
                        <div className="col results-text">
                            <span>{queries.outputData.length} rows in set</span>
                        </div>
                        <div className="col text-end">
                            <div className="table-icons">
                                <i className="bi-search"></i>
                                <i className="bi-filter"></i>
                                <i className="bi-download"></i>
                            </div>
                        </div>
                    </div>
                    <Table result={queries.outputData}></Table>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Result