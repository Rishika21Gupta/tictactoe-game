// eslint-disable-next-line react/prop-types
const Square = ({value,onClick}) => {
  // console.log(children);
  // eslint-disable-next-line react/prop-types
  return (<button type="button" className="square" onClick={onClick}>
    {value}
    </button>
  );
  
  
  
};

export default Square;
