/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import PaymentTypeCards from '../../components/cards/PaymentTypeCards';
import ProfileCard from '../../components/cards/ProfileCard';
import GalleryLogo from '../../components/GalleryLogo';
import NavBar from '../../components/NavBar';
import { useAuth } from '../../utils/context/authContext';

import getSingleUser from '../../utils/data/userData';
import { getUserPaymentTypes } from '../../utils/data/paymentTypeData';

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState({});
  const [paymentTypes, setPaymentTypes] = useState([]);

  const getUserDetails = () => {
    getSingleUser(id, user.uid).then(setUserProfile);
  };

  const getAllUserPaymentTypes = () => {
    getUserPaymentTypes(id).then(setPaymentTypes);
  };

  useEffect(() => {
    getUserDetails();
    getAllUserPaymentTypes();
  }, []);

  return (
    <div>
      <NavBar />
      <GalleryLogo />
      <section>
        <ProfileCard userProfileObj={userProfile} />
      </section>
      <section>
        <h5 className="manage-payments-title">Manage Payments</h5>
        {paymentTypes?.map((paymentType) => (
          <PaymentTypeCards key={paymentType.id} paymentObj={paymentType} />
        ))}
      </section>
      <Link href="/paymentTypes/new" passHref>
        <Button variant="success" className="new-payment-btn">Add Payment Method</Button>
      </Link>
    </div>

  );
}
