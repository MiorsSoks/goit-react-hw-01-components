import PropTypes from 'prop-types';
import {UserCard, Profile, Description, Avatar, Name, TagAndLocation, Stats, StatItems, Label, Quantity} from './User.styled'

export default function User({ avatar, name, tag, location, stats }) {
  return <UserCard>
    <Profile>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <Name>{name}</Name>
        <TagAndLocation>@{tag}</TagAndLocation>
        <TagAndLocation>{location}</TagAndLocation>
      </Description>

      <Stats>
        <StatItems>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatItems>
        <StatItems>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatItems>
        <StatItems>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatItems>
      </Stats>
    </Profile>
  </UserCard>
}

User.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}