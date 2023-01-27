import User from "./User"

function UserListing(props) {

    function fetchData(){
        fetch("https://reqres.in/api/users?page=2")
        .then(response => response.json())
        .then(data => {
          console.table(data.data)
        });
      }

  return (
    <>
    <button onClick={fetchData}>Fetch Data</button>
    <User id= "123" name="michael" email="mivahel@gmail" avatar="https://reqres.in/img/faces/7-image.jpg"/>
    </>
  )
}

export default UserListing
