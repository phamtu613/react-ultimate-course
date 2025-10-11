export interface User {
  id: string;
  fullName: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export interface UserFormData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  country: string;
}

export const COUNTRIES = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "UK", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "JP", label: "Japan" },
  { value: "BR", label: "Brazil" },
  { value: "IN", label: "India" },
  { value: "CN", label: "China" },
] as const;
