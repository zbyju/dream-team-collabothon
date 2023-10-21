// Transactions table
export interface Transaction {
  id: number;
  date: Date;
  description: string | null;
  category: number | null;
  user: number;
}

// Users table
export interface User {
  id: number;
  name: string | null;
  esg: number | null;
  password: string | null;
}

// Categories table
export interface Category {
  id: number;
  name: string;
  description: string | null;
  score: number | null;
}

// Stats table
export interface Stat {
  id: number;
  esg: number;
}

