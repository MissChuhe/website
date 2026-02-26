export default {
  appDirectory: 'src',
  basename: '/', 
  ssr: false,
  async prerender() {
    return [
      '/',
    //  '/home',
      '/solutions/sms',
      '/solutions/data',
      '/solutions/ussd',
      '/solutions/shortcode',
      '/solutions/payment',
      '/contact',
      '/pricing',
      '/login',
      '/solutions/voice',
      '/solutions/crbt',
      '/solutions/airtime',
      '/career',
    ];

  },
};
