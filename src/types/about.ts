export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  tags?: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: '01',
    position: 'Operations & Customer Support',
    company: 'PT Asasta Nawasena Indonesia',
    period: '2024 - 2026',
    description: 'Managing technical operations and customer support for payment systems.',
    responsibilities: [
      'Systems Troubleshooting: Identify and resolve anomalies in unsettled transactions through technical intervention on Layer 1 and Layer 2 systems.',
      'Data Reconciliation: Conduct periodic audits of summary reports and balance Host/Remit data to ensure transaction database accuracy.',
      'Infrastructure Monitoring: Monitor Virtual Account (VA) bank flows and fund transfers in real-time to detect and report early system failures.',
      'Process Automation & Alerts: Manage automated monitoring systems (emails, alerts, and spam filters) to ensure quick and measurable technical issue response.',
      'Logistics & Control: Manage Cash and Overbooked (OB) control with high precision to maintain synchronization between physical records and digital data.'
    ],
    tags: ['System Operations', 'Customer Support', 'Data Reconciliation']
  }
];