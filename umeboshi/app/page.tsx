/**
 * Root Page
 */

import Login from "@/app/_component/login";

export default function RootPage() {
  return (
    <div className='d-flex flex-column h-100'>
      <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <Login />
      </div>
    </div>
  );
}
