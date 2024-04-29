import React from 'react';
const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    backgroundColor: '#FCF7EC', // Adjust the background color to match your design
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: adds a subtle shadow to the header
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000, // Ensure the header is above other items
  };
  
  const brandStyle = {
    color: '#333', // Adjust the color to match your design
    // Add more styles if needed
  };
  
  const navStyle = {
    // Add styles for your navigation links container if needed
  };
  
  const linkStyle = {
    marginRight: '20px',
    textDecoration: 'none',
    color: '#333', // Adjust the color to match your design
    // Add more styles for your navigation links if needed
  };
  
  const buttonStyle = {
    cursor: 'pointer',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#000', // Adjust the button background color to match your design
    color: '#fff', // Adjust the button text color to match your design
    // Add more styles for your button if needed
  };
  
  
  

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={{ flex: 1 }}>
        <h1 style={brandStyle}>Layoff.fyi</h1>
      </div>
      <nav style={navStyle}>
        <a href="/team" style={linkStyle}>Team</a>
        <a href="/about" style={linkStyle}>About</a>
        <a href="/case-study" style={linkStyle}>Case Study</a>
      </nav>
      {/* <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' }}>
        <button style={buttonStyle}>Dashboard</button>
      </div> */}
    </header>
  );
};

export default Header;
