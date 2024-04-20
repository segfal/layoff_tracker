import './LandingPage.css'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";


const LandingPage = () => {
    return(
        
                
        <div className="app">
            <div className="section parallax bg1">
                <div className='container'>
                    <h1>Hello World</h1>
                    <button>Click me</button>
                    
                    
                </div>
            </div>
        <div className="section static">
            <h1>Static Section</h1>
        </div>
        <div className="section parallax bg2">
            <h1>Parallax Section</h1>
        </div>
        <div className="section static">
            <h1>Static Section</h1>
        </div>
        <div className="section parallax bg3">
            <div className='container'>
                <h1>Parallax Section</h1>
                <button>Click here to find out</button>
            </div>
        </div>

        
        
    </div>
        
    )
}


export default LandingPage;
