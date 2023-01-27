import Add from "./components/Add";
import Sub from "./components/Sub";
import Sum from "./components/Sum";
import Students from "./components/Students";
import UserListing from "./components/UserListing";
import UsersListing2 from "./components/UsersListing2";
import Usersum from "./components/Usersum";



function App() {

  var student1 = {
    name:"animesh",
    age:32,
    city:"nagpur"
  }
  var student2 = {
    name:"ani",
    age:21,
    city:"usa"
  }
  function showData(){
    alert("i m from showData")
  }

  function fetchData(){
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(data => {
      console.table(data.data)
    });
  }

// create user component with props id name email avatar
  return( 
    //if anyone has error or any doubt whiledownloading 
    // react app then 
    // npm install -g create-react-app
    // npx create-react-app myapp

     //<>
    // <h2> i m from root function</h2>
    // <h1>Hello world</h1>
    // {5*5}
    //{/* <Add/>
    //<Sub/>
    //<Sum x="6" y="10"/>
    //<Sum a={6} b={10}/> */}
    // <>
    // <button onClick={showData}>Show Data</button>
    // <button onClick={fetchData}>Show Data</button>
    // <Students data={student1}/>
    // <Students data={student2}/>
    // <Students data={{name:"ritika",age:"22",city:"pune"}}/>
    <>  
    <UsersListing2/>
    <Usersum/>
     </>
);
}

export default App;
