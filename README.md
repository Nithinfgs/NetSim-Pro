# NetSim Pro - Interactive Network Simulator

NetSim Pro is a browser-based simulator that allows you to visually design, configure, and simulate computer networks in real time. Drag and drop devices, connect them with cables, configure interfaces, and watch packets move through the layers of the OSI model.

---

## File Structure

The entire application is consolidated into these main files inside this directory:

- index.html: Main entrypoint loading Tailwind CSS, React, and Babel from CDNs.
- style.css: Visual design styles, scrollbars, panel glassmorphism, and cable flow keyframes.
- app.js: Complete React application logic, OSPF Dijkstra solvers, RIP routing vectors, DHCP engines, and SVG canvas renderer.
- README.md: This user documentation guide.

---

## Deployment on Netlify

Since NetSim Pro is a pure browser-based client-side application with no server dependencies, it is perfectly suited for static hosting services like Netlify.

### Method 1: Netlify Drag and Drop

- Open your browser and navigate to the Netlify app.
- Log into your account and head to the Sites page.
- Scroll down to the Import from Git or Drag and Drop section.
- Drag and drop this netsim-pro folder directly into the upload area.
- Netlify will deploy your site in seconds and provide a public URL.

### Method 2: Offline Execution

Simply double-click the index.html file in Finder to open it locally as a static page in your browser.

---

## Interactive Features

### 1. DHCP Auto-IP Addressing
- Open the settings on Router-Gateway.
- Go to the Routing tab, check Enable DHCP Server, and click Save.
- Open the settings on PC-Office, switch IP Mode to DHCP, and click Request Lease.
- Watch yellow DHCP packets broadcast and lease configuration parameters.

### 2. OSPF Dijkstra SPF Path Solver
- Select a Source Node and a Target Node in the left OSPF panel.
- Click Calculate SPF Path to run Dijkstra's algorithm.
- Follow the path vector table calculations step by step.

### 3. Security Attack Lab
- DDoS Flooding: Toggle this to flood the server with HTTP packets. Observe server CPU load spike to 100 percent. Toggle the Firewall Rate Limiter to mitigate the flood.
- ARP Cache Poisoning: Toggle this to poison the workstation ARP cache. Legitimate packets will route through Attacker-PC first. Toggle Switch DAI Inspection to block the attack.
