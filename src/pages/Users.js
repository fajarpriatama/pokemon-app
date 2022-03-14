import useUser from "../hooks/useUser";
import "../App.css";


function User() {
    const { users } = useUser ();
    return (
        <div className="App">
            <h1>users</h1>
            {users.map((item, index) => {
                return (
                    <p key={item.id}>
                        {item?.first_name} {item?.last_name}
                    </p>
                );
            })}
        </div>
    );
}

export default User;