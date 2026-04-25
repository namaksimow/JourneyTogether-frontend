import { Button, Card, Col, Empty, Flex, Row, Typography } from 'antd'

import type { CompletedTripItem, TripSummaryCard } from '../../types/contracts'
import { CompletedTripsCard } from './CompletedTripsCard'
import { TripCard } from './TripCard'

interface TripsOverviewProps {
  activeTrips: TripSummaryCard[]
  completedTrips: CompletedTripItem[]
  showEmptyState?: boolean
}

export function TripsOverview({ activeTrips, completedTrips, showEmptyState = false }: TripsOverviewProps) {
  const visibleActiveTrips = showEmptyState ? [] : activeTrips

  return (
    <Flex vertical gap={20}>
      <div>
        <Typography.Title level={2} style={{ marginBottom: 4, marginTop: 0 }}>
          Мои поездки
        </Typography.Title>
        <Typography.Text type="secondary">
          {visibleActiveTrips.length} активных · {completedTrips.length} завершено
        </Typography.Text>
      </div>

      <Row align="top" gutter={[16, 16]}>
        <Col lg={18} xs={24}>
          {showEmptyState ? (
            <Card>
              <Empty description="У вас пока нет активных групповых поездок">
                <Button type="primary">+ Создать поездку</Button>
              </Empty>
            </Card>
          ) : (
            <Row gutter={[16, 16]}>
              {activeTrips.map((trip) => (
                <Col key={trip.id} md={12} xl={8} xs={24}>
                  <TripCard trip={trip} />
                </Col>
              ))}
            </Row>
          )}
        </Col>

        <Col lg={6} xs={24}>
          <CompletedTripsCard trips={completedTrips} />
        </Col>
      </Row>
    </Flex>
  )
}
