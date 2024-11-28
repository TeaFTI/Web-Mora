/**
 * Login Page
 */

import type { Metadata } from "next";
import Image from "next/image";

// Style
import "./login.scss";

export const metadata: Metadata = {
  title: "Login",
  description: "Umeboshi | Login",
}

export default function LoginPage() {
  return (
    <div className='d-flex flex-column h-100'>
      <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <main className='form-login w-100'>
          <form>
            <Image src='/res/img/umeboshi-4-1.svg' alt='Onigiri Logo' width={64} height={64} priority={true} />

            <h1 className='h3 mb-3 fw-normal'>Please Login</h1>

            <div className='form-floating'>
              <input id='username' className='form-control' type='text' placeholder='Username' autoFocus />
              <label htmlFor='username'>Username</label>
            </div>
            <div className='form-floating'>
              <input id='password' className='form-control' type='password' placeholder='Password' />
              <label htmlFor='password'>Password</label>
            </div>

            <div className='form-check text-start my-3'>
              <input id='flexCheckDefault' className='form-check-input' type='checkbox' value='remember-me' />
              <label className='form-check-label' htmlFor='flexCheckDefault'>
                Remember Me
              </label>
            </div>

            <button className='btn btn-primary w-100 py-2' type='submit'>Login</button>
            <p className='mt-5 mb-3 text-body-secondary'>&copy; 2024</p>
          </form>
        </main>
      </div>
    </div>
  );
}
