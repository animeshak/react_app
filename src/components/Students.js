function Students(props) {
    const {name,age,city} = props.data; 
  return (
    <>
    <h3> {name} {age} {city}</h3>
    <div>
    {props.data.name}
    </div>
    <div>
    {props.data.age}
    </div>
    <div>
    {props.data.city}
    </div>
    </>
  )
}

export default Students;