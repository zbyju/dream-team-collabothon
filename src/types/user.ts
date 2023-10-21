export interface AuthInfo {
  user: {
    username: string
  } | null,
  loggedIn: boolean
}
