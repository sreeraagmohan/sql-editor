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
        <div className="editor-wrapper">
            <div className="row">
                <div className="col">
                    <p className="editor-header">
                        Select a query to start
                    </p>
                    <textarea
                        className="editor-textarea"
                        value={query}
                        onChange={handleTextAreaChange}
                    />
                    <Panel />
                </div>
            </div>
        </div>
    )
}

export default Terminal