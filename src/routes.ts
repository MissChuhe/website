import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("pages/AboutUs.jsx"),
//  route("home", "pages/Home.jsx"),
  route("solutions/sms", "pages/Sms.jsx"),
  route("solutions/data", "pages/Data.jsx"),
  route("solutions/payment", "pages/Payment.jsx"),
  route("solutions/ussd", "pages/Ussd.jsx"),
  route("solutions/shortcode", "pages/Shortcode.jsx"),
  route("contact", "pages/ContactUs.jsx"),
  route("pricing", "pages/Pricing.jsx"),
  route("login", "pages/SignIn.jsx"),
  route("solutions/voice", "pages/Voice.jsx"),
  route("solutions/crbt", "pages/CallBack.jsx"),
  route("solutions/airtime", "pages/Airtime.jsx"),
  route("career", "pages/Careers.jsx"),
] satisfies RouteConfig;
