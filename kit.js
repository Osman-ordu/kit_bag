// Info Widget
export const InfoArea = ({text}) => {
  return (
    <div className='c-infoarea'>
      <div className='c-infoarea-container'>
        <img src='/' />
        <p>{text}</p>
      </div>
    </div>
  )
}

// Table Line Key&Value
export const rowTable = ({data}) => {
return (
  <>
  {data.map((column,index) => (
    <li id={index}>
      <p>{column.key}</p>
      <p>{column.value}</p>
    </li>
  ))}
  </>
)
}