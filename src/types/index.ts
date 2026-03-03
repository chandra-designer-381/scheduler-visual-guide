export type JobType = 'live' | 'draft';
export type JobOrigin = 'manual' | 'auto';
export type ExecStatus = 'in-progress' | 'overdue' | 'stale' | null;
export type ViewMode = 'planning' | 'execution';

export interface SchedulerJob {
  day: number;
  label: string;
  sub: string;
  type: JobType;
  origin: JobOrigin;
  exec?: ExecStatus;
}

export interface Resource {
  name: string;
  role: string;
  skills: string;
  jobs: SchedulerJob[];
}

export interface QueueJob {
  id: string;
  name: string;
  site: string;
  tags: string[];
  status: string;
}

export interface CompetitorStatus {
  label: string;
  color: string;
  text?: string;
  stripe?: string;
}

export interface CardStyle {
  bg: string;
  border: string;
  borderStyle: string;
  opacity: number;
  textColor: string;
  subColor: string;
  isAuto: boolean;
  exec: ExecStatus | undefined;
  isDraft: boolean;
  isLive: boolean;
}
