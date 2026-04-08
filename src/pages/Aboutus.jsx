import React from 'react';

const AboutUs = () => {
  // Array of team members
  const teamMembers = [
    { name: 'Adarsh M', id: '1VA23IS002' },
    { name: 'Kavana H', id: '1VA23IS045' },
    { name: 'Shreya P Shetty', id: '1VA23IS099' },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.header}>About Us</h2>
      
      <div style={styles.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.card}>
            {/* Profile Picture: Grabs the first letter of the name */}
            <div style={styles.avatar}>
              {member.name.charAt(0).toUpperCase()}
            </div>
            
            {/* Details */}
            <h3 style={styles.name}>{member.name}</h3>
            <p style={styles.id}>{member.id}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Styles object
const styles = {
  section: {
    /* The Green to Black Gradient Theme */
    background: 'linear-gradient(to bottom, #0f5132, #000000)',
    minHeight: '100vh',
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    color: 'white',
  },
  header: {
    fontSize: '3rem',
    marginBottom: '4rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#4ade80', // Bright green accent for the title
  },
  grid: {
    display: 'flex',
    gap: '2.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1200px',
  },
  card: {
    /* Glassmorphism effect for the cards */
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '2.5rem 2rem',
    width: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#4ade80', // Bright green circle
    color: '#000000',      // Black text inside the circle
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 15px rgba(74, 222, 128, 0.3)',
  },
  name: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.25rem',
    fontWeight: '600',
    textAlign: 'center',
  },
  id: {
    margin: 0,
    color: '#a7f3d0', // Very light green for the ID to contrast the white name
    fontSize: '1rem',
    fontWeight: '400',
    letterSpacing: '1px',
  }
};

export default AboutUs;