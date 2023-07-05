
const btns = ({num, setNum}) => {
  return (
    <div className="btns">
    <button onClick={() =>{
      if(num > 14){
        setNum(15)
      }else{  
        setNum(num + 1)
      }
    }} >+</button>
    <button onClick={() =>{
      if(num < 0){
        setNum(-1)
      }else{
        setNum(num - 1)
      }
      setNum(num - 1)
    }} >-</button>
     <button onClick={() =>{
      setNum(0)
    }} >reset</button>
    </div>
  )
}

export default btns