  var firebaseConfig = {
    apiKey: "AIzaSyBacp9jBM_Dk216YtgwrU8siZTOOnHZ3is",
    authDomain: "adrena-2ed25.firebaseapp.com",
    projectId: "adrena-2ed25",
    storageBucket: "adrena-2ed25.appspot.com",
    messagingSenderId: "278223223450",
    appId: "1:278223223450:web:7f563e57b4d503d4a9bd23",
    measurementId: "G-15L7LJS467"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const checkoutButton = document.getElementById('checkout-button')
  const createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout')
  const stripe = Stripe('pk_test_51J2Fp4DpF8CPXQ9GUCuTZvIp7heGjnmtyri4JEChEabWQIWDpNzSvjscvQkrUhx7jY43bBD3sCWGb8dCMNFyj0fd00uYoBTydd')

  checkoutButton.addEventListener('click', () => {
    createStripeCheckout()
      .then(response => {
        const sessionId = response.data.id
        stripe.redirectToCheckout({ sessionId: sessionId})
      })
  })