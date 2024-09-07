"use client"; // Add this directive

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HiHome,
  HiSearch,
  HiLibrary,
  HiPlusCircle,
  HiHeart,
  HiMenu,
  HiX
} from 'react-icons/hi';
import Image from 'next/image';
import styles from '../app/Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button className="md:hidden p-2" onClick={toggleSidebar}>
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarNav}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/logo1.png"  
                alt="Spotify"
                width={100}       
                height={30}       
                layout="intrinsic" 
              />
            </Link>
          </div>
          <ul>
            <li>
              <Link href="/" className={styles.link}>
                <HiHome className={styles.icon} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/search" className={styles.link}>
                <HiSearch className={styles.icon} />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link href="/library" className={styles.link}>
                <HiLibrary className={styles.icon} />
                <span className={styles.library}>Your Library</span>
              </Link>
            </li>
            <li>
              <Link href="/create-playlist" className={styles.link}>
                <HiPlusCircle className={styles.icon} />
                <span>Create Playlist</span>
              </Link>
            </li>
            <li>
              <Link href="/liked-songs" className={styles.link}>
                <HiHeart className={styles.icon} />
                <span>Liked Songs</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Additional Sidebar Content */}
        <div className={`${styles.sidebarNav} ${styles.box2}`}>
          <div className={styles.sidebarScroll}>
            <div className={styles.createPlaylist}>
              <h4>Create your playlist</h4>
              <p>It&apos;s easy, we&apos;ll help you</p>
              <button>Create Playlist</button>
            </div>
          </div>
          <div className={styles.privacy}>
            <ul>
              <li>
                <Link href="/legal">Legal</Link>
                <Link href="/privacy">Safety & Privacy</Link>
                <Link href="/cookies">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/about-ads">About Ads</Link>
                <Link href="/accessibility">Accessibility</Link>
              </li>
            </ul>
          </div>
          <div className={styles.engBtn}>
            <button>English</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
