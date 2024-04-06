import { Modal } from 'antd';

interface AddModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  children: React.ReactNode;
  title: string;
  width?: string;
}

const CustomModal: React.FC<AddModalProps> = ({
  isVisible,
  onClose,
  children,
  title,
  width = '50%',
}) => {
  return (
    <Modal
      title={title}
      width={width}
      open={isVisible}
      onCancel={onClose}
      footer={false}
      maskClosable={false}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
