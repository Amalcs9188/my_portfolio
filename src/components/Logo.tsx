import Image from 'next/image';
import logo from '../../public/ChatGPT Image Jul 16, 2025, 11_54_29 AM.png';

export default function Logo() {
    
  return (
    <>
    <Image
      src={logo}
      alt="Logo"
      width={80}
      height={80}
      priority
    />
    </>
  );
}
