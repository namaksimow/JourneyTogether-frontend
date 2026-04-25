export interface AuthUser {
  id: number
  first_name: string
  last_name: string
  nickname: string
  email: string
}

export interface TripSummaryCard {
  id: number
  title: string
  date_range: string
  spent_amount: string
  budget_amount: string
  progress_percent: number
  cover_image_url: string
}

export interface CompletedTripItem {
  id: number
  title: string
  date_range: string
  cover_image_url: string
}

export interface TripBudgetSummary {
  budget: string
  spent: string
  left: string
  progress_percent: number
}

export interface ParticipantSpend {
  id: number
  full_name: string
  total_share: string
}

export interface RecentExpenseItem {
  id: number
  title: string
  category: string
  paid_by: string
  expense_date: string
  amount: string
}

export interface SettlementItem {
  id: number
  from_user: string
  to_user: string
  amount: string
}

export interface ExpenseTableItem {
  id: number
  title: string
  paid_by: string
  participants: string[]
  expense_date: string
  category: string
  my_share: string
  amount: string
}
