const { useState, useEffect, useRef, useCallback } = React;

// ==========================================
// 1. INLINE SVG ICON COMPONENTS
// ==========================================
const NetworkIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8" />
  </svg>
);

const LaptopIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12" /><path d="M2 20h20" /><path d="M12 20v-4" />
  </svg>
);

const MonitorIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const DatabaseIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const ShieldAlertIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6v7z" />
    <line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

const CpuIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
  </svg>
);

const CloudIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.5 19A5.5 5.5 0 0 0 22 13.5a5 5 0 0 0-4-4.9 7 7 0 0 0-13.5 1.9A6 6 0 0 0 6 22h11.5z" />
  </svg>
);

const TrashIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const SettingsIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ZapIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ArrowRightIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" /><polygon points="12 5 19 12 12 19" />
  </svg>
);

const SkullIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a8 8 0 0 0-8 8c0 1.5.5 3 1.3 4.2L4 22l6-3 2 1 2-1 6 3-1.3-7.8A8 8 0 0 0 20 10a8 8 0 0 0-8-8z" />
    <circle cx="9" cy="10" r="1" /><circle cx="15" cy="10" r="1" /><path d="M10 14h4" />
  </svg>
);

const XIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SaveIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
  </svg>
);

const PlusIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ShieldIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const GlobeIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ActivityIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const HardDriveIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="8" x="2" y="3" rx="2" /><rect width="20" height="8" x="2" y="13" rx="2" /><line x1="6" y1="7" x2="6.01" y2="7" /><line x1="6" y1="17" x2="6.01" y2="17" /><line x1="10" y1="7" x2="14" y2="7" /><line x1="10" y1="17" x2="14" y2="17" />
  </svg>
);

const PercentIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const FlameIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const ListFilterIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 6h18M7 12h10M10 18h4" />
  </svg>
);

const AlertCircleIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const CheckCircleIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const InfoIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const PlayIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const RotateCcwIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><polyline points="3 3 3 8 8 8" />
  </svg>
);

const ShareIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const UploadIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const DownloadIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const UndoIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
  </svg>
);

const RedoIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 7v6h-6" /><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
  </svg>
);

const UsersIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShieldCheckIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 11 11 13 15 9" />
  </svg>
);

const SearchIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ServerIcon = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="6" x="2" y="3" rx="1" /><rect width="20" height="6" x="2" y="15" rx="1" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

// Helper to generate IDs
const generateId = () => Math.random().toString(36).substring(2, 9);

// Helper to generate MAC addresses
const generateMac = () => {
  return 'XX:XX:XX:XX:XX:XX'.replace(/X/g, () => 
    '0123456789ABCDEF'.charAt(Math.floor(Math.random() * 16))
  );
};

// ==========================================
// 2. ROUTING ENGINE ALGORITHMS
// ==========================================
function ipToLong(ip) {
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some(isNaN)) return 0;
  return ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
}

function longToIp(long) {
  return [
    (long >>> 24) & 255,
    (long >>> 16) & 255,
    (long >>> 8) & 255,
    long & 255
  ].join('.');
}

function ipInSubnet(ip, subnet, mask) {
  if (ip === 'any' || subnet === 'any' || mask === 'any') return true;
  const ipLong = ipToLong(ip);
  const subnetLong = ipToLong(subnet);
  const maskLong = ipToLong(mask);
  return (ipLong & maskLong) === (subnetLong & maskLong);
}

function matchIpFilter(ip, filter) {
  if (filter.toLowerCase() === 'any') return true;
  if (filter.includes('/')) {
    const [sub, bitsStr] = filter.split('/');
    const bits = parseInt(bitsStr, 10);
    const maskLong = (~(2 ** (32 - bits) - 1)) >>> 0;
    return (ipToLong(ip) & maskLong) === (ipToLong(sub) & maskLong);
  }
  return ip === filter;
}

function lookupRoute(destIp, routingTable) {
  let bestRoute = null;
  let bestMaskLength = -1;

  for (const route of routingTable) {
    if (route.destination === '0.0.0.0' && route.mask === '0.0.0.0') {
      if (bestMaskLength < 0) {
        bestRoute = route;
        bestMaskLength = 0;
      }
      continue;
    }

    if (ipInSubnet(destIp, route.destination, route.mask)) {
      const maskLong = ipToLong(route.mask);
      const maskLength = maskLong.toString(2).split('1').length - 1;
      if (maskLength > bestMaskLength) {
        bestRoute = route;
        bestMaskLength = maskLength;
      }
    }
  }

  return bestRoute;
}

function checkFirewall(rules, protocol, srcIp, destIp, destPort) {
  for (const rule of rules) {
    const protoMatch = rule.protocol === protocol;
    const srcMatch = matchIpFilter(srcIp, rule.srcIp);
    const destMatch = matchIpFilter(destIp, rule.destIp);
    const portMatch = rule.port === 'any' || rule.port === destPort;

    if (protoMatch && srcMatch && destMatch && portMatch) {
      return { allowed: rule.action === 'allow', ruleId: rule.id };
    }
  }
  return { allowed: false };
}

function checkRouterACL(acls, protocol, srcIp, destIp) {
  for (const rule of acls) {
    const protoMatch = rule.protocol === 'any' || rule.protocol === protocol;
    const srcMatch = matchIpFilter(srcIp, rule.srcIp);
    const destMatch = matchIpFilter(destIp, rule.destIp);

    if (protoMatch && srcMatch && destMatch) {
      return { allowed: rule.action === 'allow', ruleId: rule.id };
    }
  }
  return { allowed: true };
}

function runDijkstra(devices, cables, startNodeId, endNodeId) {
  const steps = [];
  const adjList = {};
  
  devices.forEach(d => {
    adjList[d.id] = [];
  });

  cables.forEach(c => {
    const hasFrom = devices.some(d => d.id === c.fromDeviceId);
    const hasTo = devices.some(d => d.id === c.toDeviceId);
    if (!hasFrom || !hasTo) return;

    const cost = Math.max(1, Math.round((100 / c.bandwidth) + (c.latency / 10)));
    adjList[c.fromDeviceId].push({ toNode: c.toDeviceId, cost, cableId: c.id });
    adjList[c.toDeviceId].push({ toNode: c.fromDeviceId, cost, cableId: c.id });
  });

  const distances = {};
  const parents = {};
  const visited = new Set();

  devices.forEach(d => {
    distances[d.id] = d.id === startNodeId ? 0 : Infinity;
    parents[d.id] = null;
  });

  let stepCount = 0;

  const getNodesState = () => {
    return devices.map(d => ({
      nodeId: d.id,
      distance: distances[d.id],
      parent: parents[d.id],
      visited: visited.has(d.id),
    }));
  };

  const getPriorityQueue = () => {
    return devices
      .filter(d => !visited.has(d.id) && distances[d.id] !== Infinity)
      .map(d => ({ nodeId: d.id, distance: distances[d.id] }))
      .sort((a, b) => a.distance - b.distance);
  };

  steps.push({
    stepIndex: stepCount++,
    currentNode: null,
    priorityQueue: getPriorityQueue(),
    visitedNodes: Array.from(visited),
    nodesState: getNodesState(),
    explanation: `Initial state: Starting at node ${startNodeId} with cost 0. All other nodes set to cost Infinity.`
  });

  while (true) {
    let minDistance = Infinity;
    let currNode = null;

    devices.forEach(d => {
      if (!visited.has(d.id) && distances[d.id] < minDistance) {
        minDistance = distances[d.id];
        currNode = d.id;
      }
    });

    if (!currNode || minDistance === Infinity) {
      break;
    }

    visited.add(currNode);
    const currDeviceName = devices.find(d => d.id === currNode)?.name || currNode;

    steps.push({
      stepIndex: stepCount++,
      currentNode: currNode,
      priorityQueue: getPriorityQueue(),
      visitedNodes: Array.from(visited),
      nodesState: getNodesState(),
      explanation: `Selected node ${currDeviceName} (shortest tentative distance: ${minDistance}) and marked as Visited.`
    });

    if (currNode === endNodeId) {
      steps.push({
        stepIndex: stepCount++,
        currentNode: currNode,
        priorityQueue: getPriorityQueue(),
        visitedNodes: Array.from(visited),
        nodesState: getNodesState(),
        explanation: `Destination node ${currDeviceName} reached! Shortest path search complete.`
      });
      break;
    }

    const neighbors = adjList[currNode] || [];
    for (const edge of neighbors) {
      if (visited.has(edge.toNode)) continue;

      const alt = distances[currNode] + edge.cost;
      const neighborName = devices.find(d => d.id === edge.toNode)?.name || edge.toNode;

      if (alt < distances[edge.toNode]) {
        const oldDist = distances[edge.toNode];
        distances[edge.toNode] = alt;
        parents[edge.toNode] = currNode;

        steps.push({
          stepIndex: stepCount++,
          currentNode: currNode,
          priorityQueue: getPriorityQueue(),
          visitedNodes: Array.from(visited),
          nodesState: getNodesState(),
          explanation: `Found path to neighbor ${neighborName} with lower cost: ${alt} (previous: ${oldDist === Infinity ? 'Infinity' : oldDist}). Updating distance and parent.`
        });
      } else {
        steps.push({
          stepIndex: stepCount++,
          currentNode: currNode,
          priorityQueue: getPriorityQueue(),
          visitedNodes: Array.from(visited),
          nodesState: getNodesState(),
          explanation: `Checked path to neighbor ${neighborName} with cost: ${alt}. Current shortest cost is ${distances[edge.toNode]}. No update needed.`
        });
      }
    }
  }

  const path = [];
  let curr = endNodeId;

  if (distances[endNodeId] !== Infinity) {
    while (curr !== null) {
      path.unshift(curr);
      curr = parents[curr];
    }
  }

  return { path, steps };
}

function simulateRipUpdate(devices, cables) {
  const updatedTables = {};
  const routers = devices.filter(d => d.type === 'router');

  routers.forEach(router => {
    const localRoutes = [];
    router.interfaces.forEach(iface => {
      if (iface.ip && iface.subnet) {
        const ipLong = ipToLong(iface.ip);
        const maskLong = ipToLong(iface.subnet);
        const subnetAddr = longToIp(ipLong & maskLong);
        
        localRoutes.push({
          destination: subnetAddr,
          mask: iface.subnet,
          gateway: '0.0.0.0',
          interfaceId: iface.id,
          metric: 1,
          protocol: 'local'
        });
      }
    });
    const staticR = router.staticRoutes || [];
    updatedTables[router.id] = [...localRoutes, ...staticR];
  });

  const ripIterations = 3;
  for (let iter = 0; iter < ripIterations; iter++) {
    cables.forEach(c => {
      const devA = devices.find(d => d.id === c.fromDeviceId);
      const devB = devices.find(d => d.id === c.toDeviceId);
      
      if (devA?.type === 'router' && devB?.type === 'router') {
        const routesA = updatedTables[devA.id] || [];
        const routesB = updatedTables[devB.id] || [];
        
        const ifaceA = devA.interfaces.find(i => i.id === c.fromInterfaceId);
        const ifaceB = devB.interfaces.find(i => i.id === c.toInterfaceId);
        
        if (ifaceA?.ip && ifaceB?.ip) {
          routesB.forEach(routeB => {
            if (routeB.metric < 15) {
              const existingRouteIndex = routesA.findIndex(r => r.destination === routeB.destination && r.mask === routeB.mask);
              const nextHopMetric = routeB.metric + 1;
              
              if (existingRouteIndex === -1) {
                routesA.push({
                  destination: routeB.destination,
                  mask: routeB.mask,
                  gateway: ifaceB.ip,
                  interfaceId: ifaceA.id,
                  metric: nextHopMetric,
                  protocol: 'rip'
                });
              } else {
                const existing = routesA[existingRouteIndex];
                if (nextHopMetric < existing.metric || existing.gateway === ifaceB.ip) {
                  routesA[existingRouteIndex] = {
                    ...existing,
                    metric: nextHopMetric,
                    gateway: ifaceB.ip,
                    protocol: 'rip'
                  };
                }
              }
            }
          });

          routesA.forEach(routeA => {
            if (routeA.metric < 15) {
              const existingRouteIndex = routesB.findIndex(r => r.destination === routeA.destination && r.mask === routeA.mask);
              const nextHopMetric = routeA.metric + 1;
              
              if (existingRouteIndex === -1) {
                routesB.push({
                  destination: routeA.destination,
                  mask: routeA.mask,
                  gateway: ifaceA.ip,
                  interfaceId: ifaceB.id,
                  metric: nextHopMetric,
                  protocol: 'rip'
                });
              } else {
                const existing = routesB[existingRouteIndex];
                if (nextHopMetric < existing.metric || existing.gateway === ifaceA.ip) {
                  routesB[existingRouteIndex] = {
                    ...existing,
                    metric: nextHopMetric,
                    gateway: ifaceA.ip,
                    protocol: 'rip'
                  };
                }
              }
            }
          });
        }
      }
    });
  }

  return updatedTables;
}

// ==========================================
// 3. SEEDED INITIAL DEVICE LAYOUTS
// ==========================================
const defaultDevices = () => [
  {
    id: 'pc-1',
    type: 'pc',
    name: 'PC-Office',
    x: 100,
    y: 180,
    interfaces: [
      { id: 'pc-1-eth0', name: 'FastEthernet0', ip: '192.168.1.10', subnet: '255.255.255.0', mac: generateMac(), status: 'up', ipMode: 'static' }
    ],
    gateway: '192.168.1.254',
    dns: '10.0.0.100',
    arpTable: {},
    macTable: {},
    cpuUsage: 10,
    memoryUsage: 20,
  },
  {
    id: 'attacker-1',
    type: 'pc',
    name: 'Attacker-PC',
    x: 100,
    y: 380,
    interfaces: [
      { id: 'atk-eth0', name: 'FastEthernet0', ip: '192.168.1.66', subnet: '255.255.255.0', mac: 'AA:AA:AA:AA:AA:AA', status: 'up', ipMode: 'static' }
    ],
    gateway: '192.168.1.254',
    dns: '10.0.0.100',
    arpTable: {},
    macTable: {},
    isAttacker: true,
    cpuUsage: 8,
    memoryUsage: 16,
  },
  {
    id: 'switch-1',
    type: 'switch',
    name: 'Switch-L2',
    x: 280,
    y: 280,
    interfaces: [
      { id: 'sw-fa0-1', name: 'FastEthernet0/1', ip: '', subnet: '', mac: generateMac(), status: 'up', vlan: 1, vlanMode: 'access' },
      { id: 'sw-fa0-2', name: 'FastEthernet0/2', ip: '', subnet: '', mac: generateMac(), status: 'up', vlan: 1, vlanMode: 'access' },
      { id: 'sw-fa0-3', name: 'FastEthernet0/3', ip: '', subnet: '', mac: generateMac(), status: 'up', vlan: 1, vlanMode: 'access' },
      { id: 'sw-fa0-4', name: 'FastEthernet0/4', ip: '', subnet: '', mac: generateMac(), status: 'up', vlan: 1, vlanMode: 'access' }
    ],
    macTable: {},
    vlans: [1, 10, 20],
    arpTable: {},
    cpuUsage: 5,
    memoryUsage: 15,
  },
  {
    id: 'router-1',
    type: 'router',
    name: 'Router-Gateway',
    x: 480,
    y: 280,
    interfaces: [
      { id: 'r1-eth0', name: 'GigabitEthernet0/0', ip: '192.168.1.254', subnet: '255.255.255.0', mac: 'BB:BB:BB:BB:BB:BB', status: 'up' },
      { id: 'r1-eth1', name: 'GigabitEthernet0/1', ip: '10.0.0.1', subnet: '255.255.255.0', mac: generateMac(), status: 'up' }
    ],
    arpTable: {},
    macTable: {},
    routingTable: [
      { destination: '192.168.1.0', mask: '255.255.255.0', gateway: '0.0.0.0', interfaceId: 'r1-eth0', metric: 0, protocol: 'local' },
      { destination: '10.0.0.0', mask: '255.255.255.0', gateway: '0.0.0.0', interfaceId: 'r1-eth1', metric: 0, protocol: 'local' }
    ],
    staticRoutes: [],
    acls: [],
    ospfEnabled: true,
    ripEnabled: false,
    dhcpPoolEnabled: true,
    dhcpPool: {
      startIp: '192.168.1.100',
      endIp: '192.168.1.150',
      gateway: '192.168.1.254',
      dns: '10.0.0.100'
    },
    cpuUsage: 12,
    memoryUsage: 28,
  },
  {
    id: 'firewall-1',
    type: 'firewall',
    name: 'ASA-Firewall',
    x: 680,
    y: 280,
    interfaces: [
      { id: 'fw-eth0', name: 'Inside', ip: '10.0.0.2', subnet: '255.255.255.0', mac: generateMac(), status: 'up' },
      { id: 'fw-eth1', name: 'Outside', ip: '10.0.0.3', subnet: '255.255.255.0', mac: generateMac(), status: 'up' }
    ],
    arpTable: {},
    macTable: {},
    firewallRules: [
      { id: 'rule-1', action: 'allow', protocol: 'ICMP', srcIp: 'any', destIp: 'any', port: 'any' },
      { id: 'rule-2', action: 'allow', protocol: 'HTTP', srcIp: 'any', destIp: 'any', port: 80 },
      { id: 'rule-3', action: 'allow', protocol: 'HTTPS', srcIp: 'any', destIp: 'any', port: 443 },
      { id: 'rule-4', action: 'allow', protocol: 'DNS', srcIp: 'any', destIp: 'any', port: 53 },
      { id: 'rule-5', action: 'deny', protocol: 'FTP', srcIp: 'any', destIp: 'any', port: 21 },
      { id: 'rule-6', action: 'deny', protocol: 'SSH', srcIp: 'any', destIp: 'any', port: 22 }
    ],
    cpuUsage: 10,
    memoryUsage: 18,
  },
  {
    id: 'server-1',
    type: 'server',
    name: 'Web-Server',
    x: 880,
    y: 280,
    interfaces: [
      { id: 'srv-eth0', name: 'FastEthernet0', ip: '10.0.0.100', subnet: '255.255.255.0', mac: 'CC:CC:CC:CC:CC:CC', status: 'up' }
    ],
    gateway: '10.0.0.1',
    dns: '127.0.0.1',
    arpTable: {},
    macTable: {},
    serverServices: {
      http: true,
      dns: true,
      ftp: true,
      db: true
    },
    dnsEntries: [
      { domain: 'google.com', ip: '10.0.0.100' },
      { domain: 'netsim.local', ip: '10.0.0.100' }
    ],
    cpuUsage: 5,
    memoryUsage: 15,
  }
];

