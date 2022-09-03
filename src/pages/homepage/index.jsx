import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Metamask } from '../../images/index';

const ModelViewer = require('@metamask/logo');

function Connect({ setUserAddress, connect }) {
  return (
    <button className='connect' onClick={() => connect(setUserAddress)}>
      <img src='https://cdn.worldvectorlogo.com/logos/metamask.svg' />
      <span>Connect to MetaMask</span>
    </button>
  );
}

function Address({ userAddress }) {
  return <span className=''>{userAddress}</span>;
}

function HomePage(props) {
  const [isVisible, setVisible] = useState();
  const [userAddress, setUserAddress] = useState('');

  const showLogo = () => {
    // To render with fixed dimensions:
    const viewer = ModelViewer({
      // Dictates whether width & height are px or multiplied
      pxNotRatio: true,
      width: 200,
      height: 200,
      // pxNotRatio: false,
      // width: 0.9,
      // height: 0.9,

      // To make the face follow the mouse.
      followMouse: false,

      // head should slowly drift (overrides lookAt)
      slowDrift: false,
    });

    // add viewer to DOM
    // const container = document.createElement('div');
    const container = document.querySelector('.logo-container');

    container.appendChild(viewer.container);

    // look at something on the page
    viewer.lookAt({
      x: 100,
      y: 100,
    });

    // enable mouse follow
    viewer.setFollowMouse(true);

    // deallocate nicely
    viewer.stopAnimation();
  };

  async function checkIfWalletIsConnected(onConnected) {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_accounts',
      });
      console.log('check', window, accounts);
      if (accounts.length > 0) {
        const account = accounts[0];
        setUserAddress(account);
        return;
      }
    }
  }

  async function connect() {
    if (!window.ethereum) {
      alert('Get MetaMask!');
      return;
    }

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    // onConnected(accounts[0]);
    setUserAddress(accounts[0]);
  }

  useEffect(() => {
    setTimeout(showLogo, 1000);
    checkIfWalletIsConnected(setUserAddress);
    // showLogo();
  }, []);

  // useEffect(() => {
  //   onAddressChanged(userAddress);
  // }, [userAddress]);

  return (
    <div className='homepage-container'>
      <div className='wrapper-content'>
        <aside className='left-ad'>advertisment</aside>
        <div className='main-content'>
          <div className='logo-container'></div>
          <p>Welcome</p>
          {/* <address>Badlapur</address> */}
          {/* <button className='connect'>
            <img src='https://cdn.worldvectorlogo.com/logos/metamask.svg' />
            <span>Connect to MetaMask</span>
          </button> */}
          {userAddress ? (
            <>
              Connected with address <Address userAddress={userAddress} />
            </>
          ) : (
            // <Connect connect={connect} setUserAddress={setUserAddress} />
            <button onClick={connect}>Connect To Metamask</button>
          )}
          <button>Donate</button>
        </div>
        <aside className='right-ad'>advertisment</aside>
      </div>
    </div>
  );
}

export default HomePage;
