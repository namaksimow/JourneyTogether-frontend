import { Button, Card, Col, Flex, List, Progress, Row, Typography } from 'antd'

import type { ParticipantSpend, RecentExpenseItem, SettlementItem, TripBudgetSummary } from '../../types/contracts'

interface TripDashboardProps {
  tripTitle: string
  tripDates: string
  summary: TripBudgetSummary
  participants: ParticipantSpend[]
  recentExpenses: RecentExpenseItem[]
  settlements: SettlementItem[]
  isOwner?: boolean
}

export function TripDashboard({
  tripTitle,
  tripDates,
  summary,
  participants,
  recentExpenses,
  settlements,
  isOwner = false,
}: TripDashboardProps) {
  return (
    <Flex vertical gap={16}>
      <div>
        <Typography.Title level={2} style={{ marginBottom: 4, marginTop: 0 }}>
          {tripTitle}
        </Typography.Title>
        <Typography.Text type="secondary">{tripDates}</Typography.Text>
      </div>

      <Row gutter={[16, 16]}>
        <Col lg={15} xs={24}>
          <Card
            extra={
              isOwner ? (
                <Button type="text">Редактировать поездку</Button>
              ) : null
            }
            title="Бюджет"
          >
            <Row gutter={[16, 12]}>
              <Col sm={8} xs={24}>
                <Typography.Text type="secondary">Бюджет</Typography.Text>
                <Typography.Title level={3} style={{ marginBottom: 0, marginTop: 0 }}>
                  {summary.budget}
                </Typography.Title>
              </Col>
              <Col sm={8} xs={24}>
                <Typography.Text type="secondary">Потрачено</Typography.Text>
                <Typography.Title level={3} style={{ marginBottom: 0, marginTop: 0 }}>
                  {summary.spent}
                </Typography.Title>
              </Col>
              <Col sm={8} xs={24}>
                <Typography.Text type="secondary">Осталось</Typography.Text>
                <Typography.Title level={3} style={{ marginBottom: 0, marginTop: 0 }}>
                  {summary.left}
                </Typography.Title>
              </Col>
            </Row>

            <div style={{ marginTop: 12 }}>
              <Progress percent={summary.progress_percent} showInfo={false} />
              <Flex justify="flex-end">
                <Typography.Text>{summary.progress_percent}%</Typography.Text>
              </Flex>
            </div>
          </Card>

          <Card
            extra={
              <Button type="link" style={{ paddingInline: 0 }}>
                Все траты
              </Button>
            }
            style={{ marginTop: 16 }}
            title="Последние траты"
          >
            <List
              dataSource={recentExpenses}
              renderItem={(expense) => (
                <List.Item>
                  <Flex align="center" justify="space-between" style={{ width: '100%' }}>
                    <div>
                      <Typography.Text strong>{expense.title}</Typography.Text>
                      <Typography.Text style={{ display: 'block' }} type="secondary">
                        {expense.category}
                      </Typography.Text>
                    </div>

                    <div>
                      <Typography.Text style={{ display: 'block' }} type="secondary">
                        Платил {expense.paid_by}
                      </Typography.Text>
                      <Typography.Text style={{ display: 'block' }} type="secondary">
                        {expense.expense_date}
                      </Typography.Text>
                    </div>

                    <Typography.Text strong>{expense.amount}</Typography.Text>
                  </Flex>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col lg={9} xs={24}>
          <Card
            extra={
              isOwner ? (
                <Button type="text">Редактировать участников</Button>
              ) : null
            }
            title="Участники"
          >
            <List
              dataSource={participants}
              renderItem={(participant) => (
                <List.Item>
                  <Flex align="center" justify="space-between" style={{ width: '100%' }}>
                    <Typography.Text strong>{participant.full_name}</Typography.Text>
                    <Typography.Text strong>{participant.total_share}</Typography.Text>
                  </Flex>
                </List.Item>
              )}
            />
          </Card>

          <Card style={{ marginTop: 16 }} title="Баланс">
            <Typography.Text style={{ display: 'block', marginBottom: 12 }} type="secondary">
              Кто кому должен
            </Typography.Text>
            <List
              dataSource={settlements}
              renderItem={(settlement) => (
                <List.Item>
                  <Flex align="center" justify="space-between" style={{ width: '100%' }}>
                    <Typography.Text>
                      {settlement.from_user} → {settlement.to_user}
                    </Typography.Text>
                    <Typography.Text strong>{settlement.amount}</Typography.Text>
                  </Flex>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </Flex>
  )
}
