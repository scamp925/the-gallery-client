import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PaymentMethodForm from '../../../components/forms/PaymentMethodForm';
import { getSinglePaymentType } from '../../../utils/data/paymentTypeData';

export default function EditPaymentType() {
  const [editItem, setEditItem] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSinglePaymentType(id).then(setEditItem);
  }, [id]);

  return (
    <div>
      <PaymentMethodForm paymentObj={editItem} />
    </div>
  );
}
