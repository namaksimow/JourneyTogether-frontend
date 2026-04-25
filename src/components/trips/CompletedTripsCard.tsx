import { Avatar, Button, Card, List, Typography } from 'antd'

import type { CompletedTripItem } from '../../types/contracts'

interface CompletedTripsCardProps {
  trips: CompletedTripItem[]
}

export function CompletedTripsCard({ trips }: CompletedTripsCardProps) {
  return (
    <Card title="Завершенные" extra={<Typography.Text type="secondary">{trips.length}</Typography.Text>}>
      <List
        dataSource={trips}
        itemLayout="horizontal"
        renderItem={(trip) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar shape="square" size={44} src={trip.cover_image_url} />}
              title={trip.title}
              description={trip.date_range}
            />
          </List.Item>
        )}
      />
      <Button type="primary" block>
        Показать еще
      </Button>
    </Card>
  )
}
