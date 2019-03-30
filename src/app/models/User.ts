export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  address?: {
    street?: string;
    houseNumber?: number;
    city?: string;
  };
}
