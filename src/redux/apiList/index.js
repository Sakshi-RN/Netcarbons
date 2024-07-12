export let Api = {
  register: "auth/register",
  register_otp_verify: "auth/registration-otp-verify",
  login_thread: "auth/login",
  logout_thread: "auth/logout",
  resend_otp_for_register: "auth/resend-otp-register",
  change_password: "auth/change-password",
  country_code: "v1/countries",
  get_countries: "v1/countries",
  getProducts: "v1/products",
  save_carbon: "v1/save-carbon-calculations",
  get_metrics: "v1/metrics",
  get_product_details: "v1/products",
  calculate_express_checkout: "v1/calculate-express-checkout",
  getProfile: "v1/me",
  updateProfile: "v1/save-profile-info",
  updateAddress: "v1/addresses",
  updatePrimaryEmail: "auth/update-primary-email",
  updateSecondaryEmail: "auth/update-recovery-email",
  verify_otp_primary_email: "auth/primary-email-otp-verify",
  verify_otp_recovery_email: "auth/recovery-email-otp-verify",
  resend_otp_for_email_verification: "auth/resend-registration-link",
  get_wishlist: "v1/wishlists",
  update_wishlist: "v1/wishlists",
  get_cart: "v1/carts",
  add_or_update_item_from_cart: "v1/carts",
  remove_item_from_cart: (id) => `v1/carts/${id}/remove`,
  coupon_remove: "v1/coupons/unapply",
  coupon_apply: (coupon_code) => `v1/coupons/${coupon_code}/apply`,
};
