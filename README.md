# NetSim Pro - Interactive Network Simulator

NetSim Pro is a web-based educational network simulator designed to help developers, students, and engineers visually design, configure, and troubleshoot computer networks.

Built entirely with standard web components, NetSim Pro simulates real-time data flows, layer-by-layer header structures, and common network security scenarios directly in the web browser.

---

## Key Features

### 1. Visual Drag and Drop Workspace
- Drag workstations, switches, routers, firewalls, and server nodes onto the canvas.
- Connect devices using dedicated media cables including ethernet, serial, and fiber links.
- Move and organize your network topology with simple snap-to-grid controls.

### 2. Live Packet Flow Simulation
- Generate custom traffic streams (ICMP Pings, HTTP requests, HTTPS secure handshakes, DNS resolutions).
- Watch animated packets traverse nodes along physical connections.
- Analyze individual packets with the built-in OSI Stack Inspector, displaying diagnostic details for Layers 1, 2, 3, 4, and 7 on every network hop.

### 3. Dynamic Protocol Engines
- OSPF Routing (Dijkstra SPF): Run Dijkstra path calculations between two nodes, review tentative queues, and trace shortest path steps.
- RIP Convergence: Trigger periodic updates to build and synchronize router tables across multi-hop networks.
- DHCP Leases: Toggle dynamic IP allocation on gateways to automatically assign IP addresses, subnets, and DNS values to client workstations.

### 4. Interactive Security Lab
- DDoS Attack mitigation: Flood target servers with HTTP GET bursts. Measure resource impacts on the dashboard and deploy Firewall Rate Limiters to filter bad traffic.
- ARP Cache Spoofing: Broadcast malicious ARP responses to redirect workstation flows through a rogue host. Enable Switch Dynamic ARP Inspection (DAI) to secure the network.

---

## How to Use the Simulator

### Step 1: Design Your Network
Use the Device Library panel to add nodes to the grid workspace. Hover over a node, click the lightning flash connector button, and then click another node to draw a cable link.

### Step 2: Configure Interfaces
Click the settings gear button on any node to view configuration sheets. You can assign static IP addresses, toggle interface states, set up firewall policy matrices, or register custom domain name host bindings.

### Step 3: Simulate and Analyze
Generate traffic by clicking the fast-ping arrow on a workstation. Select any traveling packet on the canvas to inspect its header fields inside the OSI Analyzer.
