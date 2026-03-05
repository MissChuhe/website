import React, { useState, useContext, useRef } from 'react';
import { NavContext } from '../context/NavContext';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Info,
  Layers,
  Phone,
  MessageSquare,
  Wifi,
  Smartphone,
  Hash,
  CreditCard,
  Phone as PhoneIcon,
  Music,
  DollarSign as MoneyIcon
} from 'react-feather';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.scss';

export default function Navbar() {
  const { mobileOpen, setMobileOpen } = useContext(NavContext);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const location = useLocation();
  const prefetchedPathsRef = useRef(new Set());
  const solutionPaths = ['/sms', '/shortcode', '/ussd', '/payment', '/data', '/voice', '/call-back', '/airtime'];

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Info size={20} />
    },
    {
      name: 'Solutions',
      icon: <Layers size={20} />,
      submenu: [
        { name: 'Bulk SMS', path: '/sms', icon: <MessageSquare size={18} /> },
        { name: 'Short Code', path: '/shortcode', icon: <Hash size={18} /> },
        { name: 'USSD', path: '/ussd', icon: <Smartphone size={18} /> },
        { name: 'Payment Integration', path: '/payment', icon: <CreditCard size={18} /> },
        { name: 'Bulk Data', path: '/data', icon: <Wifi size={18} /> },
        { name: 'Voice', path: '/voice', icon: <PhoneIcon size={18} /> },
        { name: 'Call Ring Back Tones (Skiza)', path: '/call-back', icon: <Music size={18} /> },
        { name: 'Airtime', path: '/airtime', icon: <MoneyIcon size={18} /> }
      ]
    },
    // {
    //   name: 'Pricing',
    //   path: '/pricing',
    //   icon: <DollarSign size={20} />
    // },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone size={20} />
    }
  ];

  const prefetchPath = (path) => {
    if (typeof window === 'undefined') return;
    if (prefetchedPathsRef.current.has(path)) return;

    prefetchedPathsRef.current.add(path);
    fetch(path, { method: 'GET', credentials: 'same-origin' }).catch(() => {
      prefetchedPathsRef.current.delete(path);
    });
  };

  const toggleMobileSubmenu = (index) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === index ? null : index);
  };

  const closeAllMenus = () => {
    setMobileOpen(false);
    setMobileSubmenuOpen(null);
  };

  const navItemVariants = {
    hover: { scale: 1.05, transition: { duration: 0.15 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } }
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: 0, transition: { duration: 0.05 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.05 } }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <a href="/" className="logo" onClick={closeAllMenus}>
          <motion.img
            src={logo}
            alt="Taifa Mobile Logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={item.submenu ? 'has-submenu' : ''}>
                <motion.div
                  className="nav-item-wrapper"
                  onHoverStart={() => {
                    if (item.submenu) {
                      setActiveSubmenu(index);
                    }
                  }}
                  onHoverEnd={() => item.submenu && setActiveSubmenu(null)}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <a
                    href={item.path || '#'}
                    className={
                      item.submenu
                        ? `nav-link ${solutionPaths.includes(location.pathname) ? 'active' : ''}`
                        : `nav-link ${location.pathname === item.path ? 'active' : ''}`
                    }
                    onClick={(e) => item.submenu && e.preventDefault()}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span>{item.name}</span>
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`submenu-icon ${activeSubmenu === index ? 'rotate-180' : ''}`}
                      />
                    )}
                  </a>

                  {item.submenu && activeSubmenu === index && (
                    <div className="submenu-container">
                      <ul className="submenu">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.path}
                              className={`submenu-link ${location.pathname === subItem.path ? 'active' : ''}`}
                              onClick={closeAllMenus}
                              onMouseEnter={() => prefetchPath(subItem.path)}
                              onFocus={() => prefetchPath(subItem.path)}
                            >
                              <span className="submenu-icon">{subItem.icon}</span>
                              <span className="submenu-text">{subItem.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ul className="mobile-nav-items">
            {navItems.map((item, index) => (
              <li key={index} className={item.submenu ? 'has-submenu' : ''}>
                <motion.div className="mobile-nav-item" variants={navItemVariants} whileTap="tap">
                  <a
                    href={item.path || '#'}
                    className={
                      item.submenu
                        ? `mobile-nav-link ${solutionPaths.includes(location.pathname) ? 'active' : ''}`
                        : `mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`
                    }
                    onClick={!item.submenu ? closeAllMenus : (e) => e.preventDefault()}
                  >
                    <span className="mobile-nav-icon">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                  {item.submenu && (
                    <button
                      onClick={() => toggleMobileSubmenu(index)}
                      aria-expanded={mobileSubmenuOpen === index}
                      className="submenu-toggle"
                    >
                      <ChevronDown
                        size={18}
                        className={mobileSubmenuOpen === index ? 'rotate-180' : ''}
                      />
                    </button>
                  )}
                </motion.div>

                {item.submenu && mobileSubmenuOpen === index && (
                  <motion.ul
                    className="mobile-submenu"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={submenuVariants}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <motion.li key={subIndex}>
                        <a
                          href={subItem.path}
                          className={`mobile-submenu-link ${location.pathname === subItem.path ? 'active' : ''}`}
                          onClick={closeAllMenus}
                          onMouseEnter={() => prefetchPath(subItem.path)}
                          onFocus={() => prefetchPath(subItem.path)}
                        >
                          <span className="mobile-submenu-icon">{subItem.icon}</span>
                          {subItem.name}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}