import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#f2f2f2',
        padding: '20px 0',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        marginTop: '60px'
    };

    return (
        <footer style={footerStyle}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <p style={{ margin: '5px 0', color: '#555', fontSize: '14px' }}>
                    DataVision &copy; 2023
                </p>
                <p style={{ margin: '5px 0', color: '#555', fontSize: '14px' }}>
                    Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer; 