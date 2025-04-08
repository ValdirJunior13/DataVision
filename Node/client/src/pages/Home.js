import React from 'react';

const Home = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <section style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                flexWrap: 'wrap', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '60px 40px' 
            }}>
                <div style={{ flex: '1 1 400px', paddingRight: '20px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
                        texto 1
                    </h2>
                    <p style={{ color: '#666', marginBottom: '30px' }}>
                        texto 2
                    </p>
                    <button style={{ 
                        backgroundColor: '#2563eb', 
                        color: 'white', 
                        padding: '12px 24px', 
                        border: 'none', 
                        borderRadius: '25px', 
                        cursor: 'pointer' 
                    }}>
                        Contact Now
                    </button>
                </div>
                <div style={{ flex: '1 1 400px', textAlign: 'center', marginTop: '30px' }}>
                    <img
                        src="/agency-team.jpg"
                        alt="Team in meeting"
                        style={{ 
                            maxWidth: '100%', 
                            borderRadius: '12px', 
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
                        }}
                    />
                </div>
            </section>
        </div>
    );
};

export default Home; 