const defaultCables = () => [
  {
    id: 'cable-1',
    type: 'ethernet',
    fromDeviceId: 'pc-1',
    fromInterfaceId: 'pc-1-eth0',
    toDeviceId: 'switch-1',
    toInterfaceId: 'sw-fa0-1',
    speed: 100,
    latency: 50,
    loss: 0,
    bandwidth: 100,
  },
  {
    id: 'cable-5',
    type: 'ethernet',
    fromDeviceId: 'attacker-1',
    fromInterfaceId: 'atk-eth0',
    toDeviceId: 'switch-1',
    toInterfaceId: 'sw-fa0-3',
    speed: 100,
    latency: 50,
    loss: 0,
    bandwidth: 100,
  },
  {
    id: 'cable-2',
    type: 'ethernet',
    fromDeviceId: 'switch-1',
    fromInterfaceId: 'sw-fa0-2',
    toDeviceId: 'router-1',
    toInterfaceId: 'r1-eth0',
    speed: 100,
    latency: 50,
    loss: 0,
    bandwidth: 100,
  },
  {
    id: 'cable-3',
    type: 'serial',
    fromDeviceId: 'router-1',
    fromInterfaceId: 'r1-eth1',
    toDeviceId: 'firewall-1',
    toInterfaceId: 'fw-eth0',
    speed: 10,
    latency: 150,
    loss: 0,
    bandwidth: 10,
  },
  {
    id: 'cable-4',
    type: 'fiber',
    fromDeviceId: 'firewall-1',
    fromInterfaceId: 'fw-eth1',
    toDeviceId: 'server-1',
    toInterfaceId: 'srv-eth0',
    speed: 1000,
    latency: 10,
    loss: 0,
    bandwidth: 1000,
  }
];

