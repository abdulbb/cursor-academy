export interface RawTicket {
  id: string;
  createdAt: string;
  status: string;
  reopened: string;
  slaHours: string;
}

export interface Ticket {
  id: string;
  createdAt: Date;
  status: "open" | "resolved" | "pending";
  reopened: boolean;
  slaHours: number;
}
