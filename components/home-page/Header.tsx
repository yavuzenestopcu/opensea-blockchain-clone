'use client'

import Image from 'next/image'
import logo from '@/public/logo/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { ConnectButton } from '@/app/thirdweb'
import { client } from "@/consts/client"
import { sepolia } from '@/consts/chains'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import React from 'react'

import { useGetENSAvatar } from "@/hooks/useGetENSAvatar";
import { useGetENSName } from "@/hooks/useGetENSName";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  // Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { FaRegMoon } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import {
  useActiveAccount,
  useActiveWallet,
  useDisconnect,
} from "thirdweb/react";
import type { Wallet } from "thirdweb/wallets";
import { blo } from 'blo'

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

const connectButtonStyle = {
  backgroundColor: "transparent",
  color: "white",
  fontSize: '32px',
  minWidth: '10px',
  maxHeight: '10px',
  verticalAlign: 'middle',
  paddingTop: '5px'
};

export function Header() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { colorMode } = useColorMode();


  return (
    <div className={style.wrapper}>
      <Link href="/" className='flex'>
        <div className={style.logoContainer}>
          <Image src={logo} alt='logo' height={40} width={40} />
          <div className={style.logoText}>NFTGalaxy</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className={style.headerItems}>
        <Link href="/collections">
          <div className={style.headerItem}> Collections </div>
        </Link>
        <div className={style.headerItem}> Stats </div>
        <div className={style.headerItem}> Resources </div>
        <div className={style.headerItem}> Create </div>
        <div className={style.headerIcon}>
          <ToggleThemeButton />
        </div>
        <div className={style.headerIcon}>
          <ProfileButton address={account!?.address} wallet={wallet!} />
        </div>
        <div className={style.headerIcon}>
          <ConnectButton
            connectButton={{
              label: <MdOutlineAccountBalanceWallet />,
              className: 'm-[0.8rem]',
              style: connectButtonStyle
            }}
            client={client}
            chain={sepolia}
          />
        </div>
      </div>
    </div>
  )
}

function ProfileButton({
  address,
  wallet,
}: {
  address: string;
  wallet: Wallet;
}) {
  const { disconnect } = useDisconnect();
  const { data: ensName } = useGetENSName({ address });
  const { data: ensAvatar } = useGetENSAvatar({ ensName });
  return (
    <Menu>
      <MenuButton as={Button} height="56px">
        <Flex>
          <Box my="auto">
            <FiUser size={30} />
          </Box>
        </Flex>
      </MenuButton>
      <MenuList >
        <MenuItem as={Link} href="/profile" _hover={{ textDecoration: "none" }}>
          Profile 
        </MenuItem> 
        <MenuItem
          onClick={() => {
            if (wallet) disconnect(wallet);
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button height="56px" w="56px" onClick={toggleColorMode} mr="10px">
      {colorMode === "light" ? <FaRegMoon /> : <IoSunny />}
    </Button>
  );
}