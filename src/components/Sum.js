export default function Sum(props) {
    return (
      <>
      <h1>Hello i m from Sum component</h1>
      value of x is {props.x}
      value of y is {props.y}
      <br/>
        {/* {props.x + props.y} */}
        {props.a + props.b}
      </>
    );
  }
  