import { useContext } from 'react'
import "../App.scss";
import AppContext from "../AppContext";
import Query from './Query';

const Sidebar = () => {
    const { queries } = useContext(AppContext); 

    return (
        <div className='sidebar'>
            <div className='side-item'>
                <h5>
                    <i className="bi-cloud"></i>
                    <span className='text'>Select a query to run</span>
                </h5>
                {queries && <Query />}
            </div>
        </div>
    )
}

export default Sidebar