export type User = {
  id: string;
  email: string;
  profile?: { name: string; avatarUrl?: string };
};

export function isAdmin(user: User): boolean {
  return user.email.endsWith("@admin.example.com");
}

export function displayName(user: User): string {
  if (user.profile && user.profile.name) {
    return user.profile.name;
  }
  return user.email;
}
