"use client";
import React, { useState } from "react";
import "../styles/navbar.css";
import Link from "next/link";
import Image from "next/image";
import {
  FaStar,
  FaNewspaper,
  FaCogs,
  FaGlobe,
  FaMagic,
  FaTrademark,
  FaPaintBrush,
  FaMobileAlt,
  FaFont,
  FaPrint,
  FaSearch,
  FaShoppingCart,
  FaFileAlt,
  FaBriefcase,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiEdit3, FiBell } from "react-icons/fi";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side - Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src="/logo.png"
              width={76}
              height={30}
              alt="Logo"
              className="logo"
            />
          </Link>
        </div>

        {/* Center - Search and navigation */}
        <div className="navbar-center">
          <div className="search-container">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="search-input"
            />

            <div className="shots-dropdown">
              <button className="shots-button" onClick={toggleDropdown}>
                Shots <IoMdArrowDropdown className="dropdown-arrow" />
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">Designers</div>
                  <div className="dropdown-item">Services</div>
                </div>
              )}
            </div>

            <button className="search-button">
              <FaSearch />
            </button>
          </div>

          <div className="nav-links">
            {/* Explore Dropdown */}
            <div className="nav-item dropdown">
              <span className="dropdown-toggle">
                Explore <IoMdArrowDropdown />
              </span>
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <FaStar /> Popular
                </div>
                <div className="dropdown-item">
                  <FaNewspaper /> New and Noteworthy
                </div>
                <div className="dropdown-item">
                  <FaCogs /> Product Design
                </div>
                <div className="dropdown-item">
                  <FaGlobe /> Web Design
                </div>
                <div className="dropdown-item">
                  <FaMagic /> Animation
                </div>
                <div className="dropdown-item">
                  <FaTrademark /> Branding
                </div>
                <div className="dropdown-item">
                  <FaPaintBrush /> Illustration
                </div>
                <div className="dropdown-item">
                  <FaMobileAlt /> Mobile
                </div>
                <div className="dropdown-item">
                  <FaFont /> Typography
                </div>
                <div className="dropdown-item">
                  <FaPrint /> Print
                </div>
              </div>
            </div>

            {/* Hire a Designer Dropdown */}
            <div className="nav-item dropdown">
              <span className="dropdown-toggle">
                Hire a Designer <IoMdArrowDropdown />
              </span>
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <FaSearch /> Browse Freelancers
                </div>
                <div className="dropdown-item">
                  <FaShoppingCart /> Purchase Services
                </div>
                <div className="dropdown-item">
                  <FaFileAlt /> Submit a Project Brief
                </div>
                <div className="dropdown-item">
                  <FaBriefcase /> Post a Full-Time Job
                </div>
              </div>
            </div>

            {/* Static Links */}
            <Link href="/jobs" className="nav-item">
              Find Jobs
            </Link>
            <Link href="/blog" className="nav-item">
              Blog
            </Link>
          </div>
        </div>

        {/* Right side - Icons and profile */}
        <div className="navbar-right">
          <div className="icon-container">
            <button className="icon-button">
              <FiEdit3 />
            </button>
            <button className="icon-button">
              <FiBell />
            </button>
          </div>

          <Link href="/pro" className="pro-button">
            Go Pro
          </Link>

          <div className="auth-buttons">
            <Link href="/signup" className="auth-button signup-button">
              Sign Up
            </Link>
            <Link href="/login" className="auth-button login-button">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
