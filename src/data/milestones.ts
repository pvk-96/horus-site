export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'complete' | 'in-progress' | 'planned';
}

export const milestones: Milestone[] = [
  {
    id: 'M1',
    title: 'Arch ISO Build Pipeline & Boot-Path Validation',
    description: 'Establish repeatable ISO generation, validate boot sequence, and verify live-session initialization.',
    status: 'complete'
  },
  {
    id: 'M2',
    title: 'Graphical Live-Session Integration & Desktop Runtime Validation',
    description: 'Integrate desktop environment into live session, validate graphical boot, and confirm runtime behavior.',
    status: 'complete'
  },
  {
    id: 'M3',
    title: 'Installation Workflow Engineering & System Provisioning',
    description: 'Develop installation workflow, implement system provisioning logic, and validate installed-system boot.',
    status: 'in-progress'
  },
  {
    id: 'M4',
    title: 'Limine Bootloader Integration & Boot-Entry Orchestration',
    description: 'Integrate Limine bootloader, configure boot entries, and validate boot-time behavior.',
    status: 'planned'
  },
  {
    id: 'M5',
    title: 'Visual Identity Integration & Distribution-Level Desktop Refinement',
    description: 'Apply visual identity system-wide, refine desktop integration, and validate brand consistency.',
    status: 'planned'
  },
  {
    id: 'M6',
    title: 'Release Qualification, Compatibility Assessment & Quality Assurance',
    description: 'Perform release qualification testing, assess hardware compatibility, and validate distribution readiness.',
    status: 'planned'
  }
];

export interface HistoryEvent {
  date: string;
  label: string;
  description: string;
}

export const history: HistoryEvent[] = [
  {
    date: '2024-11-09',
    label: 'Project Start',
    description: 'Initial development began on HORUS OS as an independent Linux distribution project.'
  },
  {
    date: '~2025-01',
    label: 'First Pause',
    description: 'Development paused after approximately two months of initial work.'
  },
  {
    date: '~2025-06',
    label: 'Development Restart',
    description: 'Project resumed with refined direction and updated architectural approach.'
  },
  {
    date: '~2025-10',
    label: 'Second Pause',
    description: 'Development paused again as project direction was re-evaluated.'
  },
  {
    date: '2026-05',
    label: 'Brief Restart',
    description: 'Short development period with focus on core infrastructure.'
  },
  {
    date: '2026-05',
    label: 'Project Shelved',
    description: 'Development temporarily shelved during May 2026.'
  },
  {
    date: '2026',
    label: 'Arch-Based Direction',
    description: 'Project transitioned to Arch Linux foundation during 2026. Current engineering milestones reflect this direction.'
  }
];