// ==========================================
// 4. CENTRAL HOOK STATE MANAGER
// ==========================================
function useNetworkState() {
  const [devices, setDevices] = useState(defaultDevices);
  const [cables, setCables] = useState(defaultCables);
  const [packets, setPackets] = useState([]);
  const [events, setEvents] = useState([]);
  const [activePacketId, setActivePacketId] = useState(null);
  const [activeDeviceId, setActiveDeviceId] = useState(null);

  const [simSpeed, setSimSpeed] = useState(1);
  const [globalPacketLoss, setGlobalPacketLoss] = useState(0);
  const [congestionMultiplier, setCongestionMultiplier] = useState(1);

  const [isDdosActive, setIsDdosActive] = useState(false);
  const [isArpSpoofActive, setIsArpSpoofActive] = useState(false);
  const [isDdosDefenseActive, setIsDdosDefenseActive] = useState(false);
  const [isArpSpoofDefenseActive, setIsArpSpoofDefenseActive] = useState(false);

  const [connectingSource, setConnectingSource] = useState(null);

  const [dijkstraSteps, setDijkstraSteps] = useState([]);
  const [activeDijkstraStepIndex, setActiveDijkstraStepIndex] = useState(-1);
  const [dijkstraStartEnd, setDijkstraStartEnd] = useState(null);

  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const [multiplayerCursors, setMultiplayerCursors] = useState({});
  const [isMultiplayerConnected, setIsMultiplayerConnected] = useState(false);

  useEffect(() => {
    setDevices(prevDevices => 
      prevDevices.map(d => {
        const updatedInterfaces = d.interfaces.map(iface => {
          const cable = cables.find(c => 
            (c.fromDeviceId === d.id && c.fromInterfaceId === iface.id) ||
            (c.toDeviceId === d.id && c.toInterfaceId === iface.id)
          );
          return {
            ...iface,
            connectedCableId: cable ? cable.id : undefined
          };
        });
        return { ...d, interfaces: updatedInterfaces };
      })
    );
  }, [cables]);

  const addEvent = useCallback((message, type = 'info', deviceId) => {
    const newEvent = {
      id: generateId(),
      timestamp: new Date().toLocaleTimeString(),
      deviceId,
      type,
      message
    };
    setEvents(prev => [newEvent, ...prev].slice(0, 150));
  }, []);

  const saveStateToUndo = useCallback((currentDevices, currentCables) => {
    const stateStr = JSON.stringify({ devices: currentDevices, cables: currentCables });
    setUndoStack(prev => [...prev, stateStr]);
    setRedoStack([]); 
  }, []);

  const triggerUndo = () => {
    if (undoStack.length === 0) return;
    const previousStateStr = undoStack[undoStack.length - 1];
    const currentStateStr = JSON.stringify({ devices, cables });

    try {
      const parsed = JSON.parse(previousStateStr);
      setDevices(parsed.devices);
      setCables(parsed.cables);
      setUndoStack(prev => prev.slice(0, -1));
      setRedoStack(prev => [...prev, currentStateStr]);
      addEvent('Undo action performed', 'info');
    } catch (e) {
      console.error('Failed to undo', e);
    }
  };

  const triggerRedo = () => {
    if (redoStack.length === 0) return;
    const nextStateStr = redoStack[redoStack.length - 1];
    const currentStateStr = JSON.stringify({ devices, cables });

    try {
      const parsed = JSON.parse(nextStateStr);
      setDevices(parsed.devices);
      setCables(parsed.cables);
      setRedoStack(prev => prev.slice(0, -1));
      setUndoStack(prev => [...prev, currentStateStr]);
      addEvent('Redo action performed', 'info');
    } catch (e) {
      console.error('Failed to redo', e);
    }
  };

  const addDevice = (type, x, y) => {
    saveStateToUndo(devices, cables);
    const id = `${type}-${generateId()}`;
    const interfaces = [];
    if (type === 'pc' || type === 'server') {
      interfaces.push({ id: `${id}-eth0`, name: 'FastEthernet0', ip: type === 'pc' ? '192.168.1.15' : '192.168.1.20', subnet: '255.255.255.0', mac: generateMac(), status: 'up', ipMode: 'static' });
    } else if (type === 'switch') {
      for (let i = 1; i <= 8; i++) {
        interfaces.push({ id: `${id}-fa0-${i}`, name: `FastEthernet0/${i}`, ip: '', subnet: '', mac: generateMac(), status: 'up', vlan: 1, vlanMode: 'access' });
      }
    } else if (type === 'router') {
      interfaces.push({ id: `${id}-eth0`, name: 'GigabitEthernet0/0', ip: '192.168.2.1', subnet: '255.255.255.0', mac: generateMac(), status: 'up' });
      interfaces.push({ id: `${id}-eth1`, name: 'GigabitEthernet0/1', ip: '10.1.1.1', subnet: '255.255.255.0', mac: generateMac(), status: 'up' });
    } else if (type === 'firewall') {
      interfaces.push({ id: `${id}-eth0`, name: 'Inside', ip: '10.10.1.1', subnet: '255.255.255.0', mac: generateMac(), status: 'up' });
      interfaces.push({ id: `${id}-eth1`, name: 'Outside', ip: '10.10.2.1', subnet: '255.255.255.0', mac: generateMac(), status: 'up' });
    } else if (type === 'cloud') {
      for (let i = 1; i <= 4; i++) {
        interfaces.push({ id: `${id}-ser-${i}`, name: `Serial0/${i}`, ip: '', subnet: '', mac: generateMac(), status: 'up' });
      }
    }

    const defaultDev = {
      id,
      type,
      name: `${type.toUpperCase()}-${id.split('-')[1]}`,
      x,
      y,
      interfaces,
      arpTable: {},
      macTable: {},
      routingTable: type === 'router' ? [
        { destination: '192.168.2.0', mask: '255.255.255.0', gateway: '0.0.0.0', interfaceId: `${id}-eth0`, metric: 0, protocol: 'local' },
        { destination: '10.1.1.0', mask: '255.255.255.0', gateway: '0.0.0.0', interfaceId: `${id}-eth1`, metric: 0, protocol: 'local' }
      ] : [],
      staticRoutes: [],
      acls: type === 'router' ? [] : undefined,
      firewallRules: type === 'firewall' ? [
        { id: generateId(), action: 'allow', protocol: 'ICMP', srcIp: 'any', destIp: 'any', port: 'any' },
        { id: generateId(), action: 'allow', protocol: 'HTTP', srcIp: 'any', destIp: 'any', port: 80 }
      ] : undefined,
      serverServices: type === 'server' ? { http: true, dns: false, ftp: false, db: false } : undefined,
      dnsEntries: type === 'server' ? [] : undefined,
      dhcpPoolEnabled: type === 'router' ? false : undefined,
      cpuUsage: 10,
      memoryUsage: 15,
    };

    setDevices(prev => [...prev, defaultDev]);
    addEvent(`Added device ${defaultDev.name}`, 'info', id);
  };

  const deleteDevice = (id) => {
    saveStateToUndo(devices, cables);
    setDevices(prev => prev.filter(d => d.id !== id));
    setCables(prev => prev.filter(c => c.fromDeviceId !== id && c.toDeviceId !== id));
    addEvent(`Removed device`, 'warning');
    if (activeDeviceId === id) setActiveDeviceId(null);
  };

  const updateDeviceConfig = (id, updates) => {
    saveStateToUndo(devices, cables);
    setDevices(prev => prev.map(d => {
      if (d.id === id) {
        const merged = { ...d, ...updates };
        if (updates.interfaces) {
          merged.interfaces = updates.interfaces.map(iface => {
            const cable = cables.find(c => 
              (c.fromDeviceId === id && c.fromInterfaceId === iface.id) ||
              (c.toDeviceId === id && c.toInterfaceId === iface.id)
            );
            return {
              ...iface,
              connectedCableId: cable ? cable.id : undefined
            };
          });
        }
        return merged;
      }
      return d;
    }));
    addEvent(`Configured device parameters`, 'success', id);
  };

  const startConnecting = (deviceId, interfaceId) => {
    const dev = devices.find(d => d.id === deviceId);
    const iface = dev?.interfaces.find(i => i.id === interfaceId);
    if (iface?.connectedCableId) {
      addEvent(`Port ${iface.name} is already connected!`, 'error', deviceId);
      return;
    }
    setConnectingSource({ deviceId, interfaceId });
  };

  const completeConnecting = (destDeviceId, destInterfaceId) => {
    if (!connectingSource) return;
    if (connectingSource.deviceId === destDeviceId) {
      setConnectingSource(null);
      return;
    }

    const sourceDev = devices.find(d => d.id === connectingSource.deviceId);
    const destDev = devices.find(d => d.id === destDeviceId);
    const sourceIface = sourceDev?.interfaces.find(i => i.id === connectingSource.interfaceId);
    const destIface = destDev?.interfaces.find(i => i.id === destInterfaceId);

    if (!sourceIface || !destIface) {
      setConnectingSource(null);
      return;
    }

    if (destIface.connectedCableId) {
      addEvent(`Destination port ${destIface.name} is already connected!`, 'error', destDeviceId);
      setConnectingSource(null);
      return;
    }

    let cableType = 'ethernet';
    if (sourceDev?.type === 'router' && destDev?.type === 'router') {
      cableType = 'serial';
    } else if (sourceDev?.type === 'server' || destDev?.type === 'server') {
      cableType = 'fiber';
    }

    saveStateToUndo(devices, cables);

    const newCable = {
      id: `cable-${generateId()}`,
      type: cableType,
      fromDeviceId: connectingSource.deviceId,
      fromInterfaceId: connectingSource.interfaceId,
      toDeviceId: destDeviceId,
      toInterfaceId: destInterfaceId,
      speed: cableType === 'fiber' ? 1000 : cableType === 'serial' ? 10 : 100,
      latency: cableType === 'fiber' ? 10 : cableType === 'serial' ? 150 : 50,
      loss: 0,
      bandwidth: cableType === 'fiber' ? 1000 : cableType === 'serial' ? 10 : 100
    };

    setCables(prev => [...prev, newCable]);
    addEvent(`Connected ${sourceDev?.name} to ${destDev?.name} via ${newCable.type} link`, 'success');
    setConnectingSource(null);
  };

  const deleteCable = (cableId) => {
    saveStateToUndo(devices, cables);
    setCables(prev => prev.filter(c => c.id !== cableId));
    addEvent(`Disconnected cable link`, 'warning');
  };

  const triggerDhcpRequest = (deviceId, interfaceId) => {
    const dev = devices.find(d => d.id === deviceId);
    if (!dev) return;
    const iface = dev.interfaces.find(i => i.id === interfaceId);
    if (!iface) return;

    setDevices(prev => 
      prev.map(d => {
        if (d.id === deviceId) {
          const updatedIfaces = d.interfaces.map(i => {
            if (i.id === interfaceId) {
              return { ...i, ipMode: 'dhcp', ip: '', subnet: '', status: 'up' };
            }
            return i;
          });
          return { ...d, interfaces: updatedIfaces, gateway: '', dns: '' };
        }
        return d;
      })
    );

    addEvent(`${dev.name} interface ${iface.name} set to DHCP Mode. Broadcasting DISCOVER...`, 'info', deviceId);

    const routerNode = devices.find(d => d.type === 'router' && d.dhcpPoolEnabled);
    if (!routerNode) {
      addEvent(`DHCP Request Failed: No DHCP-enabled Router server on link.`, 'error', deviceId);
      return;
    }

    const pathSolver = runDijkstra(devices, cables, deviceId, routerNode.id);
    if (pathSolver.path.length === 0) {
      addEvent(`DHCP Discovery Failed: No path to Router server.`, 'error', deviceId);
      return;
    }

    const osiStep = {
      deviceId: dev.id,
      deviceName: dev.name,
      action: 'DHCP Discover broadcast generated',
      type: 'out',
      layers: {
        7: { layer: 7, name: 'Application', details: ['DHCP DISCOVER', 'Transaction ID: 0x3f5c9e', 'Client IP Request: 0.0.0.0'] },
        4: { layer: 4, name: 'Transport', details: ['UDP Protocol', 'Src Port: 68 (BOOTPC)', 'Dest Port: 67 (BOOTPS)'] },
        3: { layer: 3, name: 'Network', details: ['Src IP: 0.0.0.0', 'Dest IP: 255.255.255.255', 'TTL: 64'] },
        2: { layer: 2, name: 'Data Link', details: [`Src MAC: ${iface.mac}`, 'Dest MAC: FF:FF:FF:FF:FF:FF (Broadcast)'] },
        1: { layer: 1, name: 'Physical', details: [`Outport: ${iface.name}`] }
      }
    };

    const newPacket = {
      id: `dhcp-disc-${generateId()}`,
      protocol: 'DHCP',
      srcIp: '0.0.0.0',
      destIp: '255.255.255.255',
      srcMac: iface.mac,
      destMac: 'FF:FF:FF:FF:FF:FF',
      srcPort: 68,
      destPort: 67,
      payload: `DHCP_DISCOVER|${deviceId}|${interfaceId}`,
      status: 'created',
      color: '#C58A3E',
      path: [dev.id],
      routeQueue: pathSolver.path.slice(1),
      osiTrace: [osiStep]
    };

    setPackets(prev => [...prev, newPacket]);
    setActivePacketId(newPacket.id);
  };

  const runVisualDijkstra = (startId, endId) => {
    const { steps } = runDijkstra(devices, cables, startId, endId);
    if (steps.length > 0) {
      setDijkstraSteps(steps);
      setActiveDijkstraStepIndex(0);
      setDijkstraStartEnd({ start: startId, end: endId });
      addEvent(`OSPF Dijkstra calculations triggered from ${devices.find(d=>d.id===startId)?.name} to ${devices.find(d=>d.id===endId)?.name}`, 'info');
    }
  };

  const advanceDijkstraStep = () => {
    if (activeDijkstraStepIndex < dijkstraSteps.length - 1) {
      setActiveDijkstraStepIndex(prev => prev + 1);
    }
  };

  const clearDijkstraVisualization = () => {
    setDijkstraSteps([]);
    setActiveDijkstraStepIndex(-1);
    setDijkstraStartEnd(null);
  };

  const createPacket = (srcDeviceId, destIp, protocol, payload = '') => {
    const srcDev = devices.find(d => d.id === srcDeviceId);
    if (!srcDev) return;

    const srcIface = srcDev.interfaces[0];
    const srcIp = srcIface.ip;

    if (!srcIp) {
      addEvent(`${srcDev.name} has no IP address configured!`, 'error', srcDeviceId);
      return;
    }

    addEvent(`Creating ${protocol} packet at ${srcDev.name} -> Target IP: ${destIp}`, 'info', srcDeviceId);

    let destDev = devices.find(d => d.interfaces.some(i => i.ip === destIp));
    let nextHopIp = destIp;
    if (!destDev) {
      if (protocol === 'DNS' || protocol === 'HTTP') {
        const dnsServer = devices.find(d => d.type === 'server' && d.serverServices?.dns);
        const matchEntry = dnsServer?.dnsEntries?.find(e => e.domain === destIp);
        if (matchEntry) {
          destDev = devices.find(d => d.interfaces.some(i => i.ip === matchEntry.ip));
          if (destDev) nextHopIp = matchEntry.ip;
        }
      }
    }

    let pathNodes = [];
    const isPC1 = srcDeviceId === 'pc-1';
    
    if (isArpSpoofActive && isPC1 && !isArpSpoofDefenseActive) {
      const solverAttacker = runDijkstra(devices, cables, srcDeviceId, 'attacker-1');
      const solverServer = runDijkstra(devices, cables, 'attacker-1', destDev?.id || 'server-1');
      if (solverAttacker.path.length > 0 && solverServer.path.length > 0) {
        pathNodes = [...solverAttacker.path, ...solverServer.path.slice(1)];
      }
    }

    if (pathNodes.length === 0) {
      if (destDev) {
        const solver = runDijkstra(devices, cables, srcDeviceId, destDev.id);
        pathNodes = solver.path;
      } else {
        const routerNode = devices.find(d => d.type === 'router');
        if (routerNode) {
          const solver = runDijkstra(devices, cables, srcDeviceId, routerNode.id);
          pathNodes = solver.path;
        }
      }
    }

    if (pathNodes.length === 0) {
      addEvent(`Routing error: No path from ${srcDev.name} to destination IP ${destIp}`, 'error', srcDeviceId);
      return;
    }

    const gatewayIp = srcDev.gateway || '';
    const resolvedMac = (isArpSpoofActive && !isArpSpoofDefenseActive && gatewayIp === '192.168.1.254') 
      ? 'AA:AA:AA:AA:AA:AA' 
      : 'BB:BB:BB:BB:BB:BB';

    const osiStep = {
      deviceId: srcDev.id,
      deviceName: srcDev.name,
      action: 'Encapsulating protocol request into transport segment and network packet',
      type: 'out',
      layers: {
        7: { layer: 7, name: 'Application', details: [`Protocol: ${protocol}`, `Payload: ${payload || 'Data request'}`] },
        4: { layer: 4, name: 'Transport', details: [protocol === 'HTTP' || protocol === 'HTTPS' || protocol === 'FTP' || protocol === 'SSH' || protocol === 'TCP' ? 'TCP Port Segment' : 'UDP Datagram', `Src Port: ${Math.floor(Math.random() * 50000) + 1024}`, `Dest Port: ${protocol === 'HTTP' ? 80 : protocol === 'HTTPS' ? 443 : protocol === 'DNS' ? 53 : protocol === 'FTP' ? 21 : protocol === 'SSH' ? 22 : 80}`] },
        3: { layer: 3, name: 'Network', details: [`Src IP: ${srcIp}`, `Dest IP: ${nextHopIp}`, 'TTL: 128'] },
        2: { layer: 2, name: 'Data Link', details: [`Src MAC: ${srcIface.mac}`, `Dest MAC: ${resolvedMac} (ARP Cached)`] },
        1: { layer: 1, name: 'Physical', details: [`Outport: ${srcIface.name}`, `Link Media: Cable`] }
      }
    };

    let packetColor = '#5485A3'; 
    if (protocol === 'HTTP') packetColor = '#5485A3'; 
    if (protocol === 'HTTPS') packetColor = '#5485A3'; 
    if (protocol === 'DNS') packetColor = '#C58A3E'; 
    if (protocol === 'FTP') packetColor = '#C58A3E'; 
    if (protocol === 'SSH') packetColor = '#C58A3E'; 
    if (protocol === 'TCP') packetColor = '#5485A3'; 
    if (protocol === 'UDP') packetColor = '#5485A3'; 

    const newPacket = {
      id: `pkt-${generateId()}`,
      protocol,
      srcIp,
      destIp: nextHopIp,
      srcMac: srcIface.mac,
      destMac: resolvedMac,
      srcPort: 49152,
      destPort: protocol === 'HTTP' ? 80 : protocol === 'HTTPS' ? 443 : protocol === 'DNS' ? 53 : 80,
      payload,
      status: 'created',
      color: packetColor,
      path: [srcDev.id],
      routeQueue: pathNodes.slice(1),
      osiTrace: [osiStep]
    };

    setPackets(prev => [...prev, newPacket]);
    setActivePacketId(newPacket.id);
  };

  useEffect(() => {
    let tickCount = 0;
    let lastTime = Date.now();
    
    const interval = setInterval(() => {
      const now = Date.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      tickCount++;

      if (isDdosActive && tickCount % 8 === 0) {
        for (let i = 0; i < 3; i++) {
          const pathSolver = runDijkstra(devices, cables, 'attacker-1', 'server-1');
          if (pathSolver.path.length > 0) {
            const osiBurst = {
              deviceId: 'attacker-1',
              deviceName: 'Attacker-PC',
              action: 'DDoS Zombie Flood packet generated',
              type: 'out',
              layers: {
                7: { layer: 7, name: 'Application', details: ['HTTP GET /index.html', 'DDoS Packet Flood'] },
                4: { layer: 4, name: 'Transport', details: ['TCP connection request', 'Src Port: 59902', 'Dest Port: 80'] },
                3: { layer: 3, name: 'Network', details: ['Src IP: 192.168.1.66', 'Dest IP: 10.0.0.100', 'TTL: 64'] },
                2: { layer: 2, name: 'Data Link', details: ['Src MAC: AA:AA:AA:AA:AA:AA', 'Dest MAC: BB:BB:BB:BB:BB:BB'] },
                1: { layer: 1, name: 'Physical', details: ['Outport: FastEthernet0'] }
              }
            };

            const ddosPacket = {
              id: `ddos-${generateId()}`,
              protocol: 'HTTP',
              srcIp: '192.168.1.66',
              destIp: '10.0.0.100',
              srcMac: 'AA:AA:AA:AA:AA:AA',
              destMac: 'BB:BB:BB:BB:BB:BB',
              srcPort: 59902,
              destPort: 80,
              payload: 'DDoS_FLOOD_ATTACK_HTTP_REQ',
              status: 'created',
              color: '#D45D43', 
              path: ['attacker-1'],
              routeQueue: pathSolver.path.slice(1),
              osiTrace: [osiBurst]
            };
            setPackets(prev => [...prev, ddosPacket]);
          }
        }
        addEvent('DDoS Attack: Rogue PC flooding server with HTTP requests!', 'warning', 'attacker-1');
      }

      if (isArpSpoofActive && tickCount % 12 === 0) {
        if (isArpSpoofDefenseActive) {
          addEvent('Switch DAI: Detected and blocked rogue ARP reply mapping from AA:AA:AA:AA:AA:AA', 'success', 'switch-1');
          setDevices(prev => 
            prev.map(d => {
              if (d.id === 'pc-1') {
                return {
                  ...d,
                  arpTable: { ...d.arpTable, '192.168.1.254': 'BB:BB:BB:BB:BB:BB' }
                };
              }
              return d;
            })
          );
        } else {
          addEvent('ARP Spoof: Attacker sent fake ARP reply claiming 192.168.1.254 is at AA:AA:AA:AA:AA:AA!', 'warning', 'attacker-1');
          setDevices(prev => 
            prev.map(d => {
              if (d.id === 'pc-1') {
                return {
                  ...d,
                  arpTable: { ...d.arpTable, '192.168.1.254': 'AA:AA:AA:AA:AA:AA' }
                };
              }
              return d;
            })
          );
        }
      }

      setDevices(prev => 
        prev.map(d => {
          const trafficModifier = packets.filter(p => p.status === 'in-transit' && (p.currentFromNodeId === d.id || p.currentToNodeId === d.id)).length;
          let cpuBase = d.cpuUsage;
          let memBase = d.memoryUsage;

          if (d.id === 'server-1' && isDdosActive) {
            cpuBase = isDdosDefenseActive ? 15 : 98;
            memBase = isDdosDefenseActive ? 22 : 88;
          } else {
            cpuBase += (Math.random() - 0.5) * 4 + (trafficModifier * 8);
            memBase += (Math.random() - 0.5) * 2 + (trafficModifier * 3);
          }

          return {
            ...d,
            cpuUsage: Math.max(5, Math.min(100, Math.round(cpuBase))),
            memoryUsage: Math.max(10, Math.min(95, Math.round(memBase)))
          };
        })
      );

      if (isMultiplayerConnected) {
        setMultiplayerCursors(prev => {
          const updated = { ...prev };
          Object.keys(updated).forEach(k => {
            updated[k] = {
              ...updated[k],
              x: Math.max(50, Math.min(1000, updated[k].x + (Math.random() - 0.5) * 20)),
              y: Math.max(50, Math.min(600, updated[k].y + (Math.random() - 0.5) * 20)),
            };
          });
          return updated;
        });
      }

      setPackets(prevPackets => {
        if (prevPackets.length === 0) return prevPackets;

        const updated = prevPackets.map(pkt => {
          if (pkt.status === 'created') {
            const currentDevId = pkt.path[pkt.path.length - 1];
            const nextDevId = pkt.routeQueue[0];

            if (!nextDevId) {
              return { ...pkt, status: 'dropped', dropReason: 'No egress routing interface' };
            }

            const cable = cables.find(c => 
              (c.fromDeviceId === currentDevId && c.toDeviceId === nextDevId) ||
              (c.fromDeviceId === nextDevId && c.toDeviceId === currentDevId)
            );

            if (!cable) {
              addEvent(`Physical link broken between ${currentDevId} and ${nextDevId}`, 'error', currentDevId);
              return { ...pkt, status: 'dropped', dropReason: 'Link disconnected' };
            }

            const lossPercent = Math.max(pkt.currentCableId ? 0 : globalPacketLoss, cable.loss);
            if (Math.random() * 100 < lossPercent) {
              addEvent(`Packet ${pkt.id} dropped on ${cable.type} cable (loss simulated)`, 'warning');
              return { ...pkt, status: 'dropped', dropReason: 'Simulated packet loss' };
            }

            const fromIface = devices.find(d => d.id === currentDevId)?.interfaces.find(i => i.connectedCableId === cable.id);
            const toIface = devices.find(d => d.id === nextDevId)?.interfaces.find(i => i.connectedCableId === cable.id);

            const nextStep = {
              deviceId: nextDevId,
              deviceName: devices.find(d => d.id === nextDevId)?.name || nextDevId,
              action: `Receiving frame on port ${toIface?.name || 'eth'}`,
              type: 'in',
              layers: {
                1: { layer: 1, name: 'Physical', details: [`Inport: ${toIface?.name || 'Port'}`, `Rx Bitstream: Active`] },
                2: { layer: 2, name: 'Data Link', details: [`Src MAC: ${fromIface?.mac || 'Unknown'}`, `Dest MAC: ${toIface?.mac || 'Unknown'}`] }
              }
            };

            return {
              ...pkt,
              status: 'in-transit',
              currentCableId: cable.id,
              currentFromNodeId: currentDevId,
              currentToNodeId: nextDevId,
              currentProgress: 0,
              osiTrace: [...pkt.osiTrace, nextStep]
            };
          }

          if (pkt.status === 'in-transit') {
            const cable = cables.find(c => c.id === pkt.currentCableId);
            if (!cable) {
              return { ...pkt, status: 'dropped', dropReason: 'Cable disconnected' };
            }

            const latencyBase = cable.latency || 50;
            const progressDelta = (delta / (latencyBase / 1000)) * 100 * simSpeed * (1 / congestionMultiplier);
            const nextProgress = (pkt.currentProgress || 0) + progressDelta;

            if (nextProgress >= 100) {
              return {
                ...pkt,
                currentProgress: 100,
                status: 'processing'
              };
            }

            return {
              ...pkt,
              currentProgress: nextProgress
            };
          }

          if (pkt.status === 'processing') {
            const nodeVal = pkt.currentToNodeId;
            const device = devices.find(d => d.id === nodeVal);

            if (!device) {
              return { ...pkt, status: 'dropped', dropReason: 'Target device offline' };
            }

            const updatedPath = [...pkt.path, nodeVal];
            const updatedQueue = pkt.routeQueue.slice(1);

            if (device.id === 'attacker-1' && pkt.payload !== 'DDoS_FLOOD_ATTACK_HTTP_REQ') {
              addEvent(`MITM Alert: Attacker intercepted packet ${pkt.protocol} payload data! Sniffing...`, 'warning', device.id);
              
              const latestTrace = pkt.osiTrace[pkt.osiTrace.length - 1];
              if (latestTrace) {
                latestTrace.action = 'Attacker intercepted and sniffed payload data';
                latestTrace.layers[7] = {
                  layer: 7,
                  name: 'Application',
                  details: ['MITM interception active', `Interception data: ${pkt.payload || 'None'}`, 'Status: Forwarding to Gateway']
                };
              }

              const pathRouter = runDijkstra(devices, cables, 'attacker-1', 'router-1');
              if (pathRouter.path.length > 0) {
                return {
                  ...pkt,
                  path: updatedPath,
                  routeQueue: [...pathRouter.path.slice(1), ...updatedQueue],
                  status: 'created'
                };
              }
            }

            if (device.type === 'switch') {
              const ingressCable = cables.find(c => c.id === pkt.currentCableId);
              const ingressIface = device.interfaces.find(i => i.connectedCableId === ingressCable?.id);

              if (ingressIface) {
                device.macTable[pkt.srcMac] = { portId: ingressIface.id, learnedAt: Date.now() };
                addEvent(`Switch ${device.name} learned MAC address ${pkt.srcMac} on port ${ingressIface.name}`, 'info', device.id);
              }

              if (updatedQueue.length === 0) {
                addEvent(`Switch ${device.name} reached, packet destination met`, 'success', device.id);
                return { ...pkt, path: updatedPath, routeQueue: updatedQueue, status: 'delivered' };
              }

              return {
                ...pkt,
                path: updatedPath,
                routeQueue: updatedQueue,
                status: 'created'
              };
            }

            if (device.type === 'router') {
              addEvent(`Router ${device.name} inspecting Layer 3 headers...`, 'info', device.id);

              if (pkt.protocol === 'DHCP' && pkt.payload.startsWith('DHCP_DISCOVER') && device.dhcpPoolEnabled) {
                const parts = pkt.payload.split('|');
                const clientDevId = parts[1];
                const clientIfaceId = parts[2];
                
                addEvent(`Router ${device.name} received DHCP DISCOVER. Formulating OFFER...`, 'info', device.id);
                const pool = device.dhcpPool || { startIp: '192.168.1.100', endIp: '192.168.1.150', gateway: '192.168.1.254', dns: '10.0.0.100' };
                const offeredIp = pool.startIp;

                setTimeout(() => {
                  const pathSolver = runDijkstra(devices, cables, device.id, clientDevId);
                  if (pathSolver.path.length > 0) {
                    const osiOffer = {
                      deviceId: device.id,
                      deviceName: device.name,
                      action: 'DHCP Offer unicast generated',
                      type: 'out',
                      layers: {
                        7: { layer: 7, name: 'Application', details: ['DHCP OFFER', `Your IP: ${offeredIp}`, 'Subnet Mask: 255.255.255.0', `Gateway: ${pool.gateway}`, `DNS: ${pool.dns}`] },
                        4: { layer: 4, name: 'Transport', details: ['UDP Protocol', 'Src Port: 67 (BOOTPS)', 'Dest Port: 68 (BOOTPC)'] },
                        3: { layer: 3, name: 'Network', details: [`Src IP: ${device.interfaces[0].ip}`, `Dest IP: 255.255.255.255`, 'TTL: 64'] },
                        2: { layer: 2, name: 'Data Link', details: [`Src MAC: ${device.interfaces[0].mac}`, `Dest MAC: ${pkt.srcMac}`] },
                        1: { layer: 1, name: 'Physical', details: [`Outport: ${device.interfaces[0].name}`] }
                      }
                    };

                    const offerPacket = {
                      id: `dhcp-off-${generateId()}`,
                      protocol: 'DHCP',
                      srcIp: device.interfaces[0].ip,
                      destIp: '255.255.255.255',
                      srcMac: device.interfaces[0].mac,
                      destMac: pkt.srcMac,
                      srcPort: 67,
                      destPort: 68,
                      payload: `DHCP_OFFER|${clientDevId}|${clientIfaceId}|${offeredIp}|${pool.gateway}|${pool.dns}`,
                      status: 'created',
                      color: '#C58A3E',
                      path: [device.id],
                      routeQueue: pathSolver.path.slice(1),
                      osiTrace: [osiOffer]
                    };
                    setPackets(prev => [...prev, offerPacket]);
                  }
                }, 1200);

                return { ...pkt, path: updatedPath, routeQueue: updatedQueue, status: 'delivered' };
              }

              if (pkt.protocol === 'DHCP' && pkt.payload.startsWith('DHCP_REQUEST') && device.dhcpPoolEnabled) {
                const parts = pkt.payload.split('|');
                const clientDevId = parts[1];
                const clientIfaceId = parts[2];
                const offeredIp = parts[3];
                const gw = parts[4];
                const dnsVal = parts[5];

                addEvent(`Router ${device.name} received DHCP REQUEST. Confirming lease with ACK...`, 'info', device.id);

                setTimeout(() => {
                  const pathSolver = runDijkstra(devices, cables, device.id, clientDevId);
                  if (pathSolver.path.length > 0) {
                    const osiAck = {
                      deviceId: device.id,
                      deviceName: device.name,
                      action: 'DHCP Ack unicast generated',
                      type: 'out',
                      layers: {
                        7: { layer: 7, name: 'Application', details: ['DHCP ACK', `Leased IP: ${offeredIp}`, 'Lease: 86400s', `Gateway: ${gw}`, `DNS: ${dnsVal}`] },
                        4: { layer: 4, name: 'Transport', details: ['UDP Protocol', 'Src Port: 67 (BOOTPS)', 'Dest Port: 68 (BOOTPC)'] },
                        3: { layer: 3, name: 'Network', details: [`Src IP: ${device.interfaces[0].ip}`, `Dest IP: 255.255.255.255`, 'TTL: 64'] },
                        2: { layer: 2, name: 'Data Link', details: [`Src MAC: ${device.interfaces[0].mac}`, `Dest MAC: ${pkt.srcMac}`] },
                        1: { layer: 1, name: 'Physical', details: [`Outport: ${device.interfaces[0].name}`] }
                      }
                    };

                    const ackPacket = {
                      id: `dhcp-ack-${generateId()}`,
                      protocol: 'DHCP',
                      srcIp: device.interfaces[0].ip,
                      destIp: '255.255.255.255',
                      srcMac: device.interfaces[0].mac,
                      destMac: pkt.srcMac,
                      srcPort: 67,
                      destPort: 68,
                      payload: `DHCP_ACK|${clientDevId}|${clientIfaceId}|${offeredIp}|${gw}|${dnsVal}`,
                      status: 'created',
                      color: '#C58A3E',
                      path: [device.id],
                      routeQueue: pathSolver.path.slice(1),
                      osiTrace: [osiAck]
                    };
                    setPackets(prev => [...prev, ackPacket]);
                  }
                }, 1200);

                return { ...pkt, path: updatedPath, routeQueue: updatedQueue, status: 'delivered' };
              }

              if (device.acls && device.acls.length > 0) {
                const aclCheck = checkRouterACL(device.acls, pkt.protocol, pkt.srcIp, pkt.destIp);
                if (!aclCheck.allowed) {
                  addEvent(`Router ACL dropped packet: Rule Blocked`, 'error', device.id);
                  return { ...pkt, path: updatedPath, status: 'rejected', dropReason: 'Blocked by Router ACL' };
                }
              }

              const egressRoute = lookupRoute(pkt.destIp, device.routingTable || []);
              const latestTrace = pkt.osiTrace[pkt.osiTrace.length - 1];
              if (latestTrace) {
                latestTrace.action = `Router lookup destination IP ${pkt.destIp}`;
                latestTrace.layers[3] = {
                  layer: 3,
                  name: 'Network',
                  details: [
                    `TTL: 127 (Decremented)`,
                    `Route Match: ${egressRoute ? `${egressRoute.destination}/${egressRoute.mask} via Port ${egressRoute.interfaceId}` : 'No route found'}`,
                    `Gateway Hop: ${egressRoute?.gateway || 'Direct'}`
                  ]
                };
              }

              if (updatedQueue.length === 0) {
                if (device.interfaces.some(i => i.ip === pkt.destIp)) {
                  addEvent(`Packet delivered to router interface Gateway`, 'success', device.id);
                  return { ...pkt, path: updatedPath, routeQueue: updatedQueue, status: 'delivered' };
                }
                return { ...pkt, path: updatedPath, status: 'dropped', dropReason: 'No egress route found' };
              }

              return {
                ...pkt,
                path: updatedPath,
                routeQueue: updatedQueue,
                status: 'created'
              };
            }

            if (device.type === 'firewall') {
              addEvent(`Firewall ${device.name} checking security policies...`, 'info', device.id);
              
              if (isDdosActive && isDdosDefenseActive && pkt.payload === 'DDoS_FLOOD_ATTACK_HTTP_REQ') {
                addEvent(`Firewall: DDoS Defense rate limiter BLOCKED HTTP flood from Attacker!`, 'warning', device.id);
                return { ...pkt, path: updatedPath, status: 'rejected', dropReason: 'Rate limit blocked' };
              }

              const firewallCheck = checkFirewall(device.firewallRules || [], pkt.protocol, pkt.srcIp, pkt.destIp, pkt.destPort);
              const latestTrace = pkt.osiTrace[pkt.osiTrace.length - 1];
              if (latestTrace) {
                latestTrace.action = `Firewall security inspection`;
                latestTrace.layers[4] = {
                  layer: 4,
                  name: 'Transport',
                  details: [
                    `Protocol: ${pkt.protocol}`,
                    `Inspect Port: ${pkt.destPort}`,
                    `Rule Result: ${firewallCheck.allowed ? 'ALLOWED' : 'BLOCKED'}`
                  ]
                };
              }

              if (!firewallCheck.allowed) {
                addEvent(`Firewall policy BLOCKED ${pkt.protocol} traffic from ${pkt.srcIp} to ${pkt.destIp}`, 'error', device.id);
                return { ...pkt, path: updatedPath, status: 'rejected', dropReason: 'Blocked by Firewall Policy' };
              }

              addEvent(`Firewall policy ALLOWED ${pkt.protocol} traffic`, 'success', device.id);

              if (updatedQueue.length === 0) {
                return { ...pkt, path: updatedPath, routeQueue: updatedQueue, status: 'delivered' };
              }

              return {
                ...pkt,
                path: updatedPath,
                routeQueue: updatedQueue,
                status: 'created'
              };
            }

            if (device.type === 'server') {
              if (device.interfaces.some(i => i.ip === pkt.destIp)) {
                if (isDdosActive && !isDdosDefenseActive && pkt.payload !== 'DDoS_FLOOD_ATTACK_HTTP_REQ') {
                  addEvent(`Web-Server exhausted under DDoS flood! Legitimate request dropped.`, 'error', device.id);
                  return { ...pkt, path: updatedPath, status: 'dropped', dropReason: 'Server resource exhausted' };
                }

                if (pkt.payload === 'DDoS_FLOOD_ATTACK_HTTP_REQ') {
                  return { ...pkt, path: updatedPath, routeQueue: updatedQueue, status: 'delivered' };
                }

                const httpEnabled = device.serverServices?.http;
                const dnsEnabled = device.serverServices?.dns;

                const latestTrace = pkt.osiTrace[pkt.osiTrace.length - 1];
                if (latestTrace) {
                  latestTrace.action = `Server processing request`;
                  latestTrace.layers[7] = {
                    layer: 7,
                    name: 'Application',
                    details: [
                      `Service: ${pkt.protocol}`,
                      `Status: Toggled ${pkt.protocol === 'HTTP' ? (httpEnabled ? 'ON' : 'OFF') : (dnsEnabled ? 'ON' : 'OFF')}`
                    ]
                  };
                }

                if (pkt.protocol === 'HTTP' && !httpEnabled) {
                  addEvent(`Web service on ${device.name} is disabled! Packet dropped.`, 'error', device.id);
                  return { ...pkt, path: updatedPath, status: 'dropped', dropReason: 'HTTP service offline' };
                }
                if (pkt.protocol === 'DNS' && !dnsEnabled) {
                  addEvent(`DNS service on ${device.name} is disabled! Packet dropped.`, 'error', device.id);
                  return { ...pkt, path: updatedPath, status: 'dropped', dropReason: 'DNS service offline' };
                }

                addEvent(`Server ${device.name} processed ${pkt.protocol} request. Success!`, 'success', device.id);

                if (!pkt.payload.includes('RESPONSE')) {
                  setTimeout(() => {
                    createPacket(device.id, pkt.srcIp, pkt.protocol, `RESPONSE - Data payload for request ${pkt.id}`);
                  }, 1200);
                }

                return { ...pkt, path: updatedPath, routeQueue: updatedQueue, status: 'delivered' };
              }
            }

            if (pkt.protocol === 'DHCP' && pkt.payload.startsWith('DHCP_OFFER')) {
              const parts = pkt.payload.split('|');
              const clientDevId = parts[1];
              const clientIfaceId = parts[2];
              const offeredIp = parts[3];
              const gw = parts[4];
              const dnsVal = parts[5];

              if (device.id === clientDevId) {
                addEvent(`${device.name} received DHCP OFFER of IP ${offeredIp}. Sending REQUEST...`, 'info', device.id);

                const routerNode = devices.find(d => d.type === 'router' && d.dhcpPoolEnabled);
                if (routerNode) {
                  setTimeout(() => {
                    const pathSolver = runDijkstra(devices, cables, device.id, routerNode.id);
                    if (pathSolver.path.length > 0) {
                      const osiRequest = {
                        deviceId: device.id,
                        deviceName: device.name,
                        action: 'DHCP Request generated',
                        type: 'out',
                        layers: {
                          7: { layer: 7, name: 'Application', details: ['DHCP REQUEST', `Requested IP: ${offeredIp}`, `Server IP: ${routerNode.interfaces[0].ip}`] },
                          4: { layer: 4, name: 'Transport', details: ['UDP Protocol', 'Src Port: 68 (BOOTPC)', 'Dest Port: 67 (BOOTPS)'] },
                          3: { layer: 3, name: 'Network', details: ['Src IP: 0.0.0.0', 'Dest IP: 255.255.255.255', 'TTL: 64'] },
                          2: { layer: 2, name: 'Data Link', details: [`Src MAC: ${pkt.destMac}`, 'Dest MAC: FF:FF:FF:FF:FF:FF'] },
                          1: { layer: 1, name: 'Physical', details: [`Outport: ${pkt.osiTrace[pkt.osiTrace.length-1].layers[1].details[0]}`] }
                        }
                      };

                      const reqPacket = {
                        id: `dhcp-req-${generateId()}`,
                        protocol: 'DHCP',
                        srcIp: '0.0.0.0',
                        destIp: '255.255.255.255',
                        srcMac: pkt.destMac,
                        destMac: routerNode.interfaces[0].mac,
                        srcPort: 68,
                        destPort: 67,
                        payload: `DHCP_REQUEST|${clientDevId}|${clientIfaceId}|${offeredIp}|${gw}|${dnsVal}`,
                        status: 'created',
                        color: '#C58A3E',
                        path: [device.id],
                        routeQueue: pathSolver.path.slice(1),
                        osiTrace: [osiRequest]
                      };
                      setPackets(prev => [...prev, reqPacket]);
                    }
                  }, 1200);
                }
              }
              return { ...pkt, path: updatedPath, routeQueue: updatedQueue, status: 'delivered' };
            }

            if (pkt.protocol === 'DHCP' && pkt.payload.startsWith('DHCP_ACK')) {
              const parts = pkt.payload.split('|');
              const clientDevId = parts[1];
              const clientIfaceId = parts[2];
              const offeredIp = parts[3];
              const gw = parts[4];
              const dnsVal = parts[5];

              if (device.id === clientDevId) {
                addEvent(`${device.name} received DHCP ACK. IP configured: ${offeredIp}`, 'success', device.id);
                
                setDevices(prev => 
                  prev.map(d => {
                    if (d.id === clientDevId) {
                      const updatedIfaces = d.interfaces.map(i => {
                        if (i.id === clientIfaceId) {
                          return { ...i, ip: offeredIp, subnet: '255.255.255.0' };
                        }
                        return i;
                      });
                      return { ...d, interfaces: updatedIfaces, gateway: gw, dns: dnsVal };
                    }
                    return d;
                  })
                );
              }
              return { ...pkt, path: updatedPath, routeQueue: updatedQueue, status: 'delivered' };
            }

            addEvent(`Packet successfully delivered to ${device.name}`, 'success', device.id);
            return { ...pkt, path: updatedPath, routeQueue: updatedQueue, status: 'delivered' };
          }

          return pkt;
        });

        return updated;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [devices, cables, simSpeed, globalPacketLoss, congestionMultiplier, packets, isMultiplayerConnected, isDdosActive, isArpSpoofActive, isDdosDefenseActive, isArpSpoofDefenseActive]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setPackets(prev => prev.filter(pkt => {
        if (pkt.status === 'delivered' || pkt.status === 'dropped' || pkt.status === 'rejected') {
          if (activePacketId === pkt.id) return true;
          return false;
        }
        return true;
      }));
    }, 3000);
    return () => clearInterval(timeout);
  }, [activePacketId]);

  const triggerRipConvergence = () => {
    const convergence = simulateRipUpdate(devices, cables);
    setDevices(prev => 
      prev.map(d => {
        if (d.type === 'router' && convergence[d.id]) {
          return {
            ...d,
            routingTable: convergence[d.id]
          };
        }
        return d;
      })
    );
    addEvent(`RIP Routing Tables converged across routers`, 'success');
  };

  const exportState = () => {
    const data = {
      devices,
      cables,
      globalPacketLoss,
      congestionMultiplier
    };
    return JSON.stringify(data, null, 2);
  };

  const importState = (jsonStr) => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.devices && parsed.cables) {
        setDevices(parsed.devices);
        setCables(parsed.cables);
        if (parsed.globalPacketLoss !== undefined) setGlobalPacketLoss(parsed.globalPacketLoss);
        if (parsed.congestionMultiplier !== undefined) setCongestionMultiplier(parsed.congestionMultiplier);
        addEvent(`Network topology state imported successfully`, 'success');
        setPackets([]);
        setActivePacketId(null);
        setActiveDeviceId(null);
        return true;
      }
    } catch (e) {
      addEvent(`Failed to import JSON topology structure`, 'error');
    }
    return false;
  };

  const resetSimulation = () => {
    saveStateToUndo(devices, cables);
    setPackets([]);
    setActivePacketId(null);
    setDevices(defaultDevices());
    setCables(defaultCables());
    setEvents([]);
    setIsDdosActive(false);
    setIsArpSpoofActive(false);
    setIsDdosDefenseActive(false);
    setIsArpSpoofDefenseActive(false);
    addEvent('Network simulation workspace reset', 'warning');
  };

  const toggleMultiplayer = () => {
    if (!isMultiplayerConnected) {
      setIsMultiplayerConnected(true);
      setMultiplayerCursors({
        'user-alice': { name: 'Alice (NetEng)', x: 400, y: 150, color: '#5485A3' },
        'user-bob': { name: 'Bob (SysAdmin)', x: 600, y: 450, color: '#C58A3E' }
      });
      addEvent('Connected to real-time multiplayer session (Room: NetSim-Main)', 'success');
    } else {
      setIsMultiplayerConnected(false);
      setMultiplayerCursors({});
      addEvent('Disconnected from multiplayer session', 'info');
    }
  };

  return {
    devices,
    setDevices,
    cables,
    setCables,
    packets,
    events,
    activePacketId,
    setActivePacketId,
    activeDeviceId,
    setActiveDeviceId,
    simSpeed,
    setSimSpeed,
    globalPacketLoss,
    setGlobalPacketLoss,
    congestionMultiplier,
    setCongestionMultiplier,
    connectingSource,
    startConnecting,
    completeConnecting,
    cancelConnecting: () => setConnectingSource(null),
    addDevice,
    deleteDevice,
    updateDeviceConfig,
    deleteCable,
    createPacket,
    triggerDhcpRequest,
    runVisualDijkstra,
    dijkstraSteps,
    activeDijkstraStepIndex,
    dijkstraStartEnd,
    advanceDijkstraStep,
    clearDijkstraVisualization,
    triggerRipConvergence,
    undo: triggerUndo,
    redo: triggerRedo,
    canUndo: undoStack.length > 0,
    canRedo: redoStack.length > 0,
    exportState,
    importState,
    resetSimulation,
    isMultiplayerConnected,
    toggleMultiplayer,
    multiplayerCursors,
    addEvent,
    isDdosActive,
    setIsDdosActive,
    isArpSpoofActive,
    setIsArpSpoofActive,
    isDdosDefenseActive,
    setIsDdosDefenseActive,
    isArpSpoofDefenseActive,
    setIsArpSpoofDefenseActive
  };
}

