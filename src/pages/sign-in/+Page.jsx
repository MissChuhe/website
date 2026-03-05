import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    window.location.href = 'http://beta.taifamobile.co.ke/site/register';
  }, []);

  return null; // Renders nothing
};

export default RedirectPage;