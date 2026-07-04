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

## How to Run the Simulator

You can launch and view the simulator on your machine in two ways:

### Method 1: Host via Local Server

Open your terminal, navigate to the folder directory, and run Python's built-in server command:

```bash
python3 -m http.server 3000
```

Once the task starts, open your web browser and navigate to:
http://localhost:3000

### Method 2: Offline Double-Click

Simply double-click the index.html file in Finder to open it locally as a static page.

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
# NetSim-Pro
