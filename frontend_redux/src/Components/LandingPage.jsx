import './LandingPage.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const LandingPage = () => {
    return (
        <Parallax pages={3}>
            <ParallaxLayer offset={0} speed={0.2} style={{ height: '100vh' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '120vh', // This height will make sure the layer fills the screen
                    color: 'white',
                    backgroundImage: `url(https://images.unsplash.com/photo-1542281286-9e0a16bb7366)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', // This will center the background image
                    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                }}>
                    <h1>Welcome to Our Technology</h1>
                </div>
            </ParallaxLayer>
    
            <ParallaxLayer offset={1} speed={0.2} style={{ height: '100vh' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '120vh', // Consistent with the height of the previous layer
                    color: 'white',
                    backgroundImage: `url(https://images.unsplash.com/photo-1562569633-622303bafef5)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <h1>Innovating for Tomorrow</h1>
                </div>
            </ParallaxLayer>
    
            <ParallaxLayer offset={2} speed={0.2} style={{ height: '100vh' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '120vh', // Ensure this is also 100vh
                    color: 'white',
                    backgroundImage: `url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <h1>Join Us</h1>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
    
}

export default LandingPage;
