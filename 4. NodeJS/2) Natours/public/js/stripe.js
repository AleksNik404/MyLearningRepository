// не рабочий
/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51LyWOlDxfGcC4t7Wb56RZVVMpU9KJKI2yP8ijOQDy5TzlDxm1Bl2DJ8leOy4RHoojJGzG7xPpN5cV4D9eA1FVM3A00W6j0FscS'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', err);
  }
};
