window.AO_CONFIG = {
  RELAY_PAUSED: false,
  SITE_BASE_URL: "https://relaybrief.com",
  API_BASE: /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)
    ? "http://127.0.0.1:8000"
    : "https://alan-operator-backend-production.up.railway.app",
  ORDER_PRICE_CENTS: 200,
  CURRENCY: "usd"
};
