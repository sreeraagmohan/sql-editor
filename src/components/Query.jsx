import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import "../App.scss";

const Query = () => {

    const { setQuery, queries } = useContext(AppContext);
    const [list, setList] = useState(queries['saved']); 

    useEffect(() => {
        setList(queries['saved']);
    }, [queries]);

    const QueryList = (list) => {
        return list.map((query, index) => {
            return <div key={index} className='query'>
                <code onClick={() => setQuery(query)}>{query}</code>
            </div>
        })

    }

    return (
        <div className='query-box'>
            {QueryList(list)}
        </div>
    )
}

export default Query