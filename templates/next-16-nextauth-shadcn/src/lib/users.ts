type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const users: User[] = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "demo123",
  },
];

export function findUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email);
}

export function createUser(name: string, email: string, password: string): User {
  const newUser: User = {
    id: String(users.length + 1),
    name,
    email,
    password,
  };
  users.push(newUser);
  return newUser;
}

export function validateUser(email: string, password: string): User | null {
  const user = findUserByEmail(email);
  if (user && user.password === password) {
    return user;
  }
  return null;
}

