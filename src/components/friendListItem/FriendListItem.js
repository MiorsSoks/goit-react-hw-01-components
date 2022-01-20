import {
  OneFriend,
  Status,
  FriendImg,
  FriendName,
} from './friendListItem.styled'

export default function FriendListItem({ avatar, name, status, id }) {
  return (
    <OneFriend key={id}>
      <Status status={status ? 'green' : 'red'}></Status>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </OneFriend>
  );
}