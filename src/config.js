const config = {
  baseUrl: "https://nordek-node.bitviraj.com",
  endpoints: {
    login: "/v0/user/login",
    signUp: "/v0/user/user-signup",
    verifyOtp: "/v0/user/verify-otp",
    verifySignupOtp: "/v0/user/verify-signup-otp",
    forgotPassword: "/v0/user/forgot-password",
    sendOtp: "/v0/user/send-otp",
    changePassword: "/v0/user/send-otp",
    resetPassword: "/v0/user/changePassword",
  },
  userEndPoints: {
    getUserProfile: "/v0/user/get-user-profile",
    getLoginHistory: "/v0/user/get-login-history",
    getByUser: "/v0/notification/get-by-user"
  }
};

export default config;
