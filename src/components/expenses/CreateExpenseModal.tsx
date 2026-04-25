import { Modal } from 'antd'

import { CreateExpenseForm } from './CreateExpenseForm'

interface CreateExpenseModalProps {
  open: boolean
  onClose?: () => void
  showCustomSplit?: boolean
}

export function CreateExpenseModal({ open, onClose, showCustomSplit = false }: CreateExpenseModalProps) {
  const handleClose = onClose ?? (() => undefined)

  return (
    <Modal destroyOnClose footer={null} onCancel={handleClose} open={open} title="Новая трата">
      <CreateExpenseForm showCustomSplit={showCustomSplit} />
    </Modal>
  )
}
