import Header from "@/components/Header"
import Hero from "@/components/Hero"

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

export default function Home() {
  return (
    <div className="flex-1">
      <Header />
      <Hero />
    </div>
  )
}

// 'use client';


// // app/page.js
// import { useState } from 'react';
// import { ConnectButton} from '@/app/thirdweb'
// import AuthForm from '../components/AuthForm';
// import { chain, client } from "@/utils/constants"
// import { CgProfile } from 'react-icons/cg'

// const connectButtonStyle: React.CSSProperties = {
//   backgroundColor: "transparent",
//   color: "white",
//   fontSize: '26px',
//   minWidth: '10px',
//   maxHeight: '10px',
//   verticalAlign: 'middle',
//   paddingTop: '10px'
// };

// export default function Home() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleAuthSuccess = (token: string) => {
//     // Save token (e.g., in local storage)
//     localStorage.setItem('token', token);
//     setIsAuthenticated(true);
//   };

//   return (
//     <div>
//       <h1>Welcome to My Web3 App</h1>
//       <ConnectButton
//             connectButton={{
//               label: <CgProfile />,
//               className: 'm-[0.8rem]',
//               style: connectButtonStyle
//             }}
//             client={client}
//             chain={chain}
//           />
//       {!isAuthenticated ? (
//         <>
//           <AuthForm type="login" onAuthSuccess={handleAuthSuccess} />
//           <AuthForm type="signup" onAuthSuccess={handleAuthSuccess} />
//         </>
//       ) : (
//         <p>You are logged in!</p>
//       )}
//     </div>
//   );
// }
