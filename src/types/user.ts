export interface AuthInfo {
  user: {
    username: string
    id: number
  } | null,
  loggedIn: boolean
}
