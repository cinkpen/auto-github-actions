import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-links">
          <li>
            <a href="#" className="sidebar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="sidebar-link">
              Issues
            </a>
          </li>
          <li>
            <a href="#" className="sidebar-link">
              Pull Requests
            </a>
          </li>
          <li>
            <a href="#" className="sidebar-link">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar