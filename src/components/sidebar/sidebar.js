import { NavLink } from "react-router-dom"
export const Sidebar = () => {
    const activeStyle = ({isActive}) => ({
        background: isActive? "var(--primary-color)": "none",
        padding: isActive && "0.5rem 4rem 0.5rem 0.5rem",
        fontSize: isActive && "1rem"
      })
    return (
        <div className="flex-div">
            <aside className="lib-sidebar">
                <ul>
                <li><NavLink to="/notes" style={activeStyle}><i className="sidebar-icon fa-solid fa-clipboard"></i><span>Notes</span></NavLink></li>
                <li> <NavLink to="/archive" style={activeStyle}><i className="sidebar-icon fa-solid fa-arrow-down-long"></i><span>Archive</span></NavLink></li>
                <li><NavLink to="/trash" style={activeStyle}><i className="sidebar-icon fa-solid fa-trash-can"></i><span>Trash</span></NavLink></li>
                </ul>
            </aside>
        </div>
    )
}