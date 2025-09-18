// 共享的内存存储（仅用于演示）
export const users: any[] = []

export function addUser(user: any) {
  users.push(user)
}

export function findUserByEmail(email: string) {
  return users.find(user => user.email === email)
}

export function findUserById(id: string) {
  return users.find(user => user.id === id)
}
