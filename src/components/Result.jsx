import { useContext } from "react";
import AppContext from "../AppContext";

import Table from "./Table";
import "../App.scss";

const Result = () => {
    const { queries } = useContext(AppContext);
    return (
        <div className='query-results'>
            {queries.outputData.length > 0 ? (
                <>
                    <div className='tab-bar'>
                        <span className={"tabs active"}>
                            Output
                        </span>

                    </div>
                    <div className='query-details'>
                        <p className='text-2'>
                            <span>{queries.outputData.length} rows in set</span>
                        </p>

                    </div>
                    <Table result={queries.outputData}></Table>
                </>
            ) : (

                <div className='placeholder-text'>
                    <i className="bi-play"></i>
                    <p>Output</p>
                </div>
            )}
        </div>
    );
}

export default Result