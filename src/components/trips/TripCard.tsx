import { Card, Flex, Progress, Typography } from 'antd'

import type { TripSummaryCard } from '../../types/contracts'

interface TripCardProps {
  trip: TripSummaryCard
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <Card
      hoverable
      cover={<img alt={trip.title} src={trip.cover_image_url} style={{ height: 140, objectFit: 'cover' }} />}
    >
      <Typography.Title level={4} style={{ marginBottom: 4, marginTop: 0 }}>
        {trip.title}
      </Typography.Title>
      <Typography.Text type="secondary">{trip.date_range}</Typography.Text>

      <div style={{ marginTop: 12 }}>
        <Progress percent={trip.progress_percent} showInfo={false} size="small" />
        <Flex align="center" justify="space-between">
          <Typography.Text strong>
            {trip.spent_amount} / {trip.budget_amount}
          </Typography.Text>
          <Typography.Text>{trip.progress_percent}%</Typography.Text>
        </Flex>
      </div>
    </Card>
  )
}
