// Contains the interfaces and classes for the entire application globally to enable easier custom typing.

// Interface for the Job object

interface Job {
  id: string;
  job_title: string;
  salary: string;
  company_name: string;
  location: string;
  url: string;
  description: string;
  status: string;
}

interface JobsByStatus {
  [key: string]: Job[];
}

interface JobCardProps {
  job: Job;
  handleJobStatusChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

interface ColumnProps {
  jobs: Array<Job>;
  status: string;
}

interface ColumnProps {
  jobs: Job[];
  status: string;
  handleJobStatusChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

interface JobModalProps {
  open: boolean;
  handleClose: () => void;
  job: Job;
  handleSave: (updatedJob: any) => void;
}