import {
  navItems,
  revenueBars,
  revenueDays,
  serviceBars,
  statCards,
  targetBars,
  targetMonths,
  topProducts,
} from '../data/dashboardData.js'
import { icon } from '../utils/icon.js'

const renderSidebar = () => `
  <aside class="sidebar">
    <div class="sidebar-header">
      <a class="brand" href="#">
        <span class="brand-mark">${icon('settings')}</span>
        <span>Dabang</span>
      </a>
      <button class="sidebar-toggle" type="button" aria-label="Collapse sidebar" aria-expanded="true">
        ${icon('menu')}
      </button>
    </div>

    <nav class="nav-list">
      ${navItems.map(({ icon: iconName, label, active }) => `
        <a class="nav-link ${active ? 'active' : ''}" href="#">
          ${icon(iconName)}
          <span>${label}</span>
        </a>
      `).join('')}
    </nav>

    <section class="pro-card">
      <span class="pro-icon">${icon('settings')}</span>
      <h2>Dabang Pro</h2>
      <p>Get access to all features on tetumbas</p>
      <button>Get Pro</button>
    </section>
  </aside>
`

const renderTopbar = () => `
  <header class="topbar">
    <h1>Dashboard</h1>
    <label class="search-box">
      ${icon('search')}
      <input type="search" placeholder="Search here..." />
    </label>
    <div class="top-actions">
      <button class="language">
        <span class="flag">US</span>
        <strong>Eng (US)</strong>
        ${icon('chevron')}
      </button>
      <button class="notify">${icon('bell')}<span></span></button>
      <button class="profile">
        <img class="avatar" src="/profile-avatar.svg" alt="Mustiq profile picture" />
        <span><strong>Mustiq</strong><small>Admin</small></span>
        ${icon('chevron')}
      </button>
    </div>
  </header>
`

const renderSalesCard = () => `
  <article class="card sales-card">
    <div class="card-heading">
      <div>
        <h2>Today's Sales</h2>
        <p>Sales Summary</p>
      </div>
      <button class="export-btn">${icon('export')} Export</button>
    </div>
    <div class="stats-row">
      ${statCards.map(({ icon: iconName, value, title, note, tone }) => `
        <div class="stat ${tone}">
          <span>${icon(iconName)}</span>
          <strong>${value}</strong>
          <b>${title}</b>
          <small>${note}</small>
        </div>
      `).join('')}
    </div>
  </article>
`

const renderVisitorInsights = () => `
  <article class="card insight-card">
    <h2>Visitor Insights</h2>
    <div class="line-chart visitor-chart">
      <div class="y-axis-labels">
        <span>400</span>
        <span>300</span>
        <span>200</span>
        <span>100</span>
        <span>0</span>
      </div>
      <div class="chart-area">
        <svg viewBox="0 0 620 260" preserveAspectRatio="none" aria-hidden="true">
          <g class="grid-lines">
            <path d="M0 18H620M0 78H620M0 138H620M0 198H620M0 248H620"/>
          </g>
          <path class="purple-line" d="M0 92C42 58 92 68 142 106S242 182 312 160 408 84 486 92 560 180 620 198"/>
          <path class="red-line" d="M0 116C45 82 88 114 145 154S245 212 300 152 394 44 486 58 560 148 620 198"/>
          <path class="green-line" d="M0 112C50 36 122 28 190 62S286 154 358 148 450 86 512 100 580 164 620 168"/>
          <path class="marker-line" d="M486 18V248"/>
          <circle class="red-dot" cx="486" cy="58" r="12"/>
        </svg>
        <div class="months">
          ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jun', 'Jul', 'Sept', 'Oct', 'Nov', 'Des']
            .map((month) => `<span>${month}</span>`)
            .join('')}
        </div>
      </div>
    </div>
    <div class="legend"><span class="purple"></span>Loyal Customers <span class="red"></span>New Customers <span class="green"></span>Unique Customers</div>
  </article>
`

const renderRevenueCard = () => `
  <article class="card revenue-card">
    <h2>Total Revenue</h2>
    <div class="bar-chart revenue-bars">
      <div class="y-axis-labels revenue-y">
        <span>25k</span>
        <span>20k</span>
        <span>15k</span>
        <span>10k</span>
        <span>5k</span>
        <span>0</span>
      </div>
      <div class="bars-area">
        ${revenueDays.map((day, index) => `
          <div class="bar-group">
            <span class="bar blue" style="height:${revenueBars.online[index]}%"></span>
            <span class="bar mint" style="height:${revenueBars.offline[index]}%"></span>
            <small>${day}</small>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="legend revenue-legend"><i class="dot-circle blue"></i>Online Sales <i class="dot-circle green"></i>Offline Sales</div>
  </article>
