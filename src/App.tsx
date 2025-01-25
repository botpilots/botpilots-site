import './App.css'

function App() {

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <header style={{ marginTop: '20px' }}>
	  	<title>Bot Pilots</title>
      </header>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '20px' }}>
          <li><a className="text-xs" href="#who-we-are">Who we are</a></li>
          <li><a href="#what-we-do" style={{ color: 'white', textDecoration: 'none' }}>What we do</a></li>
          <li><a href="#portfolio" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</a></li>
        </ul>
      </nav>
      <footer style={{ marginBottom: '20px' }}>
        <p>Contact us: [placeholder for contact information]</p>
      </footer>
    </div>
  )
}

export default App