export interface User {
  username: string
}

export interface AuthInfo {
  user: User | null;
  loggedIn: boolean;
}

export function defaultAuth(): AuthInfo {
  return {
    user: null,
    loggedIn: false
  }
}

export default function getAuth(): AuthInfo {
  const username = localStorage.getItem("username")
  if (username && username.length > 0) {
    return {
      user: {
        username
      },
      loggedIn: true
    }
  } else {
    return {
      user: null,
      loggedIn: false
    }
  }
}
