import {
  Button,
  Card,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Segmented,
  Select,
  Space,
  Typography,
} from 'antd'

import { categoryOptions, participantOptions, splitModeOptions } from '../../mocks/uiData'

interface CreateExpenseFormProps {
  showCustomSplit?: boolean
}

export function CreateExpenseForm({ showCustomSplit = false }: CreateExpenseFormProps) {
  return (
    <Form layout="vertical">
      <Form.Item label="Сумма" required>
        <Input placeholder="Например, 3 500 ₽" />
      </Form.Item>

      <Form.Item label="Название" required>
        <Input placeholder="Например, Ужин в ресторане" />
      </Form.Item>

      <Form.Item label="Категория" required>
        <Select options={categoryOptions.slice(1)} placeholder="Выберите категорию" />
      </Form.Item>

      <Row gutter={12}>
        <Col span={12}>
          <Form.Item label="Кто платил" required>
            <Select options={participantOptions} placeholder="Участник" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Дата траты" required>
            <DatePicker placeholder="Дата" style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Участники" required>
        <Select mode="multiple" options={participantOptions} placeholder="Выберите участников" />
      </Form.Item>

      <Form.Item label="Режим деления" required>
        <Segmented
          block
          defaultValue={showCustomSplit ? splitModeOptions[1].value : splitModeOptions[0].value}
          options={splitModeOptions}
        />
      </Form.Item>

      {showCustomSplit ? (
        <Card size="small" style={{ marginBottom: 16 }}>
          <Flex vertical gap={10}>
            {participantOptions.map((participant) => (
              <Flex align="center" justify="space-between" key={participant.value}>
                <Typography.Text>{participant.label}</Typography.Text>
                <InputNumber addonAfter="₽" defaultValue={1000} min={0} style={{ width: 150 }} />
              </Flex>
            ))}

            <Typography.Text type="secondary">Итого: 4 000 ₽ из 4 000 ₽</Typography.Text>
          </Flex>
        </Card>
      ) : null}

      <Space direction="vertical" size={8} style={{ display: 'flex' }}>
        <Button block type="primary">
          Сохранить
        </Button>
        <Button block type="text">
          Отмена
        </Button>
      </Space>
    </Form>
  )
}
