import { CiMenuFries } from "react-icons/ci";


export default function Header() {
    return (
      <div className='p-4 w-full h-24 drop-shadow-md bg-white'>
        <div className="w-full h-full flex items-center justify-between">
          <img src="/images/jujube-logo (1).png" alt="Logo" className="h-16 w-auto" />
          <CiMenuFries className="h-8 w-8 text-dark-green" />
        </div>
      </div>
    );
  }
  