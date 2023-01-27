import { useState } from "react";
import User from "./User"


function UsersListing2(props) {
    const [users ,setUsers] = useState([]);


    function fetchData(){
        fetch("https://reqres.in/api/users?page=2")
        .then(response => response.json())
        .then(data => {
          var records = data.data
          var rows = [];

          for(let i = 0; i< records.length; i++){
            rows.push(<User key={i} data ={{id: records[i].id, name:records[i].first_name+" "+records[i].last_name,email:records[i].email,avatar:records[i].avatar}}/>)
          }
          setUsers(rows);
        });
      }

  return (<>
    <button onClick={fetchData}>Fetch Data</button>
    <table border="2">
    {users}
    </table>
    </>
  )
}

export default UsersListing2