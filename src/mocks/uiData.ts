import type {
  CompletedTripItem,
  ExpenseTableItem,
  ParticipantSpend,
  RecentExpenseItem,
  SettlementItem,
  TripBudgetSummary,
  TripSummaryCard,
} from '../types/contracts'

const parisCover =
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80'

export const activeTrips: TripSummaryCard[] = [
  {
    id: 10,
    title: 'Париж 2026',
    date_range: '15 - 21 июня 2026',
    spent_amount: '120 000 ₽',
    budget_amount: '200 000 ₽',
    progress_percent: 60,
    cover_image_url: parisCover,
  },
  {
    id: 11,
    title: 'Париж 2026',
    date_range: '15 - 21 июня 2026',
    spent_amount: '120 000 ₽',
    budget_amount: '200 000 ₽',
    progress_percent: 60,
    cover_image_url: parisCover,
  },
  {
    id: 12,
    title: 'Париж 2026',
    date_range: '15 - 21 июня 2026',
    spent_amount: '120 000 ₽',
    budget_amount: '200 000 ₽',
    progress_percent: 60,
    cover_image_url: parisCover,
  },
  {
    id: 13,
    title: 'Париж 2026',
    date_range: '15 - 21 июня 2026',
    spent_amount: '120 000 ₽',
    budget_amount: '200 000 ₽',
    progress_percent: 60,
    cover_image_url: parisCover,
  },
]

export const completedTrips: CompletedTripItem[] = [
  {
    id: 110,
    title: 'Париж 2026',
    date_range: '15 - 21 июня 2026',
    cover_image_url: parisCover,
  },
  {
    id: 111,
    title: 'Париж 2026',
    date_range: '15 - 21 июня 2026',
    cover_image_url: parisCover,
  },
]

export const tripBudgetSummary: TripBudgetSummary = {
  budget: '200 000 ₽',
  spent: '120 000 ₽',
  left: '80 000 ₽',
  progress_percent: 60,
}

export const tripParticipants: ParticipantSpend[] = [
  { id: 100, full_name: 'Юля', total_share: '35 000 ₽' },
  { id: 101, full_name: 'Илья', total_share: '27 500 ₽' },
  { id: 102, full_name: 'Никита', total_share: '30 000 ₽' },
  { id: 103, full_name: 'Миша', total_share: '27 500 ₽' },
]

export const recentExpenses: RecentExpenseItem[] = [
  {
    id: 1000,
    title: 'Ужин в ресторане',
    category: 'Еда',
    paid_by: 'Миша',
    expense_date: '18 июня 2026',
    amount: '- 6 000 ₽',
  },
  {
    id: 1001,
    title: 'Ужин в ресторане',
    category: 'Еда',
    paid_by: 'Миша',
    expense_date: '18 июня 2026',
    amount: '- 6 000 ₽',
  },
  {
    id: 1002,
    title: 'Ужин в ресторане',
    category: 'Еда',
    paid_by: 'Миша',
    expense_date: '18 июня 2026',
    amount: '- 6 000 ₽',
  },
  {
    id: 1003,
    title: 'Ужин в ресторане',
    category: 'Еда',
    paid_by: 'Миша',
    expense_date: '18 июня 2026',
    amount: '- 6 000 ₽',
  },
  {
    id: 1004,
    title: 'Ужин в ресторане',
    category: 'Еда',
    paid_by: 'Миша',
    expense_date: '18 июня 2026',
    amount: '- 6 000 ₽',
  },
  {
    id: 1005,
    title: 'Ужин в ресторане',
    category: 'Еда',
    paid_by: 'Миша',
    expense_date: '18 июня 2026',
    amount: '- 6 000 ₽',
  },
]

export const settlements: SettlementItem[] = [
  { id: 2000, from_user: 'Юля', to_user: 'Миша', amount: '2 500 ₽' },
  { id: 2001, from_user: 'Юля', to_user: 'Илья', amount: '2 500 ₽' },
  { id: 2002, from_user: 'Юля', to_user: 'Никита', amount: '2 500 ₽' },
  { id: 2003, from_user: 'Никита', to_user: 'Миша', amount: '2 500 ₽' },
  { id: 2004, from_user: 'Никита', to_user: 'Илья', amount: '2 500 ₽' },
]

export const expenseTableRows: ExpenseTableItem[] = [
  {
    id: 3000,
    title: 'Ужин в ресторане',
    paid_by: 'Миша',
    participants: ['Никита', 'Илья', 'Юля', 'Миша'],
    expense_date: '18 июня 2026',
    category: 'Еда',
    my_share: '3 000 ₽',
    amount: '6 000 ₽',
  },
  {
    id: 3001,
    title: 'Ужин в ресторане',
    paid_by: 'Миша',
    participants: ['Никита', 'Илья', 'Юля', 'Миша'],
    expense_date: '18 июня 2026',
    category: 'Еда',
    my_share: '3 000 ₽',
    amount: '6 000 ₽',
  },
  {
    id: 3002,
    title: 'Ужин в ресторане',
    paid_by: 'Миша',
    participants: ['Никита', 'Илья', 'Юля', 'Миша'],
    expense_date: '18 июня 2026',
    category: 'Еда',
    my_share: '3 000 ₽',
    amount: '6 000 ₽',
  },
  {
    id: 3003,
    title: 'Ужин в ресторане',
    paid_by: 'Миша',
    participants: ['Никита', 'Илья', 'Юля', 'Миша'],
    expense_date: '18 июня 2026',
    category: 'Еда',
    my_share: '3 000 ₽',
    amount: '6 000 ₽',
  },
  {
    id: 3004,
    title: 'Ужин в ресторане',
    paid_by: 'Миша',
    participants: ['Никита', 'Илья', 'Юля', 'Миша'],
    expense_date: '18 июня 2026',
    category: 'Еда',
    my_share: '3 000 ₽',
    amount: '6 000 ₽',
  },
  {
    id: 3005,
    title: 'Ужин в ресторане',
    paid_by: 'Миша',
    participants: ['Никита', 'Илья', 'Юля', 'Миша'],
    expense_date: '18 июня 2026',
    category: 'Еда',
    my_share: '3 000 ₽',
    amount: '6 000 ₽',
  },
]

export const currencyOptions = [
  { value: 'EUR', label: 'EUR' },
  { value: 'USD', label: 'USD' },
  { value: 'RUB', label: 'RUB' },
]

export const categoryOptions = [
  { value: 'all', label: 'Все категории' },
  { value: 'food', label: 'Еда' },
  { value: 'transport', label: 'Транспорт' },
  { value: 'housing', label: 'Жилье' },
]

export const participantOptions = [
  { value: 'nikita', label: 'Никита' },
  { value: 'ilya', label: 'Илья' },
  { value: 'yulia', label: 'Юля' },
  { value: 'misha', label: 'Миша' },
]

export const splitModeOptions = [
  { value: 'equal', label: 'Поровну' },
  { value: 'custom', label: 'Свои доли' },
]
