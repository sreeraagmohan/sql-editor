import React, { useMemo, useState } from 'react'
import AppContext from '../AppContext'

/* Components */
import Sidebar from '../components/Sidebar'
import Terminal from '../components/Terminal'
import Result from '../components/Result'


const Home = () => {

    const [query, setQuery] = useState("SELECT * FROM customers;");
    const [AllQueries, setAllQueries] = useState({
        saved: ["SELECT * FROM customers;", "SELECT companyName, contactName, city, country FROM customers;", "SELECT * FROM territories"],
        outputData: [],
    })

    const contextValue = useMemo(
        () => ({ query, setQuery, AllQueries, setAllQueries }),
        [query, AllQueries]
    );

    return (
        <div >
            <AppContext.Provider value={contextValue}>
                <div>
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9 col-12 editor-area">
                            <Terminal />
                            <Result />
                        </div>

                    </div>

                </div>
            </AppContext.Provider>
        </div>
    )
}

export default Home