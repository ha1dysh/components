import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  Profile,
  Tag,
  Username,
  Location,
  Stats,
  ListItem,
  Label,
  Quantity,
} from './Profile.styled';

export default function ProfileCard({
  username,
  tag,
  location,
  stats: { followers, views, likes },
  avatar,
}) {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </Stats>
    </Profile>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
