import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/nft-galaxy-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { ConnectButton} from '@/app/thirdweb'
import { chain, client } from "@/utils/constants"
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import React from 'react'

const style = {
  wrapper: `bg-[#04111d] px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[1.2rem] mt-[0.6rem] mb-[0.6rem]  w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[white] text-3xl font-black px-4 hover:text-white cursor-pointer`
}

const connectButtonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  color: "white",
  fontSize: '26px',
  minWidth: '10px',
  maxHeight: '10px',
  verticalAlign: 'middle',
  paddingTop: '10px'
};


export default function Header() {

  return (
    <div className={style.wrapper}>
      <Link href='/' className='flex'>
        <div className={style.logoContainer}>
          <Image src={logo} alt="logo" height={40} width={40} />
          <div className={style.logoText}>NFT Galaxy</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input className={style.searchInput} placeholder='Search items, collections and accounts'></input>
      </div>
      <div className={style.headerItems}>
        <Link href="/collections/0x195D5b8EF5C5F9183E006B52Bd1cedDa68185116">
          <div className={style.headerItem}>Collections</div>
        </Link>
        <div className={style.headerItem}>Stats</div>
        <div className={style.headerItem}>Resources</div>
        <Link href="/create">
          <div className={style.headerItem}>Create</div>
        </Link>
        <div className={style.headerIcon}>
          <ConnectButton
            connectButton={{
              label: <CgProfile />,
              className: 'm-[0.8rem]',
              style: connectButtonStyle
            }}
            client={client}
            chain={chain}
          />
        </div>
        <div className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  )
}