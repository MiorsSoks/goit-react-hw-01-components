import PropTypes from "prop-types";
import FriendListItem from '../friendListItem/FriendListItem'
import { AllFriendList } from './friendList.styled'

export default function FriendList({ friends }) {
  return (
    <AllFriendList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          status={isOnline}
        />
      ))}
    </AllFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ),
};