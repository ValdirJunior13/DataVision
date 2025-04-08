import React from 'react';

const Header = () => {

    const navLinkStyle = {
        marginLeft: '20px',
        textDecoration: 'none',
        color: '#333',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'all 0.3s',
        cursor: 'pointer'
    };

    const navButtonStyle = {
        marginLeft: '20px',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: 'none'
    };


    const loginButtonStyle = {
        ...navButtonStyle,
        backgroundColor: 'transparent',
        color: '#2563eb',
        border: '1px solid #2563eb',
        ':hover': {
            backgroundColor: '#2563eb10' 
        }
    };
    const registerButtonStyle = {
        ...navButtonStyle,
        backgroundColor: '#2563eb',
        color: 'white',
        ':hover': {
            backgroundColor: '#1d4ed8' 
        }
    };

    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '24px 40px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)' 
        }}>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Não sei</h1>
            <nav style={{ display: 'flex', alignItems: 'center' }}>
                <a href="/home" style={navLinkStyle}>Home</a>
                <a href="#" style={navLinkStyle}>Serviços</a>
                
                {/* Botão de Login */}
                <button 
                    style={loginButtonStyle}
                >
                    Login
                </button>
                
                {/* Botão de Cadastro */}
                <button style={registerButtonStyle}
                >
                    Cadastre-se
                </button>
            </nav>
        </header>
    );
};

export default Header;