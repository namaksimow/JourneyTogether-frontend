import { create } from 'zustand'

export interface UiStoreState {
  isCreateTripOpen: boolean
  isCreateExpenseOpen: boolean
  editingExpenseId: number | null
  isFinishTripOpen: boolean
}

export const useUiStore = create<UiStoreState>()(() => ({
  isCreateTripOpen: false,
  isCreateExpenseOpen: false,
  editingExpenseId: null,
  isFinishTripOpen: false,
}))
