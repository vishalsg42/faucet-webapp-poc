import React from 'react';

function HomePage(props) {
  console.log('props', props);
  return (
    <div className='homepage-container'>
      <div className='wrapper-content'>
        <aside className='left-ad'>advertisment</aside>
        <div className='main-content'>
          <p>Welcome</p>
          <address>Badlapur</address>
          <button className='connect'>Connect</button>
          <button>Donate</button>
        </div>
        <aside className='right-ad'>advertisment</aside>
      </div>
    </div>
  );
}

export default HomePage;
