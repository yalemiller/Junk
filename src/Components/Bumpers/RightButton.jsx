// RightButton.js
function RightButton({ onClick, title, color }) {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    textAlign: 'center',
    fontSize: '35px',
    border: 'none',
    borderRadius: '5px',
    position: 'fixed',
    right: '0',
    position: 'absolute',
    bottom: '0',
    display: 'flex',
    justifyContent: 'space-around',
    float: 'left',
    width: '33%',
    bottom: '-5px',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      <div>
        <p>{title}</p>
      </div>
    </button>
  );
}

export default RightButton;
