import Image from 'next/image'
import Link from 'next/link'
import openseaLogo from '../assets/opensea-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { ConnectButton, ConnectEmbed } from '@/app/thirdweb'
import { chain, client } from "@/utils/constants"
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import React from 'react'

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

const profileImage = <CgProfile />

// const myStyle: React.CSSProperties = { backgroundColor: "grey", color: "white", fontSize: '16px', backgroundImage: profileImage };


export default function Header() {

  return (
    <div className={style.wrapper}>
      <Link href='/'>
        <div className={style.logoContainer}>
          <Image src={openseaLogo} alt="opensealogo" height={40} width={40} />
          <div className={style.logoText}>OpenSea</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input className={style.searchInput} placeholder='Search items, collections and accounts'></input>
      </div>
      <div className={style.headerItems}>
        <Link href="/collections/0xA60b2190a2A290F63726892BD879E490e7230cD4">
          <div className={style.headerItem}>Collections</div>
        </Link>
        <div className={style.headerItem}>Stats</div>
        <div className={style.headerItem}>Resources</div>
        <div className={style.headerItem}>Create</div>
        <div className={style.headerIcon}>
          <ConnectButton
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