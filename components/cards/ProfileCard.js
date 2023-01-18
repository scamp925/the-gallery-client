import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Image } from 'react-bootstrap';

function ProfileCard({ userProfileObj }) {
  return (
    <div>
      <Image className="profile-card-image" src={userProfileObj.profileImageUrl} alt="Profile Avatar" width="300" height="300" />
      <h3>{userProfileObj.firstName} {userProfileObj.lastName}</h3>
      <p>Username: {userProfileObj.username}</p>
      <Link passHref href="/orderHistory">My Order History</Link>
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