`

const renderSatisfactionCard = () => `
  <article class="card satisfaction-card">
    <h2>Customer Satisfaction</h2>
    <div class="area-chart">
      <svg viewBox="0 0 520 260" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="blueArea" x1="0" x2="0" y1="0" y2="1">
            <stop stop-color="#1d9bf0" stop-opacity=".32"/>
            <stop offset="1" stop-color="#3aa5ff" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="greenArea" x1="0" x2="0" y1="0" y2="1">
            <stop stop-color="#20d994" stop-opacity=".28"/>
            <stop offset="1" stop-color="#22d99a" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <path class="area-fill" fill="url(#greenArea)" d="M8 70C52 92 76 110 102 110S155 85 170 88S215 150 246 145S294 80 336 82S390 170 438 170S485 72 512 44V226H8Z"/>
        <path class="area-fill" fill="url(#blueArea)" d="M8 152C55 150 80 132 102 118S145 105 170 202S220 210 246 202S304 165 336 170S396 178 438 170S486 112 512 170V226H8Z"/>
        <path class="green-line" d="M8 70C52 92 76 110 102 110S155 85 170 88S215 150 246 145S294 80 336 82S390 170 438 170S485 72 512 44"/>
        <path class="blue-line" d="M8 152C55 150 80 132 102 118S145 105 170 202S220 210 246 202S304 165 336 170S396 178 438 170S486 112 512 170"/>
        <g class="green-points">
          <circle cx="8" cy="70" r="8"/>
          <circle cx="102" cy="110" r="8"/>
          <circle cx="170" cy="88" r="8"/>
          <circle cx="246" cy="145" r="8"/>
          <circle cx="336" cy="82" r="8"/>
          <circle cx="438" cy="170" r="8"/>
          <circle cx="512" cy="44" r="8"/>
        </g>
        <g class="blue-points">
          <circle cx="8" cy="152" r="8"/>
          <circle cx="102" cy="118" r="8"/>
          <circle cx="170" cy="202" r="8"/>
          <circle cx="246" cy="202" r="8"/>
          <circle cx="336" cy="170" r="8"/>
          <circle cx="438" cy="170" r="8"/>
          <circle cx="512" cy="170" r="8"/>
        </g>
      </svg>
    </div>
    <div class="split-metric">
      <span><i class="dot blue"></i>Last Month <b>$3,004</b></span>
      <span><i class="dot green"></i>This Month <b>$4,504</b></span>
    </div>
  </article>
`

const renderTargetCard = () => `
  <article class="card target-card">
    <h2>Target vs Reality</h2>
    <div class="target-bars">
      ${targetMonths.map((month, index) => `
        <div>
          <span class="stack reality" style="height:${targetBars.reality[index]}px"></span>
          <span class="stack target" style="height:${targetBars.target[index]}px"></span>
          <small>${month}</small>
        </div>
      `).join('')}
    </div>
    <div class="target-summary">
      <span class="summary-icon green">${icon('bag')}</span>
      <p><b>Reality Sales</b><small>Global</small></p>
      <strong class="green-text">8.823</strong>
      <span class="summary-icon orange">${icon('doc')}</span>
      <p><b>Target Sales</b><small>Commercial</small></p>
      <strong class="orange-text">12.122</strong>
    </div>
  </article>
`

const renderProductsCard = () => `
  <article class="card products-card">
    <h2>Top Products</h2>
    <div class="table">
      <div class="table-row head"><span>#</span><span>Name</span><span>Popularity</span><span>Sales</span></div>
      ${topProducts.map(({ rank, name, percent, tone }) => `
        <div class="table-row">
          <span>${rank}</span>
          <strong>${name}</strong>
          <i class="progress"><b class="${tone}" style="width:${percent}"></b></i>
          <em class="${tone}">${percent}</em>
        </div>
      `).join('')}
    </div>
  </article>
`

const renderMapCard = () => `
  <article class="card map-card">
    <h2>Sales Mapping by Country</h2>
    <img class="world-map" src="/sales-map.png" alt="Sales mapping by country" />
  </article>
`

const renderServiceCard = () => `
  <article class="card service-card">
    <h2>Volume vs Service Level</h2>
    <div class="stacked-bars">
      ${serviceBars.volume.map((height, index) => `
        <span style="height:${height}px"><i style="height:${serviceBars.services[index]}px"></i></span>
      `).join('')}
    </div>
    <div class="split-metric service">
      <span><i class="dot blue"></i>Volume <b>1,135</b></span>
      <span><i class="dot green"></i>Services <b>635</b></span>
    </div>
  </article>
`

export const renderDashboard = () => `
  <div class="dashboard-shell">
    ${renderSidebar()}
    <main class="main-panel">
      ${renderTopbar()}
      <section class="grid">
        ${renderSalesCard()}
        ${renderVisitorInsights()}
        ${renderRevenueCard()}
        ${renderSatisfactionCard()}
        ${renderTargetCard()}
        ${renderProductsCard()}
        ${renderMapCard()}
        ${renderServiceCard()}
      </section>
    </main>
  </div>
`
