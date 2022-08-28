import { useContext } from "react"
import "../App.scss";
import AppContext from "../AppContext";
import Query from "./Query";

const Sidebar = () => {
    const { queries } = useContext(AppContext);

    return (
        <div className="sidebar">
            <h5 className="sidebar-title">
                <i className="bi-clock-history"></i>
                Recent Queries
            </h5>
            {queries && <Query />}
        </div>
    )
}

export default Sidebar