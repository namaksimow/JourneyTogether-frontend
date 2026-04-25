import { Card, ConfigProvider, Layout, Space, Tabs, Typography } from 'antd'

import { ExpensesTableSection } from '../components/expenses/ExpensesTableSection'
import { CreateExpenseForm } from '../components/expenses/CreateExpenseForm'
import { AppHeader } from '../components/layout/AppHeader'
import { TripDashboard } from '../components/trip/TripDashboard'
import { CreateTripForm } from '../components/trips/CreateTripForm'
import { TripsOverview } from '../components/trips/TripsOverview'
import {
  activeTrips,
  completedTrips,
  expenseTableRows,
  recentExpenses,
  settlements,
  tripBudgetSummary,
  tripParticipants,
} from '../mocks/uiData'

const { Content } = Layout

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2F7C77',
          colorBgLayout: '#ECEFF1',
          colorBgContainer: '#FFFFFF',
          borderRadius: 14,
          borderRadiusLG: 16,
          padding: 16,
          paddingSM: 12,
          paddingLG: 24,
          fontFamily: 'Manrope, Segoe UI, sans-serif',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader actionLabel="+ Трата" centerSubtitle="15 - 21 июня" centerTitle="Париж 2026" />

        <Content style={{ margin: '0 auto', maxWidth: 1280, padding: 24, width: '100%' }}>
          <Tabs
            defaultActiveKey="trips"
            items={[
              {
                key: 'trips',
                label: 'Мои поездки',
                children: (
                  <Space direction="vertical" size={24} style={{ display: 'flex' }}>
                    <TripsOverview activeTrips={activeTrips} completedTrips={completedTrips} />
                    <TripsOverview activeTrips={activeTrips} completedTrips={completedTrips} showEmptyState />
                  </Space>
                ),
              },
              {
                key: 'trip-details',
                label: 'Детали поездки',
                children: (
                  <Space direction="vertical" size={24} style={{ display: 'flex' }}>
                    <TripDashboard
                      participants={tripParticipants}
                      recentExpenses={recentExpenses}
                      settlements={settlements}
                      summary={tripBudgetSummary}
                      tripDates="15 - 21 июня"
                      tripTitle="Париж 2026"
                    />
                    <TripDashboard
                      isOwner
                      participants={tripParticipants}
                      recentExpenses={recentExpenses}
                      settlements={settlements}
                      summary={tripBudgetSummary}
                      tripDates="15 - 21 июня"
                      tripTitle="Париж 2026"
                    />
                  </Space>
                ),
              },
              {
                key: 'expenses',
                label: 'Все траты',
                children: (
                  <Space direction="vertical" size={24} style={{ display: 'flex' }}>
                    <ExpensesTableSection expenses={expenseTableRows} />
                    <ExpensesTableSection expenses={expenseTableRows} isOwner />
                  </Space>
                ),
              },
              {
                key: 'forms',
                label: 'Формы',
                children: (
                  <Space direction="vertical" size={16} style={{ display: 'flex' }}>
                    <Typography.Title level={3} style={{ margin: 0 }}>
                      Модальные формы
                    </Typography.Title>
                    <Space align="start" size={16} wrap>
                      <Card style={{ maxWidth: 460, width: '100%' }} title="Новая поездка">
                        <CreateTripForm />
                      </Card>

                      <Card style={{ maxWidth: 460, width: '100%' }} title="Новая трата (поровну)">
                        <CreateExpenseForm />
                      </Card>

                      <Card style={{ maxWidth: 460, width: '100%' }} title="Новая трата (свои доли)">
                        <CreateExpenseForm showCustomSplit />
                      </Card>
                    </Space>
                  </Space>
                ),
              },
            ]}
          />
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
