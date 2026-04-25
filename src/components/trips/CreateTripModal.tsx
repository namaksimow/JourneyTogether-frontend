import { Modal } from 'antd'

import { CreateTripForm } from './CreateTripForm'

interface CreateTripModalProps {
  open: boolean
  onClose?: () => void
}

export function CreateTripModal({ open, onClose }: CreateTripModalProps) {
  const handleClose = onClose ?? (() => undefined)

  return (
    <Modal destroyOnClose footer={null} onCancel={handleClose} open={open} title="Новая поездка">
      <CreateTripForm />
    </Modal>
  )
}
