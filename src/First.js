function First (props) {

  let {FirstInfo}=props;
  console.log(FirstInfo)
  // console.log(props.FirstInfo.email)
  // console.log(props.FirstInfo.phone)

  return (
    <div>
    <h1>Hello First Component</h1>
    <div>Now main component </div>
    <div>After that last component</div>
    </div>
    
  );
}

export default First;
