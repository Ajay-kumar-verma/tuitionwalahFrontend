import React from 'react';

import Login from '../pages/Login';
import SignUp from '../pages/Signup';

// import AppAbout from '../components/home/about';
// import AppFeature from '../components/home/feature';
// import AppWorks from '../components/home/works';
// import AppFaq from '../components/home/faq';
// import AppPricing from '../components/home/pricing';
import AppContact from '../pages/contact';

function AppHome() {
  return(
    <div className="main">
      <Login />
      <SignUp />
      <AppContact/>
      {/* <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppFaq/>
      <AppPricing/>
       */}

    </div>
  );
}

export default AppHome;