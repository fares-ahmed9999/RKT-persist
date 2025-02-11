export type Role = keyof typeof ROLES;
type Permission = (typeof ROLES)[Role][number];

const ROLES = {
  admin: [
    "view:comments",
    "create:comments",
    "update:comments",
    "delete:comments",
  ],
  moderator: [
    "view:comments",
    "create:comments",
    "delete:ownComments",
    "update:ownComments",
  ],
  user: [
    "view:comments",
    "delete:comments",
    "delete:ownComments",
    "update:ownComments",
  ],
} as const;

export function hasPermission(
  user: { id: string; role: Role },
  permission: Permission
) {
  return (ROLES[user.role] as readonly Permission[]).includes(permission);
}
