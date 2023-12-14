import List from '../../components/list/list';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <List />
      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default Users;
