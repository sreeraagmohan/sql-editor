import { getTableRows, getTableHeaders } from "../utils/TableUtils";
import "../App.scss";

const Table = (props) => {
    return (
        <div className='query-table'>
            {props.result.length > 0 ? (
                <table>
                    <thead>
                        {getTableHeaders(props.result)}
                    </thead>
                    <tbody>
                        {getTableRows(props.result)}
                    </tbody>
                </table>
            ) : null}
        </div>
    )
}

export default Table