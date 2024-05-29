import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  import { ModeToggle } from "@/components/ModeToggle";
const Header = () => {
  return (
    <header className='py-4'>
    <nav className='container flex items-center justify-between'>
      <ModeToggle/>
      <div className='flex items-center justify-start gap-6'>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl='/sign-in'/>
        </SignedIn>
      </div>
    </nav>
  </header>
  )
}

export default Header