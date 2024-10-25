import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser, editingUser } from "../../redux/userSlice";

function UserList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    email: "",
    id: Math.floor(Math.random() * 10000),
  });

  function handelInput(event) {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  }

  function addNewUser(event) {
    event.preventDefault();
    dispatch(addUser({ ...newUser, id: Math.floor(Math.random() * 10000) }));
    setNewUser({
      name: "",
      age: "",
      email: "",
    });
  }

  function editUser(event, user) {
    event.preventDefault();
    setNewUser(user);
  }

  function saveEditChanges(event) {
    event.preventDefault();
    dispatch(editingUser(newUser));
    setNewUser({
      name: "",
      age: "",
      email: "",
    });
  }
  return (
    <>
      <form className={styles.formContainer}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handelInput}
          value={newUser.name}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          onChange={handelInput}
          value={newUser.age}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handelInput}
          value={newUser.email}
        />
        <div className={styles.btnContainer}>
          <button onClick={addNewUser}>Add new user</button>
          <button onClick={saveEditChanges}>Save changes</button>
        </div>
      </form>
      <ul className={styles.ulContainer}>
        {users.map((user) => {
          return (
            <li key={user.id} className={styles.liContainer}>
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div>{user.email}</div>
              <button onClick={() => dispatch(deleteUser(user.id))}>
                Delete user
              </button>
              <button onClick={(e) => editUser(e, user)}>Editing user</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default UserList;
