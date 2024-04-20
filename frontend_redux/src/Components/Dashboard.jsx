import React,{useEffect,useState} from "react";
import './Dashboard.css';

const Dashboard = () => {
    
    const [data,setData] = useState([]);

    return(
        <div>
            <div className="search-bar">
                <input type="text" placeholder="Search.."/>
                <button>Search</button>
            </div>
            <div className="container">
                <div className="card">
                    <h2>Card 1</h2>
                    <p>Some text</p>
                </div>
                <div className="card">
                    <h2>Card 1</h2>
                    <p>Some text</p>
                </div>
                <div className="card">
                    <h2>Card 1</h2>
                    <p>Some text</p>
                </div>
                <div className="card">
                    <h2>Card 1</h2>
                    <p>Some text</p>
                </div>
                <div className="card">
                    <h2>Card 1</h2>
                    <p>Some text</p>
                </div>              
            {data.length > 0 ? data.map((item,index) => {
                return(
                    <div className="card" key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                )
            }
            ) : <h1>Waiting</h1>}


            </div>
            
            
        </div>
    )

}


export default Dashboard;
