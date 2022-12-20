import { User } from "src/app/user/model/user";

export interface Project {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  logo: string;
  management: number;
  developer: number;
  software: number;
  hardware: number;
  premises: number;
  furniture: number;
  sourcing: number;
  distribution: number;
  cost: number;
  revenue: number;
  profitability: boolean;
  user: User;
  tasks: any[];
}
