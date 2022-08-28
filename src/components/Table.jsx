import { TablePagination } from "react-pagination-table";
import { getTableRows, getTableHeaders, getTableColumns } from "../utils/TableUtils";
import "../App.scss";

const Table = (props) => {
    return (
        <div className="query-table">
            {props.result.length > 0 ? (
                <TablePagination
                    data={getTableRows(props.result)}
                    headers={getTableHeaders(props.result)}
                    columns={getTableColumns(props.result)}
                    perPageItemCount={5}
                    totalCount={props.result.length}
                    paginationClassName={"pagination-controls"}
                />
            ) : null}
        </div>
    )
}

export default Table