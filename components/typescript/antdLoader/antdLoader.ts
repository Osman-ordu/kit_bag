import { Spin } from 'antd';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
      }}>
      <Spin size='large' />
    </div>
  );
};

export default Loader;
