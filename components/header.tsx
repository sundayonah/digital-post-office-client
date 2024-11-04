'use client';

import React from 'react';
import Link from 'next/link';
// import {
//    SignedIn,
//    SignedOut,
//    SignInButton,
//    UserButton,
// //    useUser,
// } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Sun, Moon, User } from 'lucide-react';

const Header = () => {
   const { theme, setTheme } = useTheme();

   return (
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md">
         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
               <Link
                  href="/"
                  className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600"
               >
                  {/* Replace with your logo */}
                  <div className="flex items-center space-x-2">
                     <Link
                        href="/"
                        className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 flex items-center space-x-2"
                     >
                        <User className="h-8 w-8 text-blue-500" />
                        {/* Avatar Icon */}
                        <span className="text-lg font-bold">YourApp</span>
                     </Link>
                  </div>
               </Link>
               <span className="text-lg font-bold">YourApp</span>
            </div>

            {/* Center Navigation Links */}
            <nav className="hidden md:flex space-x-8">
               <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
               >
                  Home
               </Link>
               <Link
                  href="/features"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
               >
                  Features
               </Link>
               <Link
                  href="/pricing"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
               >
                  Pricing
               </Link>
               <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
               >
                  About
               </Link>
            </nav>

            {/* Right Side - Authentication and Theme Toggle */}
            <div className="flex items-center space-x-4">
               {/* Theme Toggle */}
               <Button
                  variant="ghost"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="rounded-full p-2"
               >
                  {theme === 'dark' ? (
                     <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                     <Moon className="h-5 w-5 text-gray-600" />
                  )}
               </Button>

               {/* Clerk Authentication */}
               {/* <SignedIn>
                  <UserButton />
               </SignedIn>
               <SignedOut>
                  <SignInButton mode="modal">
                     <Button
                        variant="outline"
                        className="border-gray-300 dark:border-gray-700"
                     >
                        Sign In
                     </Button>
                  </SignInButton>
               </SignedOut> */}
            </div>
         </div>
      </header>
   );
};

export default Header;