// ==========================================
// 5. CANVAS WORKSPACE COMPONENT
// ==========================================
function NetworkCanvas({
  devices,
  cables,
  packets,
  connectingSource,
  startConnecting,
  completeConnecting,
  cancelConnecting,
  deleteDevice,
  deleteCable,
  setActiveDeviceId,
  setActivePacketId,
  createPacket,
  multiplayerCursors
}) {
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [draggedDeviceId, setDraggedDeviceId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedElement, setSelectedElement] = useState(null);

  const canvasRef = useRef(null);
  const panStartRef = useRef({ x: 0, y: 0 });
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  const [quickPingOpen, setQuickPingOpen] = useState(null); 
  const [pingTargetIp, setPingTargetIp] = useState('10.0.0.100');
  const [pingProto, setPingProto] = useState('ICMP');
  const [pingPayload, setPingPayload] = useState('Legitimate Ping');

  const snapToGrid = true;
  const gridSize = 20;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        cancelConnecting();
        setSelectedElement(null);
        setQuickPingOpen(null);
      }
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedElement) {
          if (selectedElement.type === 'device') {
            deleteDevice(selectedElement.id);
          } else if (selectedElement.type === 'cable') {
            deleteCable(selectedElement.id);
          }
          setSelectedElement(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedElement, cancelConnecting, deleteDevice, deleteCable]);

  const getCanvasCoords = (clientX, clientY) => {
    if (!canvasRef.current) return { x: clientX, y: clientY };
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: (clientX - rect.left - pan.x) / zoom,
      y: (clientY - rect.top - pan.y) / zoom
    };
  };

  const handleMouseDown = (e) => {
    if (e.target === canvasRef.current || e.target.tagName === 'svg') {
      setIsPanning(true);
      panStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
      setSelectedElement(null);
      setQuickPingOpen(null);
    }
  };

  const handleMouseMove = (e) => {
    const coords = getCanvasCoords(e.clientX, e.clientY);
    setMousePos(coords);

    if (isPanning) {
      setPan({
        x: e.clientX - panStartRef.current.x,
        y: e.clientY - panStartRef.current.y
      });
    } else if (draggedDeviceId) {
      const targetDev = devices.find(d => d.id === draggedDeviceId);
      if (targetDev) {
        let newX = coords.x - dragOffsetRef.current.x;
        let newY = coords.y - dragOffsetRef.current.y;

        if (snapToGrid) {
          newX = Math.round(newX / gridSize) * gridSize;
          newY = Math.round(newY / gridSize) * gridSize;
        }

        newX = Math.max(50, Math.min(1500, newX));
        newY = Math.max(50, Math.min(1000, newY));

        targetDev.x = newX;
        targetDev.y = newY;
        setPan(prev => ({ ...prev }));
      }
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
    setDraggedDeviceId(null);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = 1.1;
    let newZoom = zoom;
    if (e.deltaY < 0) {
      newZoom = Math.min(2.0, zoom * zoomFactor);
    } else {
      newZoom = Math.max(0.6, zoom / zoomFactor);
    }
    
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const dx = mouseX - pan.x;
      const dy = mouseY - pan.y;
      
      setPan({
        x: mouseX - dx * (newZoom / zoom),
        y: mouseY - dy * (newZoom / zoom)
      });
    }
    setZoom(newZoom);
  };

  const handleDeviceDragStart = (e, deviceId) => {
    e.stopPropagation();
    if (connectingSource) return;

    setSelectedElement({ type: 'device', id: deviceId });
    setDraggedDeviceId(deviceId);
    const dev = devices.find(d => d.id === deviceId);
    if (dev) {
      const coords = getCanvasCoords(e.clientX, e.clientY);
      dragOffsetRef.current = {
        x: coords.x - dev.x,
        y: coords.y - dev.y
      };
    }
  };

  const renderDeviceIcon = (device, size = 26) => {
    if (device.isAttacker) {
      return <SkullIcon size={size} className="text-red-500" />;
    }
    switch (device.type) {
      case 'pc':
        return <MonitorIcon size={size} className="text-sky-600" />;
      case 'router':
        return <CpuIcon size={size} className="text-violet-600" />;
      case 'switch':
        return <NetworkIcon size={size} className="text-emerald-600" />;
      case 'firewall':
        return <ShieldAlertIcon size={size} className="text-amber-600" />;
      case 'server':
        return <DatabaseIcon size={size} className="text-blue-600" />;
      case 'cloud':
        return <CloudIcon size={size} className="text-pink-600" />;
      default:
        return <LaptopIcon size={size} className="text-slate-500" />;
    }
  };

  const getDeviceCenter = (deviceId) => {
    const dev = devices.find(d => d.id === deviceId);
    if (!dev) return { x: 0, y: 0 };
    return { x: dev.x + 48, y: dev.y + 48 };
  };

  const getPacketPosition = (pkt) => {
    const fromCenter = getDeviceCenter(pkt.currentFromNodeId || '');
    const toCenter = getDeviceCenter(pkt.currentToNodeId || '');
    const progress = (pkt.currentProgress || 0) / 100;
    
    return {
      x: fromCenter.x + (toCenter.x - fromCenter.x) * progress,
      y: fromCenter.y + (toCenter.y - fromCenter.y) * progress
    };
  };

  return (
    <div 
      ref={canvasRef}
      className="relative flex-1 h-[580px] border border-slate-200/80 bg-slate-50 overflow-hidden cursor-grab select-none rounded-2xl shadow-sm"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      style={{ cursor: isPanning ? 'grabbing' : 'grab' }}
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.2) 1.5px, transparent 1.5px)',
          backgroundSize: `${gridSize * zoom}px ${gridSize * zoom}px`,
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }}
      />

      <svg 
        className="absolute inset-0 pointer-events-none w-full h-full"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: '0 0'
        }}
      >
        {cables.map(c => {
          const from = getDeviceCenter(c.fromDeviceId);
          const to = getDeviceCenter(c.toDeviceId);
          const isSelected = selectedElement?.type === 'cable' && selectedElement.id === c.id;
          const isSerial = c.type === 'serial';
          const isFiber = c.type === 'fiber';

          return (
            <g key={c.id} className="pointer-events-auto cursor-pointer" onClick={(e) => {
              e.stopPropagation();
              setSelectedElement({ type: 'cable', id: c.id });
            }}>
              <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="transparent" strokeWidth={14} />
              {isSelected && (
                <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#D45D43" strokeWidth={5} strokeLinecap="round" opacity={0.4} />
              )}
              <line 
                x1={from.x} 
                y1={from.y} 
                x2={to.x} 
                y2={to.y} 
                stroke={isFiber ? '#5485A3' : isSerial ? '#C58A3E' : '#8C867E'} 
                strokeWidth={isFiber ? 3.5 : 2.5} 
                strokeDasharray={isSerial ? '6,6' : undefined}
              />
              <text 
                x={(from.x + to.x) / 2} 
                y={(from.y + to.y) / 2 - 8} 
                fill="#8C867E" 
                fontSize={9} 
                fontWeight="semibold"
                textAnchor="middle"
                className="font-mono bg-white px-1 py-0.5 rounded shadow-sm border border-slate-100 pointer-events-none"
              >
                {c.bandwidth}M / {c.latency}ms
              </text>
            </g>
          );
        })}

        {connectingSource && (() => {
          const from = getDeviceCenter(connectingSource.deviceId);
          return (
            <line x1={from.x} y1={from.y} x2={mousePos.x} y2={mousePos.y} stroke="#5D8E69" strokeWidth={2} strokeDasharray="5,5" className="cable-active" />
          );
        })()}

        {packets.map(pkt => {
          if (pkt.status !== 'in-transit') return null;
          const pos = getPacketPosition(pkt);

          return (
            <g key={pkt.id} className="pointer-events-auto cursor-pointer" onClick={(e) => {
              e.stopPropagation();
              setActivePacketId(pkt.id);
            }}>
              <circle cx={pos.x} cy={pos.y} r={12} fill="none" stroke={pkt.color} strokeWidth={1.5} className="animate-ping" opacity={0.7} />
              <circle cx={pos.x} cy={pos.y} r={7} fill={pkt.color} />
              <text x={pos.x} y={pos.y - 12} fill={pkt.color} fontSize={9} fontWeight="bold" textAnchor="middle" className="font-mono drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                {pkt.protocol}
              </text>
            </g>
          );
        })}

        {packets.map(pkt => {
          if (pkt.status === 'in-transit' || pkt.status === 'created') return null;
          const node = pkt.status === 'delivered' || pkt.status === 'rejected' || pkt.status === 'dropped'
            ? pkt.path[pkt.path.length - 1]
            : pkt.currentToNodeId;
            
          if (!node) return null;
          const center = getDeviceCenter(node);

          return (
            <circle key={`ripple-${pkt.id}`} cx={center.x} cy={center.y} r={pkt.status === 'rejected' || pkt.status === 'dropped' ? 24 : 18} fill="none" stroke={pkt.status === 'delivered' ? '#5D8E69' : '#D45D43'} strokeWidth={3} className="animate-pulse" opacity={0.4} />
          );
        })}
      </svg>

      <div 
        className="absolute inset-0 pointer-events-none w-full h-full"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: '0 0'
        }}
      >
        {devices.map(d => {
          const isSelected = selectedElement?.type === 'device' && selectedElement.id === d.id;
          const isConnectingMode = connectingSource !== null;
          const isSelfSource = connectingSource?.deviceId === d.id;

          let pastelStyle = 'border-slate-200 bg-white text-slate-800 shadow-sm';
          if (isSelected) {
            pastelStyle = 'border-red-300 bg-red-50/90 text-red-800 shadow-[0_4px_10px_rgba(239,68,68,0.1)]';
          } else if (d.isAttacker) {
            pastelStyle = 'border-rose-200 bg-rose-50/90 text-rose-800 shadow-[0_4px_10px_rgba(244,63,94,0.15)]';
          } else if (d.type === 'pc') {
            pastelStyle = 'border-sky-200 bg-sky-50/50 text-sky-900 shadow-sm';
          } else if (d.type === 'router') {
            pastelStyle = 'border-violet-200 bg-violet-50/50 text-violet-900 shadow-sm';
          } else if (d.type === 'switch') {
            pastelStyle = 'border-emerald-200 bg-emerald-50/50 text-emerald-900 shadow-sm';
          } else if (d.type === 'firewall') {
            pastelStyle = 'border-amber-200 bg-amber-50/50 text-amber-900 shadow-sm';
          } else if (d.type === 'server') {
            pastelStyle = 'border-blue-200 bg-blue-50/50 text-blue-900 shadow-sm';
          }

          return (
            <div
              key={d.id}
              className={`absolute p-3 rounded-2xl pointer-events-auto cursor-grab transition flex flex-col items-center select-none group w-24 h-24 justify-center border ${pastelStyle} ${
                isConnectingMode && !isSelfSource ? 'hover:border-emerald-500 hover:bg-emerald-50/80' : ''
              }`}
              style={{ left: d.x, top: d.y }}
              onMouseDown={(e) => handleDeviceDragStart(e, d.id)}
            >
              <span className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                d.cpuUsage > 80 ? 'bg-red-500 animate-pulse' : 'bg-emerald-500 led-blink'
              }`} />

              <div className={`p-2 rounded-xl bg-white/80 border border-slate-100 ${
                isSelected ? 'bg-red-100/50 border-red-200' : ''
              }`}>
                {renderDeviceIcon(d)}
              </div>

              <span className="text-[10px] font-bold mt-1 text-slate-800 max-w-[80px] truncate">
                {d.name}
              </span>
              
              {d.interfaces[0]?.ip && (
                <span className="text-[8px] font-mono font-medium text-slate-500 mt-0.5 truncate max-w-[80px]">
                  {d.interfaces[0].ip}
                </span>
              )}

              <div className="absolute -bottom-9 hidden group-hover:flex gap-1.5 bg-white border border-slate-200 rounded-lg p-1.5 scale-90 z-20 pointer-events-auto shadow-md">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDeviceId(d.id);
                  }}
                  className="p-1 hover:bg-slate-50 rounded text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <SettingsIcon size={12} />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const freeIface = d.interfaces.find(i => !i.connectedCableId);
                    if (freeIface) {
                      startConnecting(d.id, freeIface.id);
                    }
                  }}
                  disabled={d.interfaces.every(i => i.connectedCableId)}
                  className="p-1 hover:bg-slate-50 rounded text-slate-500 hover:text-slate-800 cursor-pointer disabled:opacity-30"
                >
                  <ZapIcon size={12} />
                </button>
                {d.type === 'pc' && !d.isAttacker && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickPingOpen(d.id);
                    }}
                    className="p-1 hover:bg-slate-50 rounded text-slate-500 hover:text-slate-800 cursor-pointer"
                  >
                    <ArrowRightIcon size={12} />
                  </button>
                )}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteDevice(d.id);
                  }}
                  className="p-1 hover:bg-red-50 rounded text-red-500 cursor-pointer"
                >
                  <TrashIcon size={12} />
                </button>
              </div>

              {isConnectingMode && !isSelfSource && (
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    const freeIface = d.interfaces.find(i => !i.connectedCableId);
                    if (freeIface) {
                      completeConnecting(d.id, freeIface.id);
                    }
                  }}
                  className="absolute inset-0 bg-emerald-50/80 border-2 border-dashed border-emerald-400 rounded-2xl flex items-center justify-center cursor-pointer font-bold text-xs text-emerald-600 pointer-events-auto"
                >
                  Link Port
                </div>
              )}
            </div>
          );
        })}

        {Object.entries(multiplayerCursors).map(([id, cur]) => (
          <div 
            key={id}
            className="absolute pointer-events-none transition-all duration-200 ease-out z-50 flex flex-col items-start"
            style={{ left: cur.x, top: cur.y }}
          >
            <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1V15.5L4.5 12L7.5 16.5L10 15L7 10.5L11.5 10L1 1Z" fill={cur.color} stroke="white" strokeWidth="1"/>
            </svg>
            <span 
              className="text-[9px] px-1 py-0.5 rounded font-bold text-white -mt-1 ml-3 whitespace-nowrap shadow-sm"
              style={{ backgroundColor: cur.color }}
            >
              {cur.name}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-auto">
        <div className="bg-white border border-slate-200 rounded-xl p-1.5 flex flex-col gap-1 shadow-sm">
          <button 
            onClick={() => setZoom(z => Math.min(2.0, z + 0.15))}
            className="w-8 h-8 rounded hover:bg-slate-50 text-slate-600 font-bold hover:text-slate-800 flex items-center justify-center cursor-pointer"
          >
            +
          </button>
          <button 
            onClick={() => setZoom(z => Math.max(0.6, z - 0.15))}
            className="w-8 h-8 rounded hover:bg-slate-50 text-slate-600 font-bold hover:text-slate-800 flex items-center justify-center cursor-pointer"
          >
            -
          </button>
          <button 
            onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
            className="text-[9px] w-8 h-8 rounded hover:bg-slate-50 text-slate-600 hover:text-slate-800 flex items-center justify-center cursor-pointer font-bold"
          >
            Fit
          </button>
        </div>
      </div>

      {connectingSource && (
        <div className="absolute top-4 right-4 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs font-bold text-emerald-700 shadow-sm pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 led-blink" />
          Connection Mode. Click another devices Port or press Esc.
        </div>
      )}

      {quickPingOpen && (() => {
        const sourceDev = devices.find(d => d.id === quickPingOpen);
        if (!sourceDev) return null;
        return (
          <div className="absolute bottom-4 left-4 bg-white border border-slate-200 rounded-2xl p-4 w-72 shadow-xl pointer-events-auto z-40 text-left">
            <h4 className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
              <ZapIcon size={14} className="text-sky-500" />
              Generate traffic: {sourceDev.name}
            </h4>
            <div className="flex flex-col gap-2.5">
              <div>
                <label className="text-[9px] text-slate-500 uppercase tracking-wider block mb-0.5 font-bold">Target IP</label>
                <input 
                  type="text" 
                  value={pingTargetIp} 
                  onChange={(e) => setPingTargetIp(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-slate-800 focus:border-sky-500 outline-none font-semibold"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-[9px] text-slate-500 uppercase tracking-wider block mb-0.5 font-bold">Protocol</label>
                  <select 
                    value={pingProto} 
                    onChange={(e) => setPingProto(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded p-1 text-slate-800 focus:border-sky-500 outline-none font-bold"
                  >
                    <option value="ICMP">Ping (ICMP)</option>
                    <option value="HTTP">HTTP (Web)</option>
                    <option value="HTTPS">HTTPS (Sec)</option>
                    <option value="DNS">DNS Resolution</option>
                    <option value="FTP">FTP Transfer</option>
                    <option value="SSH">SSH Console</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="text-[9px] text-slate-500 uppercase tracking-wider block mb-0.5 font-bold">Payload</label>
                  <input 
                    type="text" 
                    value={pingPayload} 
                    onChange={(e) => setPingPayload(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800 focus:border-sky-500 outline-none font-medium"
                  />
                </div>
              </div>
              <div className="flex gap-2 justify-end mt-1">
                <button 
                  onClick={() => setQuickPingOpen(null)}
                  className="px-2.5 py-1 rounded-lg text-[10px] border border-slate-200 hover:bg-slate-55 bg-slate-50 text-slate-600 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    createPacket(sourceDev.id, pingTargetIp, pingProto, pingPayload);
                    setQuickPingOpen(null);
                  }}
                  className="px-3.5 py-1 bg-sky-600 hover:bg-sky-500 rounded-lg text-[10px] text-white font-bold cursor-pointer"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ==========================================
// 6. PERFORMANCE MONITOR DASHBOARD COMPONENT
// ==========================================
function Dashboard({
  devices,
  cables,
  packets,
  globalPacketLoss,
  setGlobalPacketLoss,
  congestionMultiplier,
  setCongestionMultiplier
}) {
  const [throughputHistory, setThroughputHistory] = useState(Array(20).fill(0));
  const [dropHistory, setDropHistory] = useState(Array(20).fill(0));
  const [prevTotalDelivered, setPrevTotalDelivered] = useState(0);

  const totalPackets = packets.length;
  const droppedPacketsCount = packets.filter(p => p.status === 'dropped' || p.status === 'rejected').length;
  const activePacketsCount = packets.filter(p => p.status === 'in-transit' || p.status === 'processing').length;

  const avgCpu = devices.length > 0 
    ? Math.round(devices.reduce((acc, d) => acc + d.cpuUsage, 0) / devices.length) 
    : 0;
  const avgMem = devices.length > 0 
    ? Math.round(devices.reduce((acc, d) => acc + d.memoryUsage, 0) / devices.length) 
    : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      const deliveredPackets = packets.filter(p => p.status === 'delivered').length;
      const throughputVal = Math.max(0, (deliveredPackets - prevTotalDelivered) * 8);
      setThroughputHistory(prev => [...prev.slice(1), throughputVal]);
      
      const droppedVal = packets.filter(p => p.status === 'dropped' || p.status === 'rejected').length;
      setDropHistory(prev => [...prev.slice(1), droppedVal]);

      setPrevTotalDelivered(deliveredPackets);
    }, 1000);

    return () => clearInterval(interval);
  }, [packets, prevTotalDelivered]);

  const generateSvgPath = (data, width, height, maxVal = 100) => {
    if (data.length === 0) return '';
    const max = Math.max(...data, maxVal);
    const step = width / (data.length - 1);
    
    return data.map((val, idx) => {
      const x = idx * step;
      const y = height - (val / max) * height * 0.8 - (height * 0.1);
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
  };

  const throughputPath = generateSvgPath(throughputHistory, 280, 70, 50);
  const dropPath = generateSvgPath(dropHistory, 280, 70, 5);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-4 shadow-sm h-full justify-between text-slate-800">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-2 bg-slate-50/50 px-1 -mx-4 -mt-4 p-4 rounded-t-2xl">
        <span className="p-1 bg-slate-100 rounded-lg text-emerald-600">
          <ActivityIcon size={16} />
        </span>
        <h3 className="text-xs font-bold text-slate-850">Performance Dashboard</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/30 text-left">
          <span className="text-[9px] text-slate-500 block uppercase tracking-wider font-bold">Total Packets</span>
          <span className="text-lg font-extrabold text-slate-900 block mt-0.5">{totalPackets}</span>
          <span className="text-[8px] text-slate-400 block mt-0.5">{activePacketsCount} active • {cables.length} links</span>
        </div>

        <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/30 text-left">
          <span className="text-[9px] text-slate-500 block uppercase tracking-wider font-bold">Dropped / Blocked</span>
          <span className={`text-lg font-extrabold block mt-0.5 ${droppedPacketsCount > 0 ? 'text-red-500' : 'text-slate-500'}`}>
            {droppedPacketsCount}
          </span>
          <span className="text-[8px] text-slate-400 block mt-0.5">Impairment drop count</span>
        </div>

        <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/30 text-left flex items-center justify-between">
          <div>
            <span className="text-[9px] text-slate-500 block uppercase tracking-wider font-bold">System CPU</span>
            <span className="text-base font-extrabold text-slate-900 block mt-0.5">{avgCpu}%</span>
          </div>
          <CpuIcon size={16} className="text-sky-500 opacity-80" />
        </div>

        <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/30 text-left flex items-center justify-between">
          <div>
            <span className="text-[9px] text-slate-500 block uppercase tracking-wider font-bold">Memory load</span>
            <span className="text-base font-extrabold text-slate-900 block mt-0.5">{avgMem}%</span>
          </div>
          <HardDriveIcon size={16} className="text-indigo-500 opacity-80" />
        </div>
      </div>

      <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/20 flex flex-col gap-3">
        <div className="text-left">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[9px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
              <PercentIcon size={11} className="text-amber-500" />
              Simulate Packet Loss
            </span>
            <span className="text-xs font-mono font-bold text-amber-600">{globalPacketLoss}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="50" 
            step="5"
            value={globalPacketLoss} 
            onChange={(e) => setGlobalPacketLoss(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-[8px] text-slate-400 mt-1 font-bold">
            <span>0% (Perfect)</span>
            <span>50% (Hostile)</span>
          </div>
        </div>

        <div className="text-left">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[9px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
              <FlameIcon size={11} className="text-red-500" />
              Simulate Queue Congestion
            </span>
            <span className="text-xs font-mono font-bold text-red-500">{congestionMultiplier}x</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="10" 
            step="1"
            value={congestionMultiplier} 
            onChange={(e) => setCongestionMultiplier(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
          />
          <div className="flex justify-between text-[8px] text-slate-400 mt-1 font-bold">
            <span>1x (Light)</span>
            <span>10x (Buffer Bloat)</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="p-2 border border-slate-100 rounded-xl bg-slate-50/30 text-left">
          <div className="flex justify-between text-[8px] text-slate-500 font-bold mb-1 uppercase tracking-wider">
            <span>Throughput Sparkline</span>
            <span className="text-emerald-600 font-bold">{throughputHistory[throughputHistory.length - 1]} Kbps</span>
          </div>
          <svg className="w-full h-14" viewBox="0 0 280 70">
            <line x1="0" y1="35" x2="280" y2="35" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
            <path d={throughputPath} fill="none" stroke="#5D8E69" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="p-2 border border-slate-100 rounded-xl bg-slate-50/30 text-left">
          <div className="flex justify-between text-[8px] text-slate-500 font-bold mb-1 uppercase tracking-wider">
            <span>Dropped Packets Timeline</span>
            <span className="text-red-500 font-bold">{droppedPacketsCount} total</span>
          </div>
          <svg className="w-full h-14" viewBox="0 0 280 70">
            <line x1="0" y1="35" x2="280" y2="35" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
            <path d={dropPath} fill="none" stroke="#D45D43" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

    </div>
  );
}

// ==========================================
// 7. EVENT LOG CONSOLE COMPONENT
// ==========================================
function EventLog({ events }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredEvents = events.filter(evt => {
    const matchesSearch = evt.message.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (evt.deviceId && evt.deviceId.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filterType === 'all') return matchesSearch;
    return evt.type === filterType && matchesSearch;
  });

  const getEventIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircleIcon size={12} className="text-emerald-600" />;
      case 'warning': return <ShieldAlertIcon size={12} className="text-amber-600 animate-pulse" />;
      case 'error': return <AlertCircleIcon size={12} className="text-red-500" />;
      default: return <InfoIcon size={12} className="text-slate-500" />;
    }
  };

  const getEventBgColor = (type) => {
    switch (type) {
      case 'success': return 'bg-emerald-50/50 text-emerald-800 border-emerald-100';
      case 'warning': return 'bg-amber-50/50 text-amber-800 border-amber-100';
      case 'error': return 'bg-red-50/50 text-red-800 border-red-100';
      default: return 'bg-white text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-3 shadow-sm h-[280px] text-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <div className="flex items-center gap-2">
          <ListFilterIcon size={14} className="text-sky-600" />
          <h3 className="text-xs font-bold text-slate-800">Live Simulator Events</h3>
        </div>

        <div className="flex gap-1">
          {['all', 'info', 'success', 'warning', 'error'].map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase transition cursor-pointer ${
                filterType === type 
                  ? 'bg-slate-800 text-white shadow-sm' 
                  : 'bg-slate-100 text-slate-500 hover:text-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter log console messages..."
          className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-slate-800 outline-none focus:border-sky-500 transition font-medium"
        />
        <SearchIcon size={12} className="absolute left-3 top-2.5 text-slate-400" />
      </div>

      <div className="flex-grow overflow-y-auto min-h-0 bg-slate-50/40 rounded-xl p-2 border border-slate-100 space-y-1 font-mono text-[10px]">
        {filteredEvents.map(evt => (
          <div key={evt.id} className={`px-2.5 py-1.5 border rounded-lg flex gap-2.5 items-start text-left shadow-sm ${getEventBgColor(evt.type)}`}>
            <span className="text-slate-400 select-none font-bold">{evt.timestamp}</span>
            <span className="mt-0.5 shrink-0">{getEventIcon(evt.type)}</span>
            <span className="flex-1 leading-normal font-semibold">{evt.message}</span>
            {evt.deviceId && (
              <span className="px-1 border border-slate-200 bg-white rounded text-[8px] text-slate-500 uppercase font-bold select-none">
                {evt.deviceId.split('-')[0]}
              </span>
            )}
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <div className="text-center text-slate-400 italic py-6 select-none font-semibold">
            No events match current parameters.
          </div>
        )}
      </div>

    </div>
  );
}

// ==========================================
// 8. OSI INSPECTION LAYER ANALYSIS COMPONENT
// ==========================================
function OsiInspector({ packet, onClose }) {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  if (!packet) return null;

  const currentStep = packet.osiTrace[selectedStepIndex];

  const getLayerColor = (layerNum) => {
    switch (layerNum) {
      case 7: return 'text-emerald-700 border-emerald-200 bg-emerald-50/40';
      case 4: return 'text-indigo-700 border-indigo-200 bg-indigo-50/40';
      case 3: return 'text-violet-700 border-violet-200 bg-violet-50/40';
      case 2: return 'text-amber-700 border-amber-200 bg-amber-50/40';
      case 1: return 'text-cyan-700 border-cyan-200 bg-cyan-50/40';
      default: return 'text-slate-500 border-slate-200 bg-slate-50';
    }
  };

  const getLayerNameLabel = (num) => {
    switch (num) {
      case 7: return 'Layer 7: Application';
      case 4: return 'Layer 4: Transport';
      case 3: return 'Layer 3: Network';
      case 2: return 'Layer 2: Data Link';
      case 1: return 'Layer 1: Physical';
      default: return `Layer ${num}`;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl flex flex-col h-full overflow-hidden shadow-sm text-slate-800">
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-slate-100 rounded-lg text-indigo-600">
            <NetworkIcon size={16} />
          </span>
          <div>
            <h3 className="text-xs font-bold text-slate-800">OSI Analyzer</h3>
            <p className="text-[9px] text-slate-500 font-mono -mt-0.5">Packet: {packet.id} • {packet.protocol}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-650 cursor-pointer">
          <XIcon size={16} />
        </button>
      </div>

      <div className="bg-slate-50/30 border-b border-slate-100 p-3 flex gap-1.5 overflow-x-auto select-none">
        {packet.osiTrace.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedStepIndex(idx)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 transition shrink-0 cursor-pointer border ${
              selectedStepIndex === idx
                ? 'bg-indigo-600 border-indigo-500 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-350'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
            {step.deviceName} ({step.type === 'in' ? 'Rx' : 'Tx'})
          </button>
        ))}
      </div>

      <div className="flex-1 p-4 overflow-y-auto flex gap-4 min-h-0">
        {currentStep ? (
          <>
            <div className="flex-1 flex flex-col gap-2 max-w-[280px]">
              <h4 className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5 flex items-center gap-1">
                <InfoIcon size={11} className="text-indigo-600" />
                Active Stack
              </h4>
              {[7, 4, 3, 2, 1].map((layerNum) => {
                const header = currentStep.layers[layerNum];
                const layerStyle = getLayerColor(layerNum);
                
                return (
                  <div
                    key={layerNum}
                    className={`border p-2.5 rounded-xl transition flex flex-col text-left ${layerStyle} ${
                      header ? 'opacity-100 shadow-sm' : 'opacity-20'
                    }`}
                  >
                    <span className="text-[10px] font-bold tracking-tight">
                      {getLayerNameLabel(layerNum)}
                    </span>
                    <span className="text-[8px] font-mono font-bold opacity-80 mt-0.5 uppercase tracking-wide">
                      {header ? header.name : 'Not Encapsulated'}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex-[2] flex flex-col gap-3 min-w-0">
              <h4 className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">
                Process Log details
              </h4>

              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                <span className="text-[8px] font-mono text-indigo-600 uppercase tracking-wider font-bold">Trace Event Action</span>
                <p className="text-xs font-semibold text-slate-800 mt-0.5">
                  {currentStep.action}
                </p>
              </div>

              <div className="flex-grow border border-slate-150 rounded-xl p-3 bg-white overflow-y-auto divide-y divide-slate-100">
                {[7, 4, 3, 2, 1].map((layerNum) => {
                  const header = currentStep.layers[layerNum];
                  if (!header) return null;

                  return (
                    <div key={layerNum} className="py-2.5 first:pt-0 last:pb-0 flex flex-col gap-1 text-left">
                      <h5 className="text-[10px] font-bold text-slate-800 uppercase tracking-wide">
                        {getLayerNameLabel(layerNum)} • {header.name}
                      </h5>
                      <ul className="space-y-1">
                        {header.details.map((detail, index) => (
                          <li key={index} className="text-[9px] font-mono font-bold text-slate-500 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center text-slate-400 italic text-xs font-semibold">
            No trace log steps on this hop.
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 9. DIJKSTRA SPF VISUALIZER COMPONENT
// ==========================================
function DijkstraVisualizer({
  devices,
  dijkstraSteps,
  activeStepIndex,
  advanceStep,
  clearVisualization,
  dijkstraStartEnd
}) {
  if (dijkstraSteps.length === 0 || !dijkstraStartEnd) return null;

  const currentStep = dijkstraSteps[activeStepIndex];
  const startDevName = devices.find(d => d.id === dijkstraStartEnd.start)?.name || dijkstraStartEnd.start;
  const endDevName = devices.find(d => d.id === dijkstraStartEnd.end)?.name || dijkstraStartEnd.end;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col gap-4 shadow-sm text-slate-800">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 bg-slate-50/50 px-1 -mx-4 -mt-4 p-4 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-violet-600 led-blink" />
          <div>
            <h3 className="text-xs font-bold text-slate-800">OSPF Dijkstra Solver</h3>
            <span className="text-[9px] font-mono font-bold text-slate-500">{startDevName} ➔ {endDevName}</span>
          </div>
        </div>
        <button onClick={clearVisualization} className="p-1 px-2 text-[9px] text-slate-500 hover:text-slate-850 border border-slate-200 hover:bg-slate-50 rounded-lg font-bold cursor-pointer transition shadow-sm">
          Exit
        </button>
      </div>

      <div className="p-3 bg-violet-50 border border-violet-100 rounded-xl">
        <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-violet-600">Step {activeStepIndex + 1} of {dijkstraSteps.length}</span>
        <p className="text-xs text-slate-700 mt-0.5 font-semibold leading-relaxed">
          {currentStep?.explanation}
        </p>
      </div>

      <div>
        <h4 className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-2">Distance Vectors Table</h4>
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
          <table className="w-full text-[10px] text-slate-700 font-mono">
            <thead className="bg-slate-50 text-slate-600 text-left">
              <tr>
                <th className="p-2 border-b border-slate-200">Node</th>
                <th className="p-2 border-b border-slate-200">Cost</th>
                <th className="p-2 border-b border-slate-200">Parent</th>
                <th className="p-2 border-b border-slate-200">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentStep?.nodesState.map((ns) => {
                const devName = devices.find(d => d.id === ns.nodeId)?.name || ns.nodeId;
                const isCurrent = currentStep.currentNode === ns.nodeId;
                const parentName = ns.parent ? (devices.find(d => d.id === ns.parent)?.name || ns.parent) : '-';

                return (
                  <tr key={ns.nodeId} className={`transition-colors ${isCurrent ? 'bg-cyan-50/50 text-cyan-700 font-bold' : ns.visited ? 'bg-slate-50/20 text-slate-400' : 'hover:bg-slate-50/20'}`}>
                    <td className="p-2 flex items-center gap-1">
                      {isCurrent && <ArrowRightIcon size={10} className="text-cyan-600 animate-bounce" />}
                      {devName}
                    </td>
                    <td className="p-2">{ns.distance === Infinity ? '∞' : ns.distance}</td>
                    <td className="p-2">{parentName}</td>
                    <td className="p-2">
                      <span className={`px-1 rounded text-[8px] font-sans font-bold uppercase ${
                        isCurrent ? 'bg-cyan-55 bg-cyan-50 border border-cyan-200 text-cyan-600' :
                        ns.visited ? 'bg-slate-100 text-slate-400' :
                        ns.distance !== Infinity ? 'bg-indigo-50 text-indigo-600 border border-indigo-200' :
                        'bg-slate-50 text-slate-400'
                      }`}>
                        {isCurrent ? 'Active' : ns.visited ? 'Visited' : ns.distance !== Infinity ? 'Queued' : 'Unreached'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 items-center">
        <div className="text-left">
          <span className="text-[9px] text-slate-400 uppercase tracking-wider block mb-1 font-bold">Tentative Queue</span>
          <div className="flex gap-1 flex-wrap">
            {currentStep?.priorityQueue.map((item, idx) => {
              const name = devices.find(d => d.id === item.nodeId)?.name || item.nodeId;
              return (
                <span key={idx} className="px-2 py-0.5 border border-slate-200 bg-slate-50 text-[9px] rounded font-mono text-slate-600 font-bold">
                  {name}:{item.distance}
                </span>
              );
            })}
            {(!currentStep?.priorityQueue || currentStep.priorityQueue.length === 0) && (
              <span className="text-[9px] text-slate-400 italic font-semibold">Queue Empty</span>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button disabled={activeStepIndex === dijkstraSteps.length - 1} onClick={advanceStep} className="px-3 py-1.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:hover:bg-violet-600 rounded-lg text-xs text-white font-bold flex items-center gap-1 cursor-pointer transition shadow-sm">
            Next <ArrowRightIcon size={12} />
          </button>
        </div>
      </div>

    </div>
  );
}

// ==========================================
// 10. DEVICE CONFIG OVERLAY COMPONENT
// ==========================================
function DeviceConfig({
  device,
  onClose,
  onUpdateConfig,
  triggerDhcpRequest
}) {
  const [activeTab, setActiveTab] = useState('interfaces');
  const [name, setName] = useState(device.name);
  
  const [gateway, setGateway] = useState(device.gateway || '');
  const [dns, setDns] = useState(device.dns || '');

  const [interfaceConfigs, setInterfaceConfigs] = useState([...device.interfaces]);

  const [dhcpPoolEnabled, setDhcpPoolEnabled] = useState(device.dhcpPoolEnabled ?? false);
  const [dhcpStartIp, setDhcpStartIp] = useState(device.dhcpPool?.startIp || '192.168.1.100');
  const [dhcpEndIp, setDhcpEndIp] = useState(device.dhcpPool?.endIp || '192.168.1.150');
  const [dhcpGateway, setDhcpGateway] = useState(device.dhcpPool?.gateway || '192.168.1.254');
  const [dhcpDns, setDhcpDns] = useState(device.dhcpPool?.dns || '10.0.0.100');

  const [newDest, setNewDest] = useState('');
  const [newMask, setNewMask] = useState('255.255.255.0');
  const [newGw, setNewGw] = useState('');
  const [newIface, setNewIface] = useState(device.interfaces[0]?.id || '');

  const [newAclAction, setNewAclAction] = useState('deny');
  const [newAclProto, setNewAclProto] = useState('any');
  const [newAclSrc, setNewAclSrc] = useState('any');
  const [newAclDest, setNewAclDest] = useState('any');

  const [newFwAction, setNewFwAction] = useState('deny');
  const [newFwProto, setNewFwProto] = useState('HTTP');
  const [newFwSrc, setNewFwSrc] = useState('any');
  const [newFwDest, setNewFwDest] = useState('any');
  const [newFwPort, setNewFwPort] = useState('any');

  const [newDomain, setNewDomain] = useState('');
  const [newDomainIp, setNewDomainIp] = useState('');

  const [ospfEnabled, setOspfEnabled] = useState(device.ospfEnabled ?? true);
  const [ripEnabled, setRipEnabled] = useState(device.ripEnabled ?? false);

  const handleSaveGeneral = () => {
    const updates = {
      name,
      interfaces: interfaceConfigs
    };
    if (device.type === 'pc' || device.type === 'server') {
      updates.gateway = gateway;
      updates.dns = dns;
    }
    if (device.type === 'router') {
      updates.ospfEnabled = ospfEnabled;
      updates.ripEnabled = ripEnabled;
      updates.dhcpPoolEnabled = dhcpPoolEnabled;
      updates.dhcpPool = {
        startIp: dhcpStartIp,
        endIp: dhcpEndIp,
        gateway: dhcpGateway,
        dns: dhcpDns
      };
    }
    onUpdateConfig(device.id, updates);
    onClose();
  };

  const handleInterfaceChange = (index, field, value) => {
    const updated = [...interfaceConfigs];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setInterfaceConfigs(updated);
  };

  const handleAddRoute = () => {
    if (!newDest || !newMask || !newGw) return;
    const newRoute = {
      destination: newDest,
      mask: newMask,
      gateway: newGw,
      interfaceId: newIface,
      metric: 1,
      protocol: 'static'
    };
    const updatedRoutes = [...(device.staticRoutes || []), newRoute];
    const updatedRoutingTable = [...(device.routingTable || []), newRoute];

    onUpdateConfig(device.id, {
      staticRoutes: updatedRoutes,
      routingTable: updatedRoutingTable
    });

    setNewDest('');
    setNewGw('');
  };

  const handleDeleteRoute = (index) => {
    const staticR = [...(device.staticRoutes || [])];
    const routeToDelete = staticR[index];
    staticR.splice(index, 1);

    const routingT = (device.routingTable || []).filter(r => 
      !(r.destination === routeToDelete.destination && r.mask === routeToDelete.mask && r.gateway === routeToDelete.gateway)
    );

    onUpdateConfig(device.id, {
      staticRoutes: staticR,
      routingTable: routingT
    });
  };

  const handleAddAcl = () => {
    const newRule = {
      id: Math.random().toString(36).substring(7),
      action: newAclAction,
      protocol: newAclProto,
      srcIp: newAclSrc,
      destIp: newAclDest
    };
    const updatedAcls = [...(device.acls || []), newRule];
    onUpdateConfig(device.id, { acls: updatedAcls });
    setNewAclSrc('any');
    setNewAclDest('any');
  };

  const handleDeleteAcl = (ruleId) => {
    const updatedAcls = (device.acls || []).filter(r => r.id !== ruleId);
    onUpdateConfig(device.id, { acls: updatedAcls });
  };

  const handleAddFirewallRule = () => {
    const newRule = {
      id: Math.random().toString(36).substring(7),
      action: newFwAction,
      protocol: newFwProto,
      srcIp: newFwSrc,
      destIp: newFwDest,
      port: newFwPort === 'any' ? 'any' : Number(newFwPort)
    };
    const updatedRules = [...(device.firewallRules || []), newRule];
    onUpdateConfig(device.id, { firewallRules: updatedRules });
    setNewFwSrc('any');
    setNewFwDest('any');
  };

  const handleDeleteFirewallRule = (ruleId) => {
    const updatedRules = (device.firewallRules || []).filter(r => r.id !== ruleId);
    onUpdateConfig(device.id, { firewallRules: updatedRules });
  };

  const handleAddDnsEntry = () => {
    if (!newDomain || !newDomainIp) return;
    const newEntry = { domain: newDomain, ip: newDomainIp };
    const updatedEntries = [...(device.dnsEntries || []), newEntry];
    onUpdateConfig(device.id, { dnsEntries: updatedEntries });
    setNewDomain('');
    setNewDomainIp('');
  };

  const handleDeleteDnsEntry = (domain) => {
    const updatedEntries = (device.dnsEntries || []).filter(e => e.domain !== domain);
    onUpdateConfig(device.id, { dnsEntries: updatedEntries });
  };

  const handleToggleService = (srv) => {
    const services = { ...(device.serverServices || { http: true, dns: false, ftp: false, db: false }) };
    services[srv] = !services[srv];
    onUpdateConfig(device.id, { serverServices: services });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 text-left">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-3xl shadow-xl flex flex-col h-[560px] overflow-hidden text-slate-800">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 bg-slate-100 rounded-lg text-slate-600">
              <SettingsIcon size={18} />
            </span>
            <div>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="bg-transparent text-sm font-bold text-slate-900 border-b border-transparent hover:border-slate-300 focus:border-sky-500 focus:outline-none"
              />
              <span className="text-[10px] text-slate-500 block -mt-0.5">
                Device Settings • ID: {device.id} • {device.type.toUpperCase()}
              </span>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer">
            <XIcon size={18} />
          </button>
        </div>

        <div className="flex border-b border-slate-100 bg-slate-50/20 px-4">
          <button onClick={() => setActiveTab('interfaces')} className={`px-4 py-2.5 text-xs font-semibold border-b-2 cursor-pointer ${activeTab === 'interfaces' ? 'border-sky-500 text-sky-600' : 'border-transparent text-slate-500 hover:text-slate-850'}`}>
            IP Config & Interfaces
          </button>
          {device.type === 'router' && (
            <button onClick={() => setActiveTab('routing')} className={`px-4 py-2.5 text-xs font-semibold border-b-2 cursor-pointer ${activeTab === 'routing' ? 'border-sky-500 text-sky-600' : 'border-transparent text-slate-500 hover:text-slate-850'}`}>
              Routing Table (OSPF/RIP)
            </button>
          )}
          {(device.type === 'router' || device.type === 'firewall') && (
            <button onClick={() => setActiveTab('security')} className={`px-4 py-2.5 text-xs font-semibold border-b-2 cursor-pointer ${activeTab === 'security' ? 'border-sky-500 text-sky-600' : 'border-transparent text-slate-500 hover:text-slate-850'}`}>
              Security Policies / ACL
            </button>
          )}
          {device.type === 'server' && (
            <button onClick={() => setActiveTab('services')} className={`px-4 py-2.5 text-xs font-semibold border-b-2 cursor-pointer ${activeTab === 'services' ? 'border-sky-500 text-sky-600' : 'border-transparent text-slate-500 hover:text-slate-850'}`}>
              Services
            </button>
          )}
          <button onClick={() => setActiveTab('diagnostics')} className={`px-4 py-2.5 text-xs font-semibold border-b-2 cursor-pointer ${activeTab === 'diagnostics' ? 'border-sky-500 text-sky-600' : 'border-transparent text-slate-500 hover:text-slate-850'}`}>
            Diagnostics (ARP/MAC)
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto bg-slate-50/30">
          {activeTab === 'interfaces' && (
            <div className="space-y-5">
              {(device.type === 'pc' || device.type === 'server') && (
                <div className="grid grid-cols-2 gap-4 bg-white p-4 border border-slate-200 rounded-xl shadow-sm">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Default Gateway</label>
                    <input 
                      type="text" 
                      value={gateway} 
                      disabled={interfaceConfigs[0]?.ipMode === 'dhcp'}
                      onChange={(e) => setGateway(e.target.value)} 
                      placeholder="e.g. 192.168.1.254"
                      className="w-full text-xs bg-slate-55 bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 text-slate-800 disabled:opacity-50 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">DNS Server</label>
                    <input 
                      type="text" 
                      value={dns} 
                      disabled={interfaceConfigs[0]?.ipMode === 'dhcp'}
                      onChange={(e) => setDns(e.target.value)} 
                      placeholder="e.g. 10.0.0.100"
                      className="w-full text-xs bg-slate-55 bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 text-slate-800 disabled:opacity-50 outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-3">Network Interfaces Settings</h4>
                <div className="space-y-4">
                  {interfaceConfigs.map((iface, index) => (
                    <div key={iface.id} className="p-4 border border-slate-200 rounded-xl bg-white flex flex-col gap-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${iface.status === 'up' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                          {iface.name} ({iface.id})
                        </span>
                        
                        <div className="flex gap-2">
                          {device.type === 'pc' && (
                            <select
                              value={iface.ipMode || 'static'}
                              onChange={(e) => handleInterfaceChange(index, 'ipMode', e.target.value)}
                              className="bg-slate-50 border border-slate-200 text-[10px] rounded px-1.5 py-0.5 text-slate-800 font-bold"
                            >
                              <option value="static">Static IP</option>
                              <option value="dhcp">DHCP IP</option>
                            </select>
                          )}
                          <select 
                            value={iface.status} 
                            onChange={(e) => handleInterfaceChange(index, 'status', e.target.value)}
                            className="bg-slate-50 border border-slate-200 text-[10px] rounded px-1.5 py-0.5 text-slate-800"
                          >
                            <option value="up">Interface Up</option>
                            <option value="down">Interface Down</option>
                          </select>
                        </div>
                      </div>

                      {device.type !== 'switch' ? (
                        <div className="flex flex-col gap-2">
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <label className="text-[9px] text-slate-500 font-bold block mb-0.5">IP Address</label>
                              <input 
                                type="text" 
                                value={iface.ip} 
                                disabled={iface.ipMode === 'dhcp'}
                                onChange={(e) => handleInterfaceChange(index, 'ip', e.target.value)}
                                className="w-full text-[11px] font-mono bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800 disabled:opacity-50"
                              />
                            </div>
                            <div>
                              <label className="text-[9px] text-slate-500 font-bold block mb-0.5">Subnet Mask</label>
                              <input 
                                type="text" 
                                value={iface.subnet} 
                                disabled={iface.ipMode === 'dhcp'}
                                onChange={(e) => handleInterfaceChange(index, 'subnet', e.target.value)}
                                className="w-full text-[11px] font-mono bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800 disabled:opacity-50"
                              />
                            </div>
                            <div>
                              <label className="text-[9px] text-slate-500 font-bold block mb-0.5">Hardware MAC</label>
                              <input type="text" disabled value={iface.mac} className="w-full text-[11px] font-mono bg-slate-100 border border-slate-200 rounded px-2 py-1 text-slate-55 bg-slate-500" />
                            </div>
                          </div>
                          
                          {iface.ipMode === 'dhcp' && (
                            <div className="flex justify-start pt-1">
                              <button onClick={() => triggerDhcpRequest(device.id, iface.id)} className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-white rounded text-[10px] font-bold cursor-pointer transition">
                                Request Lease via DHCP
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-[9px] text-slate-500 font-bold block mb-0.5">Port Mode</label>
                            <select value={iface.vlanMode || 'access'} onChange={(e) => handleInterfaceChange(index, 'vlanMode', e.target.value)} className="w-full text-[11px] bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800">
                              <option value="access">Access Port</option>
                              <option value="trunk">Trunk Port</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[9px] text-slate-500 font-bold block mb-0.5">VLAN Binding</label>
                            <select value={iface.vlan || 1} onChange={(e) => handleInterfaceChange(index, 'vlan', Number(e.target.value))} className="w-full text-[11px] bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800">
                              {(device.vlans || [1]).map(v => (
                                <option key={v} value={v}>VLAN {v}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'routing' && device.type === 'router' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 bg-white p-4 border border-slate-200 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">OSPF Routing Protocol</span>
                    <span className="text-[9px] text-slate-500">Shortest Path First link cost updates</span>
                  </div>
                  <input type="checkbox" checked={ospfEnabled} onChange={(e) => setOspfEnabled(e.target.checked)} className="w-4 h-4 text-sky-600 border-slate-300 rounded cursor-pointer" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">RIP Routing (v2)</span>
                    <span className="text-[9px] text-slate-500">Distance vector periodic exchanges</span>
                  </div>
                  <input type="checkbox" checked={ripEnabled} onChange={(e) => setRipEnabled(e.target.checked)} className="w-4 h-4 text-sky-600 border-slate-300 rounded cursor-pointer" />
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div>
                    <h4 className="text-xs font-bold text-slate-700">DHCP Server IP Leases Pool</h4>
                    <span className="text-[9px] text-slate-500">Auto-assign addresses to local clients</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-500 font-semibold">Enable DHCP Server</span>
                    <input type="checkbox" checked={dhcpPoolEnabled} onChange={(e) => setDhcpPoolEnabled(e.target.checked)} className="w-4 h-4 text-sky-600 border-slate-300 rounded cursor-pointer" />
                  </div>
                </div>

                {dhcpPoolEnabled && (
                  <div className="grid grid-cols-4 gap-2">
                    {[['Start Lease IP', dhcpStartIp, setDhcpStartIp], ['End Lease IP', dhcpEndIp, setDhcpEndIp], ['Lease Gateway IP', dhcpGateway, setDhcpGateway], ['Lease DNS Server', dhcpDns, setDhcpDns]].map(([label, val, setter]) => (
                      <div key={label}>
                        <label className="text-[9px] text-slate-500 font-bold block mb-0.5">{label}</label>
                        <input type="text" value={val} onChange={(e) => setter(e.target.value)} className="w-full text-[11px] bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-slate-800 font-mono" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <h4 className="text-xs font-bold text-slate-700 mb-3">Configure Static Route</h4>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[['Destination IP', newDest, setNewDest, 'e.g. 192.168.3.0'], ['Subnet Mask', newMask, setNewMask, 'e.g. 255.255.255.0'], ['Next Hop IP', newGw, setNewGw, 'e.g. 10.0.0.2']].map(([label, val, setter, placeholder]) => (
                    <div key={label}>
                      <label className="text-[9px] text-slate-500 block mb-0.5 font-bold">{label}</label>
                      <input type="text" placeholder={placeholder} value={val} onChange={(e) => setter(e.target.value)} className="w-full text-[11px] bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-slate-800 font-mono" />
                    </div>
                  ))}
                  <div>
                    <label className="text-[9px] text-slate-500 block mb-0.5 font-bold">Interface</label>
                    <select value={newIface} onChange={(e) => setNewIface(e.target.value)} className="w-full text-[11px] bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-slate-800">
                      {device.interfaces.map(i => (
                        <option key={i.id} value={i.id}>{i.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button onClick={handleAddRoute} className="px-3.5 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-[10px] font-bold flex items-center gap-1 cursor-pointer transition shadow-sm">
                    <PlusIcon size={12} /> Add Route
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-750 mb-2">Active Routing Table</h4>
                <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
                  <table className="w-full text-[11px] text-slate-700 font-mono">
                    <thead className="bg-slate-50 text-slate-600 text-left">
                      <tr>
                        <th className="p-2.5 border-b border-slate-200">Proto</th>
                        <th className="p-2.5 border-b border-slate-200">Destination</th>
                        <th className="p-2.5 border-b border-slate-200">Next Hop</th>
                        <th className="p-2.5 border-b border-slate-200">Port</th>
                        <th className="p-2.5 border-b border-slate-200">Metric</th>
                        <th className="p-2.5 border-b border-slate-200">Del</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {(device.routingTable || []).map((route, i) => (
                        <tr key={i} className="hover:bg-slate-50/50">
                          <td className="p-2.5">
                            <span className={`px-1.5 py-0.5 rounded text-[8px] font-sans font-bold ${
                              route.protocol === 'local' ? 'bg-slate-100 text-slate-600' :
                              route.protocol === 'static' ? 'bg-sky-50 text-sky-600 border border-sky-200' :
                              route.protocol === 'ospf' ? 'bg-violet-50 text-violet-600 border border-violet-200' : 'bg-pink-50 text-pink-600 border border-pink-200'
                            }`}>
                              {route.protocol.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-2.5">{route.destination}/{route.mask}</td>
                          <td className="p-2.5">{route.gateway === '0.0.0.0' ? 'Direct Link' : route.gateway}</td>
                          <td className="p-2.5">{route.interfaceId}</td>
                          <td className="p-2.5">{route.metric}</td>
                          <td className="p-2.5 text-slate-400">
                            {route.protocol === 'static' ? (
                              <button onClick={() => {
                                const idx = (device.staticRoutes || []).findIndex(r => r.destination === route.destination);
                                if (idx !== -1) handleDeleteRoute(idx);
                              }} className="text-red-500 hover:text-red-600 cursor-pointer">
                                <TrashIcon size={12} />
                              </button>
                            ) : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              {device.type === 'firewall' && (
                <div className="space-y-5">
                  <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                    <h4 className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-1.5">
                      <ShieldIcon size={14} className="text-sky-500" />
                      Add Firewall Security Policy
                    </h4>
                    <div className="grid grid-cols-6 gap-2 mb-3">
                      <div>
                        <label className="text-[9px] text-slate-500 font-bold block mb-0.5">Action</label>
                        <select value={newFwAction} onChange={(e) => setNewFwAction(e.target.value)} className="w-full text-[11px] bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800">
                          <option value="allow">ALLOW</option><option value="deny">DENY</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[9px] text-slate-500 font-bold block mb-0.5">Protocol</label>
                        <select value={newFwProto} onChange={(e) => setNewFwProto(e.target.value)} className="w-full text-[11px] bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800">
                          <option value="ICMP">ICMP</option><option value="HTTP">HTTP</option><option value="HTTPS">HTTPS</option><option value="DNS">DNS</option><option value="FTP">FTP</option><option value="SSH">SSH</option>
                        </select>
                      </div>
                      {[['Src Subnet', newFwSrc, setNewFwSrc], ['Dest Subnet', newFwDest, setNewFwDest], ['Dest Port', newFwPort, setNewFwPort]].map(([label, val, setter]) => (
                        <div key={label}>
                          <label className="text-[9px] text-slate-500 font-bold block mb-0.5">{label}</label>
                          <input type="text" value={val} onChange={(e) => setter(e.target.value)} className="w-full text-[11px] bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800" />
                        </div>
                      ))}
                      <div className="flex items-end justify-end">
                        <button onClick={handleAddFirewallRule} className="w-full py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-[10px] font-bold cursor-pointer shadow-sm transition">
                          Add Policy
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-700 mb-2">Firewall Security Policies Matrix</h4>
                    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                      <table className="w-full text-[11px] text-slate-700 font-mono">
                        <thead className="bg-slate-50 text-slate-600 text-left">
                          <tr>
                            <th className="p-2.5 border-b border-slate-200">Rule ID</th>
                            <th className="p-2.5 border-b border-slate-200">Action</th>
                            <th className="p-2.5 border-b border-slate-200">Protocol</th>
                            <th className="p-2.5 border-b border-slate-200">Src IP</th>
                            <th className="p-2.5 border-b border-slate-200">Dest IP</th>
                            <th className="p-2.5 border-b border-slate-200">Port</th>
                            <th className="p-2.5 border-b border-slate-200">Del</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {device.firewallRules?.map((rule, idx) => (
                            <tr key={rule.id} className="hover:bg-slate-50/50">
                              <td className="p-2.5 text-slate-500">#{idx + 1}</td>
                              <td className="p-2.5">
                                <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${rule.action === 'allow' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                                  {rule.action.toUpperCase()}
                                </span>
                              </td>
                              <td className="p-2.5">{rule.protocol}</td>
                              <td className="p-2.5">{rule.srcIp}</td>
                              <td className="p-2.5">{rule.destIp}</td>
                              <td className="p-2.5">{rule.port}</td>
                              <td className="p-2.5">
                                <button onClick={() => handleDeleteFirewallRule(rule.id)} className="text-red-500 hover:text-red-600 cursor-pointer">
                                  <TrashIcon size={12} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {device.type === 'router' && (
                <div className="space-y-5">
                  <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                    <h4 className="text-xs font-bold text-slate-700 mb-3">Add Access Control List (ACL)</h4>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                      <div>
                        <label className="text-[9px] text-slate-500 font-bold block mb-0.5">ACL Action</label>
                        <select value={newAclAction} onChange={(e) => setNewAclAction(e.target.value)} className="w-full text-[11px] bg-slate-55 bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800">
                          <option value="allow">ALLOW</option><option value="deny">DENY</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[9px] text-slate-500 font-bold block mb-0.5">Protocol</label>
                        <select value={newAclProto} onChange={(e) => setNewAclProto(e.target.value)} className="w-full text-[11px] bg-slate-55 bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800">
                          <option value="any">ANY</option><option value="ICMP">ICMP</option><option value="HTTP">HTTP</option><option value="HTTPS">HTTPS</option><option value="DNS">DNS</option>
                        </select>
                      </div>
                      {[['Source IP Filter', newAclSrc, setNewAclSrc], ['Dest IP Filter', newAclDest, setNewAclDest]].map(([label, val, setter]) => (
                        <div key={label}>
                          <label className="text-[9px] text-slate-500 font-bold block mb-0.5">{label}</label>
                          <input type="text" value={val} onChange={(e) => setter(e.target.value)} className="w-full text-[11px] bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-slate-800" />
                        </div>
                      ))}
                      <div className="flex items-end justify-end">
                        <button onClick={handleAddAcl} className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-[10px] font-bold cursor-pointer w-full transition shadow-sm">
                          Add ACL
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-700 mb-2">Active Access Control Rules</h4>
                    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                      <table className="w-full text-[11px] text-slate-700 font-mono">
                        <thead className="bg-slate-50 text-slate-600 text-left">
                          <tr>
                            <th className="p-2.5 border-b border-slate-200">Rule ID</th>
                            <th className="p-2.5 border-b border-slate-200">Action</th>
                            <th className="p-2.5 border-b border-slate-200">Protocol</th>
                            <th className="p-2.5 border-b border-slate-200">Src IP</th>
                            <th className="p-2.5 border-b border-slate-200">Dest IP</th>
                            <th className="p-2.5 border-b border-slate-200">Del</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {device.acls?.map((rule, idx) => (
                            <tr key={rule.id} className="hover:bg-slate-55 bg-slate-50/50">
                              <td className="p-2.5 text-slate-500">#{idx + 1}</td>
                              <td className="p-2.5">
                                <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${rule.action === 'allow' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                                  {rule.action.toUpperCase()}
                                </span>
                              </td>
                              <td className="p-2.5">{rule.protocol.toUpperCase()}</td>
                              <td className="p-2.5">{rule.srcIp}</td>
                              <td className="p-2.5">{rule.destIp}</td>
                              <td className="p-2.5">
                                <button onClick={() => handleDeleteAcl(rule.id)} className="text-red-500 hover:text-red-600 cursor-pointer">
                                  <TrashIcon size={12} />
                                </button>
                              </td>
                            </tr>
                          ))}
                          {(!device.acls || device.acls.length === 0) && (
                            <tr><td colSpan={6} className="p-4 text-center text-slate-400 italic">No ACL filters configured.</td></tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'services' && device.type === 'server' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-1.5">
                  <ServerIcon size={14} className="text-sky-500" />
                  Active Server Daemons
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  {Object.entries(device.serverServices || {}).map(([key, val]) => (
                    <button key={key} onClick={() => handleToggleService(key)} className={`p-4 border rounded-xl flex flex-col items-center justify-center gap-1 cursor-pointer transition ${val ? 'border-emerald-300 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'}`}>
                      <span className="text-xs font-bold uppercase">{key}</span>
                      <span className="text-[9px]">{val ? 'Online' : 'Offline'}</span>
                    </button>
                  ))}
                </div>
              </div>

              {device.serverServices?.dns && (
                <div className="space-y-4">
                  <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                    <h4 className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-1.5">
                      <GlobeIcon size={14} className="text-sky-500" />
                      Configure DNS Host Name Mappings
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-[9px] text-slate-500 font-bold block mb-0.5">Domain Name</label>
                        <input type="text" placeholder="e.g. google.com" value={newDomain} onChange={(e) => setNewDomain(e.target.value)} className="w-full text-xs bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 text-slate-800" />
                      </div>
                      <div>
                        <label className="text-[9px] text-slate-500 font-bold block mb-0.5">IP Address</label>
                        <input type="text" placeholder="e.g. 10.0.0.100" value={newDomainIp} onChange={(e) => setNewDomainIp(e.target.value)} className="w-full text-xs bg-slate-55 bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 text-slate-800" />
                      </div>
                      <div className="flex items-end justify-end">
                        <button onClick={handleAddDnsEntry} className="px-4 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer w-full justify-center h-8 transition shadow-sm">
                          <PlusIcon size={12} /> Bind Host
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-700 mb-2">Nameserver Host Bindings</h4>
                    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                      <table className="w-full text-[11px] text-slate-700 font-mono">
                        <thead className="bg-slate-50 text-slate-600 text-left">
                          <tr><th className="p-2.5 border-b border-slate-200">Domain Name</th><th className="p-2.5 border-b border-slate-200">Mapped IP</th><th className="p-2.5 border-b border-slate-200">Del</th></tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {device.dnsEntries?.map((entry, idx) => (
                            <tr key={idx} className="hover:bg-slate-55 bg-slate-50/50">
                              <td className="p-2.5">{entry.domain}</td><td className="p-2.5">{entry.ip}</td>
                              <td className="p-2.5">
                                <button onClick={() => handleDeleteDnsEntry(entry.domain)} className="text-red-500 hover:text-red-600 cursor-pointer">
                                  <TrashIcon size={12} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'diagnostics' && (
            <div className="space-y-5">
              {(device.type === 'pc' || device.type === 'server' || device.type === 'router') && (
                <div>
                  <h4 className="text-xs font-bold text-slate-700 mb-2">ARP Address Resolution Table Cache</h4>
                  <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <table className="w-full text-[11px] text-slate-700 font-mono">
                      <thead className="bg-slate-50 text-slate-600 text-left">
                        <tr><th className="p-2.5 border-b border-slate-200">IP Address</th><th className="p-2.5 border-b border-slate-200">MAC Address</th><th className="p-2.5 border-b border-slate-200">Lease Type</th></tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {Object.entries(device.arpTable).map(([ip, mac]) => (
                          <tr key={ip} className="hover:bg-slate-50/50">
                            <td className="p-2.5">{ip}</td><td className="p-2.5">{mac}</td>
                            <td className="p-2.5"><span className="text-[9px] px-1 bg-slate-100 rounded text-slate-500 font-bold uppercase">Dynamic</span></td>
                          </tr>
                        ))}
                        {Object.keys(device.arpTable).length === 0 && (
                          <tr><td colSpan={3} className="p-4 text-center text-slate-400 italic">ARP Table Cache is empty.</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {device.type === 'switch' && (
                <div>
                  <h4 className="text-xs font-bold text-slate-700 mb-2">Switch CAM Port MAC Table</h4>
                  <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    <table className="w-full text-[11px] text-slate-700 font-mono">
                      <thead className="bg-slate-50 text-slate-600 text-left">
                        <tr><th className="p-2.5 border-b border-slate-200">MAC Address</th><th className="p-2.5 border-b border-slate-200">Egress Interface Port</th><th className="p-2.5 border-b border-slate-200">Learned Timestamp</th></tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {Object.entries(device.macTable).map(([mac, val]) => (
                          <tr key={mac} className="hover:bg-slate-50/50">
                            <td className="p-2.5">{mac}</td><td className="p-2.5">{val.portId}</td><td className="p-2.5 text-slate-450">{new Date(val.learnedAt).toLocaleTimeString()}</td>
                          </tr>
                        ))}
                        {Object.keys(device.macTable).length === 0 && (
                          <tr><td colSpan={3} className="p-4 text-center text-slate-400 italic">Switch MAC table is empty.</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-2.5">
          <button onClick={onClose} className="px-4 py-2 border border-slate-250 hover:bg-slate-100 rounded-xl text-xs font-semibold text-slate-600 cursor-pointer transition">
            Cancel
          </button>
          <button onClick={handleSaveGeneral} className="px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 cursor-pointer shadow-md shadow-sky-500/10 transition">
            <SaveIcon size={14} /> Save Configurations
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 11. CENTRAL COORDINATOR APPLICATION
// ==========================================
function MainApp() {
  const {
    devices, cables, packets, events, activePacketId, setActivePacketId, activeDeviceId, setActiveDeviceId,
    simSpeed, setSimSpeed, globalPacketLoss, setGlobalPacketLoss, congestionMultiplier, setCongestionMultiplier,
    connectingSource, startConnecting, completeConnecting, cancelConnecting, addDevice, deleteDevice, updateDeviceConfig,
    deleteCable, createPacket, triggerDhcpRequest, runVisualDijkstra, dijkstraSteps, activeDijkstraStepIndex, dijkstraStartEnd,
    advanceDijkstraStep, clearDijkstraVisualization, triggerRipConvergence, undo, redo, canUndo, canRedo, exportState, importState,
    resetSimulation, isMultiplayerConnected, toggleMultiplayer, multiplayerCursors, addEvent,
    isDdosActive, setIsDdosActive, isArpSpoofActive, setIsArpSpoofActive, isDdosDefenseActive, setIsDdosDefenseActive, isArpSpoofDefenseActive, setIsArpSpoofDefenseActive
  } = useNetworkState();

  const [dijkstraStart, setDijkstraStart] = useState('');
  const [dijkstraEnd, setDijkstraEnd] = useState('');
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      try {
        const decoded = decodeURIComponent(atob(hash.substring(1)));
        const success = importState(decoded);
        if (success) addEvent('Topology loaded from shareable link!', 'success');
      } catch (e) {
        console.error('Failed to parse state from URL hash', e);
      }
    }
  }, []);

  const generateShareLink = () => {
    try {
      const stateJson = exportState();
      const encoded = btoa(encodeURIComponent(stateJson));
      const url = `${window.location.origin}${window.location.pathname}#${encoded}`;
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
      addEvent('Share link copied to clipboard!', 'success');
    } catch (e) {
      addEvent('Failed to create sharing link', 'error');
    }
  };

  const downloadStateJson = () => {
    const stateStr = exportState();
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(stateStr);
    const exportFileDefaultName = 'netsim-topology.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    addEvent('Topology exported as JSON file', 'success');
  };

  const handleImportSubmit = () => {
    const success = importState(importText);
    if (success) {
      setImportOpen(false);
      setImportText('');
    }
  };

  const activePacket = packets.find(p => p.id === activePacketId) || null;
  const activeDevice = devices.find(d => d.id === activeDeviceId) || null;

  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-[#E5DFD5] selection:bg-[#5485A3] selection:text-white">
      <header className="px-6 py-3 bg-[#1B1B1B] border-b border-[#2D2D2D] backdrop-blur-md flex items-center justify-between sticky top-0 z-45 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-tr from-[#5485A3] to-[#1C3342] rounded-xl shadow-md shadow-sky-500/10">
            <NetworkIcon size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-wider uppercase text-[#E5DFD5] m-0 flex items-center gap-1.5">
              NetSim Pro
              <span className="text-[9px] bg-[#1C3342] border border-[#2D2D2D] text-[#E5DFD5] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-normal">
                v2.0
              </span>
            </h1>
            <p className="text-[10px] text-slate-500 m-0 font-semibold">Interactive Computer Network Simulator</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button disabled={!canUndo} onClick={undo} title="Undo" className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-800 rounded-lg disabled:opacity-30 cursor-pointer shadow-sm">
            <UndoIcon size={14} />
          </button>
          <button disabled={!canRedo} onClick={redo} title="Redo" className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-800 rounded-lg disabled:opacity-30 cursor-pointer shadow-sm">
            <RedoIcon size={14} />
          </button>

          <div className="h-6 w-px bg-slate-200 mx-1" />

          <button onClick={triggerRipConvergence} className="px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-sm" title="Force RIP Convergence">
            <RotateCcwIcon size={12} className="text-violet-500" />
            RIP Convergence
          </button>

          <div className="flex items-center bg-white border border-slate-200 rounded-lg px-2 text-xs shadow-sm">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mr-1.5">Speed:</span>
            <select value={simSpeed} onChange={(e) => setSimSpeed(Number(e.target.value))} className="bg-transparent border-none text-xs font-bold text-slate-800 focus:outline-none cursor-pointer py-1">
              <option value="0.5">0.5x</option><option value="1">1.0x</option><option value="1.5">1.5x</option><option value="2">2.0x</option>
            </select>
          </div>

          <div className="h-6 w-px bg-slate-200 mx-1" />

          <button onClick={toggleMultiplayer} className={`px-3 py-1.5 border rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer transition shadow-sm ${isMultiplayerConnected ? 'bg-emerald-50 border-emerald-300 text-emerald-700' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800'}`}>
            <UsersIcon size={13} />{isMultiplayerConnected ? 'Collab Active' : 'Multiplayer'}
          </button>

          <button onClick={generateShareLink} className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white rounded-lg flex items-center gap-1.5 cursor-pointer shadow-md transition">
            <ShareIcon size={13} />{copiedLink ? 'Copied!' : 'Share'}
          </button>

          <button onClick={downloadStateJson} title="Export JSON" className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-800 rounded-lg cursor-pointer shadow-sm">
            <DownloadIcon size={13} />
          </button>
          <button onClick={() => setImportOpen(true)} title="Import JSON" className="p-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-800 rounded-lg cursor-pointer shadow-sm">
            <UploadIcon size={13} />
          </button>
          <button onClick={resetSimulation} title="Reset Workspace" className="p-2 bg-white hover:bg-red-50 border border-slate-200 text-red-500 hover:text-red-850 rounded-lg cursor-pointer shadow-sm">
            <TrashIcon size={13} />
          </button>
        </div>
      </header>

      <main className="flex-1 flex p-6 gap-6 min-h-0">
        <section className="w-64 flex flex-col gap-4 shrink-0">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col shadow-sm">
            <h3 className="text-xs font-bold text-slate-800 border-b border-slate-100 pb-2 mb-3 text-left">Device Library</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { type: 'pc', label: 'Workstation', icon: <MonitorIcon size={16} className="text-sky-500" /> },
                { type: 'router', label: 'L3 Router', icon: <CpuIcon size={16} className="text-violet-500" /> },
                { type: 'switch', label: 'L2 Switch', icon: <NetworkIcon size={16} className="text-emerald-500" /> },
                { type: 'firewall', label: 'Firewall', icon: <ShieldAlertIcon size={16} className="text-amber-500" /> },
                { type: 'server', label: 'Server Daemon', icon: <DatabaseIcon size={16} className="text-blue-500" /> },
                { type: 'cloud', label: 'WAN Cloud', icon: <CloudIcon size={16} className="text-pink-500" /> }
              ].map(item => (
                <button key={item.type} onClick={() => addDevice(item.type, 350 + Math.random() * 200, 200 + Math.random() * 150)} className="p-3 border border-slate-100 bg-slate-50/30 rounded-xl hover:border-sky-500/50 hover:bg-slate-50 transition flex flex-col items-center gap-1.5 cursor-pointer text-slate-600 hover:text-slate-800">
                  <span className="p-1.5 bg-white border border-slate-100 rounded-lg shadow-sm">{item.icon}</span>
                  <span className="text-[10px] font-bold text-center leading-tight">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col text-left shadow-sm">
            <h3 className="text-xs font-bold text-slate-800 border-b border-slate-100 pb-2 mb-3">OSPF Dijkstra Path Finder</h3>
            <div className="flex flex-col gap-2">
              {[['Source Node', dijkstraStart, setDijkstraStart], ['Target Node', dijkstraEnd, setDijkstraEnd]].map(([label, val, setter]) => (
                <div key={label}>
                  <label className="text-[9px] text-slate-500 block mb-0.5 uppercase tracking-wider font-bold">{label}</label>
                  <select value={val} onChange={(e) => setter(e.target.value)} className="w-full text-xs bg-slate-50 border border-slate-200 rounded p-1.5 text-slate-800 outline-none focus:border-sky-500 font-semibold">
                    <option value="">Select node...</option>
                    {devices.map(d => (<option key={d.id} value={d.id}>{d.name}</option>))}
                  </select>
                </div>
              ))}
              <button onClick={() => runVisualDijkstra(dijkstraStart, dijkstraEnd)} disabled={!dijkstraStart || !dijkstraEnd || dijkstraStart === dijkstraEnd} className="mt-2 w-full py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-xs font-bold text-white rounded-lg flex items-center justify-center gap-1 cursor-pointer transition shadow-sm">
                <PlayIcon size={12} /> Calculate SPF Path
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col text-left shadow-sm space-y-4">
            <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <ShieldAlertIcon size={14} className="text-red-500" />
              <h3 className="text-xs font-bold text-slate-800">Security Lab Attacks</h3>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-700">DDoS Flood Attacking</span>
                <input type="checkbox" checked={isDdosActive} onChange={(e) => setIsDdosActive(e.target.checked)} className="w-4 h-4 text-red-600 border-slate-300 rounded cursor-pointer" />
              </div>
              <div className="flex items-center gap-1.5 pl-2.5">
                <ShieldCheckIcon size={12} className="text-emerald-600" />
                <span className="text-[9px] font-bold text-slate-500 mr-auto">Firewall Rate Limiter</span>
                <input type="checkbox" disabled={!isDdosActive} checked={isDdosDefenseActive} onChange={(e) => setIsDdosDefenseActive(e.target.checked)} className="w-3.5 h-3.5 text-emerald-600 border-slate-300 rounded cursor-pointer disabled:opacity-30" />
              </div>
            </div>

            <div className="space-y-2 border-t border-slate-100 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-700">ARP Cache Poisoning</span>
                <input type="checkbox" checked={isArpSpoofActive} onChange={(e) => setIsArpSpoofActive(e.target.checked)} className="w-4 h-4 text-amber-600 border-slate-300 rounded cursor-pointer" />
              </div>
              <div className="flex items-center gap-1.5 pl-2.5">
                <ShieldCheckIcon size={12} className="text-emerald-600" />
                <span className="text-[9px] font-bold text-slate-500 mr-auto">Switch DAI Inspection</span>
                <input type="checkbox" disabled={!isArpSpoofActive} checked={isArpSpoofDefenseActive} onChange={(e) => setIsArpSpoofDefenseActive(e.target.checked)} className="w-3.5 h-3.5 text-emerald-600 border-slate-300 rounded cursor-pointer disabled:opacity-30" />
              </div>
            </div>
          </div>
        </section>

        <section className="flex-1 flex flex-col gap-6 min-w-0">
          {isDdosActive && (
            <div className={`p-2.5 border rounded-xl flex items-center justify-between text-xs font-bold shadow-sm ${isDdosDefenseActive ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-red-50 border-red-200 text-red-700 animate-pulse'}`}>
              <span>{isDdosDefenseActive ? 'DDoS Defense Enabled: Rate limiter active, filtering flood packets.' : 'DDoS Attack ACTIVE: Compromised PC flooding Server (Server CPU peaking 100%).'}</span>
            </div>
          )}

          {isArpSpoofActive && (
            <div className={`p-2.5 border rounded-xl flex items-center justify-between text-xs font-bold shadow-sm ${isArpSpoofDefenseActive ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
              <span>{isArpSpoofDefenseActive ? 'ARP Spoof Blocked: Switch DAI mapping filter checks active.' : 'ARP Spoof Poison ACTIVE: Client PC routing packet streams via rogue Attacker-PC.'}</span>
            </div>
          )}

          <NetworkCanvas
            devices={devices} cables={cables} packets={packets} connectingSource={connectingSource}
            startConnecting={startConnecting} completeConnecting={completeConnecting} cancelConnecting={cancelConnecting}
            deleteDevice={deleteDevice} deleteCable={deleteCable} updateDeviceConfig={updateDeviceConfig}
            setActiveDeviceId={setActiveDeviceId} setActivePacketId={setActivePacketId} createPacket={createPacket}
            multiplayerCursors={multiplayerCursors}
          />
          
          <EventLog events={events} />
        </section>

        <section className="w-80 flex flex-col gap-6 shrink-0 min-h-0">
          <div className="flex-1 min-h-[300px]">
            <Dashboard
              devices={devices} cables={cables} packets={packets} globalPacketLoss={globalPacketLoss}
              setGlobalPacketLoss={setGlobalPacketLoss} congestionMultiplier={congestionMultiplier} setCongestionMultiplier={setCongestionMultiplier}
            />
          </div>

          <DijkstraVisualizer
            devices={devices} dijkstraSteps={dijkstraSteps} activeStepIndex={activeDijkstraStepIndex}
            advanceStep={advanceDijkstraStep} clearVisualization={clearDijkstraVisualization} dijkstraStartEnd={dijkstraStartEnd}
          />

          {activePacketId && (
            <div className="flex-1 min-h-[280px]">
              <OsiInspector packet={activePacket} onClose={() => setActivePacketId(null)} />
            </div>
          )}
        </section>
      </main>

      {activeDeviceId && activeDevice && (
        <DeviceConfig device={activeDevice} onClose={() => setActiveDeviceId(null)} onUpdateConfig={updateDeviceConfig} triggerDhcpRequest={triggerDhcpRequest} />
      )}

      {importOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 text-left">
          <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-md shadow-xl p-6 text-slate-800">
            <h3 className="text-sm font-bold text-slate-900 mb-2">Import Network JSON</h3>
            <p className="text-[10px] text-slate-500 mb-4 font-semibold">Paste the exported simulator topology JSON code below to restore settings:</p>
            <textarea value={importText} onChange={(e) => setImportText(e.target.value)} placeholder="Paste JSON configurations code here..." rows={8} className="w-full text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 outline-none focus:border-sky-500 mb-4 resize-none" />
            <div className="flex justify-end gap-2.5">
              <button onClick={() => { setImportOpen(false); setImportText(''); }} className="px-4 py-2 border border-slate-250 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-500 cursor-pointer transition">Cancel</button>
              <button onClick={handleImportSubmit} className="px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-xl text-xs font-bold text-white cursor-pointer shadow-md transition">Import State</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 12. MOUNT DOM ENTRYPOINT
// ==========================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);
