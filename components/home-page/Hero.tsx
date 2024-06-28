import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://i.seadn.io/s/raw/files/05aec35959e68de64448c82401374ff6.png')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
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

export default function Hero() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              NFT Galaxy is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <Link href={'/collections'}>
                <button className={style.accentedButton}>Explore</button>
              </Link>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://i.seadn.io/s/raw/files/05aec35959e68de64448c82401374ff6.png"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-md"
                src="https://i.seadn.io/s/raw/files/f1e23f33b637cc4318a9439798180ee5.jpg"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Neptumer</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/ethereum/0x86486fe85545b57d06330acf1f3d63bb7b790cb4/5348"
                >
                  Starfall Travelers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}