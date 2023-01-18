/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProfileCard from '../../components/cards/ProfileCard';
import GalleryLogo from '../../components/GalleryLogo';
import NavBar from '../../components/NavBar';
import { useAuth } from '../../utils/context/authContext';
import getSingleUser from '../../utils/data/userData';

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState({});

  const getUserDetails = () => {
    getSingleUser(id, user.uid).then(setUserProfile);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <NavBar />
      <GalleryLogo />
      <section>
        <ProfileCard userProfileObj={userProfile} />
      </section>
      <section>
        <h5>Manage Payments</h5>
      </section>
    </div>

  );
}
