import { create } from 'zustand'

import type { AuthUser } from '../types/contracts'

export interface AuthStoreState {
  currentUser: AuthUser | null
  accessToken: string | null
  tokenType: 'Bearer' | null
  isAuthenticated: boolean
}

export const useAuthStore = create<AuthStoreState>()(() => ({
  currentUser: null,
  accessToken: null,
  tokenType: null,
  isAuthenticated: false,
}))
