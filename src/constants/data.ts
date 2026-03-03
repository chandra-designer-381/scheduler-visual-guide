import type { Resource, QueueJob, CompetitorStatus } from '../types';

export const DAYS = ['Mon, 02 Mar', 'Tue, 03 Mar', 'Wed, 04 Mar', 'Thu, 05 Mar', 'Fri, 06 Mar'];

export const RESOURCES: Resource[] = [
  {
    name: 'James Kershen',
    role: 'Senior Technician',
    skills: 'High voltage +2',
    jobs: [
      { day: 0, label: 'Denver', sub: '4 hrs · Lay Foundation', type: 'live', origin: 'manual' },
      { day: 1, label: 'Aurora', sub: '6 hrs · Run Cables', type: 'live', origin: 'manual', exec: 'in-progress' },
      { day: 2, label: 'Wheatridge', sub: '4 hrs · Lay Foundation', type: 'draft', origin: 'auto' },
      { day: 3, label: 'Aurora', sub: '4 hrs · Lay Foundation', type: 'draft', origin: 'auto' },
      { day: 4, label: 'Lakewood', sub: '8a-2p · Lay Foundation', type: 'draft', origin: 'manual' },
    ],
  },
  {
    name: 'Liam Hawthorne',
    role: 'Senior Technician',
    skills: 'High voltage +2',
    jobs: [
      { day: 0, label: 'Denver', sub: '4 hrs · Lay Foundation', type: 'live', origin: 'manual' },
      { day: 1, label: 'Lakewood', sub: '6 hrs · Run Cables', type: 'live', origin: 'manual', exec: 'overdue' },
      { day: 1, label: 'Boulder', sub: '3 hrs · Annual Perf', type: 'live', origin: 'manual', exec: 'stale' },
      { day: 2, label: 'Wheatridge', sub: '4 hrs · Lay Foundation', type: 'draft', origin: 'auto' },
      { day: 3, label: 'Lakewood', sub: '4 hrs · Lay Foundation', type: 'draft', origin: 'auto' },
      { day: 4, label: 'Aspen', sub: '3 hrs · Annual Perf', type: 'draft', origin: 'manual' },
    ],
  },
  {
    name: 'Sophie Caldwell',
    role: 'Senior Technician',
    skills: 'High voltage +2',
    jobs: [
      { day: 0, label: 'Parker', sub: '4 hrs · Lay Foundation', type: 'live', origin: 'manual' },
      { day: 1, label: 'Aurora', sub: '6 hrs · Run Cables', type: 'live', origin: 'manual' },
      { day: 2, label: 'Arvada', sub: '4 hrs · Lay Foundation', type: 'live', origin: 'manual' },
      { day: 3, label: 'Lakewood', sub: '4 hrs · Lay Foundation', type: 'draft', origin: 'auto' },
      { day: 4, label: 'Fort Collins', sub: '3 hrs · Prev Maint', type: 'draft', origin: 'auto' },
    ],
  },
  {
    name: 'Emma Thompson',
    role: 'Senior Technician',
    skills: 'High voltage +2',
    jobs: [
      { day: 0, label: 'Parker', sub: '4 hrs · Lay Foundation', type: 'live', origin: 'manual' },
      { day: 1, label: 'Aurora', sub: '6 hrs · Run Cables', type: 'live', origin: 'auto' },
      { day: 2, label: 'Arvada', sub: '4 hrs · Lay Foundation', type: 'live', origin: 'manual' },
      { day: 3, label: 'Wheatridge', sub: '4 hrs · Lay Foundation', type: 'draft', origin: 'auto' },
      { day: 4, label: 'Lakewood', sub: '8a-2p · Lay Foundation', type: 'live', origin: 'manual' },
    ],
  },
];

export const QUEUE_JOBS: QueueJob[] = [
  { id: 'J-64321', name: 'Annual System Perf Review', site: 'Bright Future Solar', tags: ['High voltage', 'Diagnostics', '+2'], status: 'Unassigned' },
  { id: 'J-12345', name: 'Solar Panel Cleaning', site: 'Bright Horizon Energy', tags: ['Electrical safety', 'High voltage', '+2'], status: 'Unassigned' },
  { id: 'J-98765', name: 'Semiannual Inverter Cal', site: 'EcoSun Technologies', tags: ['High voltage', 'Inverter', '+2'], status: 'Unassigned' },
  { id: 'J-13579', name: 'Wiring Inspection', site: 'SolarWave Innovations', tags: ['Wiring', 'Inverter', '+2'], status: 'Unassigned' },
];

export const SF_STATUSES: CompetitorStatus[] = [
  { label: 'Scheduled', color: '#f4d03f', text: '#333' },
  { label: 'Dispatched', color: '#5dade2', text: '#fff' },
  { label: 'In Progress', color: '#8e44ad', text: '#fff' },
  { label: 'Completed', color: '#27ae60', text: '#fff' },
  { label: 'Cannot Complete', color: '#95a5a6', text: '#fff' },
];

export const D365_STATUSES: CompetitorStatus[] = [
  { label: 'Scheduled', color: '#4A90D9', stripe: '#3b7dd0' },
  { label: 'Traveling', color: '#5DADE2', stripe: '#4a9ed4' },
  { label: 'In Progress', color: '#F39C12', stripe: '#e08e0b' },
  { label: 'Completed', color: '#27AE60', stripe: '#1e9650' },
  { label: 'Canceled', color: '#BDC3C7', stripe: '#a6adb1' },
];
