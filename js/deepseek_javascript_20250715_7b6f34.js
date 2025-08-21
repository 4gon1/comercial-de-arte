// Ejemplo de botón de PayPal en carrito.html
<div id="paypal-button-container"></div>
<script src="https://www.paypal.com/sdk/js?client-id=TU_CLIENT_ID"></script>
<script>
  paypal.Buttons({ createOrder: (data, actions) => { /* Lógica de pago */ } }).render('#paypal-button-container');
</script>