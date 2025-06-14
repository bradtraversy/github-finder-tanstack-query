import { FaClock, FaUser } from 'react-icons/fa';

type RecentSearchesProps = {
  users: string[];
  onSelect: (username: string) => void;
};

const RecentSearches = ({ users, onSelect }: RecentSearchesProps) => {
  return (
    <div className='recent-searches'>
      <div className='recent-header'>
        <FaClock />
        <h3>Recent Searches</h3>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <button onClick={() => onSelect(user)}>
              <FaUser className='user-icon' />
              {user}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearches;
