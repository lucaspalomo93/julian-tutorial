import './list.css';
import useUsers from '../../hooks/useUsers';
import MyUsers from '../myUsers/myUsers';

const List = () => {
  const { data, loading, error } = useUsers();

  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <MyUsers />
    </div>
  );
};

export default List;
