import { Button, Col, DatePicker, Form, Input, Row, Segmented, Select, Space } from 'antd'

import { currencyOptions, splitModeOptions } from '../../mocks/uiData'

export function CreateTripForm() {
  return (
    <Form layout="vertical">
      <Form.Item label="Название поездки" required>
        <Input placeholder="Например, Париж 2026" />
      </Form.Item>

      <Row gutter={12}>
        <Col span={12}>
          <Form.Item label="Начало" required>
            <DatePicker placeholder="Начало" style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Конец" required>
            <DatePicker placeholder="Конец" style={{ width: '100%' }} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Бюджет" required>
        <Input placeholder="Например, 100 000" />
      </Form.Item>

      <Form.Item label="Валюта" required>
        <Select options={currencyOptions} placeholder="Выберите валюту" />
      </Form.Item>

      <Form.Item label="Режим деления" required>
        <Segmented block defaultValue={splitModeOptions[0].value} options={splitModeOptions} />
      </Form.Item>

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
