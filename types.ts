export enum Actor {
  USER = 'User',
  ADMIN = 'Admin',
  /**
   * Role: The System (platform) acts as the automation engine that drives the entire workflow.
   * Responsibilities: It is responsible for processing the Client’s input, matching candidates, scheduling interviews,
   * triggering notifications, and managing document collection and payments.
   * Key Interactions: Automates tasks between Client, Sales Team, and Admin.
   */
  SYSTEM = 'System',
  /**
   * Role: The Client (Employer) is the end-user of the platform who is seeking to hire a Foreign Domestic Worker (FDW).
   * Responsibilities: They are responsible for providing the initial requirements, reviewing candidate matches,
   * and making final decisions regarding the hiring process.
   * Key Interactions: Interacts with Sales Team for requirements collection and reviews/selects candidates via the System.
   */
  CLIENT = 'Client',
  /**
   * Role: The Sales Team acts as the intermediary between the Client and the System.
   * Responsibilities: They guide the employer through the process, ensuring the employer’s requirements are met
   * and that they receive the best candidate match.
   * Key Interactions: Interacts with Client to gather requirements and works with the System to generate candidate matches.
   */
  SALES = 'Sales',
}

export interface WorkflowStep {
  id: string | number;
  title: string;
  actor: Actor;
  description: string;
  branches?: WorkflowStep[];
  isFinal?: boolean;
}