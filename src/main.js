import './style.css'
import { renderDashboard } from './components/dashboard.js'

document.querySelector('#app').innerHTML = renderDashboard()

const dashboardShell = document.querySelector('.dashboard-shell')
const sidebarToggle = document.querySelector('.sidebar-toggle')

if (dashboardShell && sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    const isCollapsed = dashboardShell.classList.toggle('sidebar-collapsed')

    sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed))
    sidebarToggle.setAttribute('aria-label', isCollapsed ? 'Expand sidebar' : 'Collapse sidebar')
  })
}
