import { useContext } from "react";
import AppContext from "../AppContext";
import Panel from "./Panel";
import "../App.scss";

const Terminal = () => {
    const { query, setQuery } = useContext(AppContext);
    const handleTextAreaChange = (event) => {
        if (event.target) {
            setQuery(event.target.value);
        } else {
            setQuery(event);
        }
    }
    return (
        <div className="editor">
            <div className="row">
                <div className="col-md-8 col-lg-9 col-xl-10 col-12 no-gutters">
                    <textarea 
                        value={query}
                        onChange={handleTextAreaChange}
                    />
                    <p style={{ fontSize: "0.8rem" }} className="text-2 pt-3 mb-0">
                        <strong>Select a query to start.</strong>
                    </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-2">
                    <Panel />
                </div>
            </div>
        </div>
    )
}

export default Terminal