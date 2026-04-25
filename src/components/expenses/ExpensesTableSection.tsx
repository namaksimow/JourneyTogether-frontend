import { Button, Card, Flex, Segmented, Select, Table, Tag, Typography } from 'antd'
import type { TableProps } from 'antd'

import { categoryOptions } from '../../mocks/uiData'
import type { ExpenseTableItem } from '../../types/contracts'

interface ExpensesTableSectionProps {
  expenses: ExpenseTableItem[]
  isOwner?: boolean
}

export function ExpensesTableSection({ expenses, isOwner = false }: ExpensesTableSectionProps) {
  const baseColumns: TableProps<ExpenseTableItem>['columns'] = [
    {
      title: 'Название траты',
      key: 'title',
      render: (_, expense) => (
        <Flex vertical>
          <Typography.Text strong>{expense.title}</Typography.Text>
          <Typography.Text type="secondary">Платил {expense.paid_by}</Typography.Text>
        </Flex>
      ),
    },
    {
      title: 'Участники траты',
      key: 'participants',
      render: (_, expense) => (
        <Flex gap={6} wrap>
          {expense.participants.map((participant) => (
            <Tag key={`${expense.id}-${participant}`}>{participant}</Tag>
          ))}
        </Flex>
      ),
    },
    {
      title: 'Дата',
      dataIndex: 'expense_date',
      key: 'expense_date',
    },
    {
      title: 'Категория',
      key: 'category',
      render: (_, expense) => <Tag>{expense.category}</Tag>,
    },
    {
      title: 'Моя доля',
      dataIndex: 'my_share',
      key: 'my_share',
      align: 'right',
    },
    {
      title: 'Сумма',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (amount: string) => <Typography.Text strong>{amount}</Typography.Text>,
    },
  ]

  const columns: TableProps<ExpenseTableItem>['columns'] = isOwner
    ? [
        {
          title: '',
          key: 'edit',
          width: 68,
          render: () => (
            <Button size="small" type="text">
              Изм.
            </Button>
          ),
        },
        ...baseColumns,
      ]
    : baseColumns

  return (
    <Card
      title="Все траты"
      extra={
        <Flex gap={8} wrap>
          <Segmented defaultValue="all" options={[{ value: 'all', label: 'Все' }, { value: 'mine', label: 'Мои' }]} />
          <Select defaultValue={categoryOptions[0].value} options={categoryOptions} style={{ width: 170 }} />
        </Flex>
      }
    >
      <Table columns={columns} dataSource={expenses} pagination={false} rowKey="id" />
    </Card>
  )
}
