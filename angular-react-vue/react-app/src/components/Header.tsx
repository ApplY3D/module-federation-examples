const elementStyle = {
  padding: '16px',
  margin: '2px',
  borderRadius: '8px',
  backgroundColor: '#61dafb',
  border: '3px solid rgba(0, 0, 0, 0.6)',
};

export const Header = () => {
  return (
    <div className='react-header' style={elementStyle}>
      Welcome to Your React App
    </div>
  );
};
