import './LandingPage.css'
// import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'








const LandingPage = () => {
    return(
        <div className="app">
            <Parallax pages={3} style={{top: '0', left: '0'}}>
                <ParallaxLayer offset={0} speed={0.5} style={
                    {backgroundColor: '#f00',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGNla2h5NHJhMmcwMXNhcDVxMGRubDQ3and1ZmZvMGlhM3YzajVweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FOV9923exXGM78DoSZ/giphy.gif)',
                    backgroundSize: 'cover',
                    }}>
                    <div className="container">
                        <div className="card">
                            <h1>Welcome To Project Layoffs</h1>
                            <button>Click me</button>
                        </div>
                    </div>
                </ParallaxLayer>



                <ParallaxLayer offset={1} speed={1} style={
                    {backgroundColor: '#f00',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1681524415222-c41004d5f57d?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    backgroundSize: 'cover',
                
                }}>
                    <h1>Layer 1</h1>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1} style={
                    {backgroundColor: '#f00',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)',
                    backgroundSize: 'cover',
                
                }}>
                    <div className="container">
                        <div className="card">
                            <h1>Lets find what companies are at risk of laying off</h1>
                            <button>Click on me</button>
                        </div>
                    </div>
                </ParallaxLayer>

   
            </Parallax>
        </div>
    )
}









// const LandingPage = () => {
//     return(
        
                
//         <div className="app">

//             {/*tHE TWO SECTIONS BELOW ARE NOT RENDERED */}
//             <div className="section parallax-container bg3">
//                 <div className='container'>
//                     <h1>Hello World</h1>
//                     <button>Click me</button>
                    
//                 </div>
//             </div>
//             <div className="section parallax-container bg3">
//                 <div className='container'>
//                     <h1>Hello World</h1>
//                     <button>Click me</button>
                    
//                 </div>
//             </div>
//             {/*  END */}


//             {/* THE SECTION IS RENDERED BELOW */}


//             {/* FOR SOME REASON IT STARTS HERE */}
//             <div className="section parallax-container bg3">
//                 <div className='container'>
//                     <h1>Hello World</h1>
//                     <button>Click me</button>
                    
//                 </div>
//             </div>
//         <div className="section static">
//             <h1>Static Section</h1>
//         </div>
  
//         <div className="section parallax-container bg3">
//             <div className='container'>
//                 <h1>Parallax Section</h1>
//                 <button>Click here to find out</button>
//             </div> {/* end of container */}
//         </div> {/* end of section */}

        
        
//     </div>
        
//     )
// }






export default LandingPage;
