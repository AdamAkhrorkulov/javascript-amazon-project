import { renderOrderSummary } from "./checkot/orderSummary.js";
import { renderPaymentSummary } from "./checkot/paymentSummary.js";
import { loadProducts } from "../data/products.js";

// import '../data/backend.js';
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

