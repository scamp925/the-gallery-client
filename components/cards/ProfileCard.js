import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

function ProfileCard({ userProfileObj }) {
  return (
    <div>
      <Card className="profile-card">
        <Image className="profile-card-image" src={userProfileObj.profileImageUrl} alt="Profile Avatar" />
        <Card.Body className="profile-card-info">
          <Card.Title>{userProfileObj.firstName} {userProfileObj.lastName}</Card.Title>
          <Card.Text>
            Username: {userProfileObj.username}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

ProfileCard.propTypes = {
  userProfileObj: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    profileImageUrl: PropTypes.string,
  }).isRequired,
};

export default ProfileCard;
