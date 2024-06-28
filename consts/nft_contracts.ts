import type { Chain } from "thirdweb";
import { avalancheFuji, polygonAmoy, sepolia } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x6b869a0cF84147f05a447636c42b8E53De65714E",
    chain: avalancheFuji,
    title: "Steakhouse: Liberatorz",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeigonh3hde5suwcb3qvkh6ljtvxv7ubfmcqbwfvi3ihoi3igd27jwe/SteakhouseLogo.svg",
    type: "ERC721",
  },
  {
    address: "0xC5A2c72c581eA4A17e17bEeF38a9597132830401",
    chain: avalancheFuji,
    title: "Ugly Waifu",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeidaadqapi7twzd7pjp24tu4ngsr3teubrhop7hg3jk3oj6lqysfgm/OS-LOGO.png",
    slug: "ugly-waifu",
    type: "ERC721",
  },

  {
    address: "0x0896Db00D8987Fba2152aa7c14c4255eBC7354cE",
    chain: avalancheFuji,
    title: "Unnamed Collection",
    description: "",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/Qmct2vS78Uwug3zVtqQognskPPRmd4wRQiaDAQWt1kRJws/0.png",
    slug: "unnamed-collection",
    type: "ERC721",
  },
  {
    address: "0x0ACaCa3d3F64bb6e6D3564BBc891c58Bd4A4c83c",
    chain: avalancheFuji,
    title: "GoroBot",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeiay3ffxy3os56bvnu5cmq7gids4v6n4hf5nvvcb3gy2dzavi3ltnu/profile.jpg",
    slug: "gorobot",
    type: "ERC721",
  },
  {
    address: "0x4b6CDEFF5885A57678261bb95250aC43aD490752",
    chain: polygonAmoy,
    title: "Mata NFT",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeidec7x6bptqmrxgptaedd7wfwxbsccqfogzwfsd4a7duxn4sdmnxy/0.png",
    type: "ERC721",
  },
  {
    address: "0xd5e815241882676F772A624E3892b27Ff3a449c4",
    chain: avalancheFuji,
    title: "Cats (ERC1155)",
    thumbnailUrl:
      "https://258c828e8cc853bf5e0efd001055fb39.ipfscdn.io/ipfs/bafybeif2nz6wbwuryijk2c4ayypocibexdeirlvmciqjyvlzz46mzoirtm/0.png",
    type: "ERC1155",
  },
  {
    address: "0x195D5b8EF5C5F9183E006B52Bd1cedDa68185116",
    chain: sepolia,
    title: "NFTGalaxy Collection",
    thumbnailUrl:
      "https://7f8751ab8442fe99d954e122ca6185b2.ipfscdn.io/ipfs/QmQz9hDBB4kdmrLjUkWLeoRTbyZbXWYrK8obLBJGBcf9M6/%235348.png",
    type: "ERC721",
  },
  {
    address: "0xA60b2190a2A290F63726892BD879E490e7230cD4",
    chain: sepolia,
    title: "Bored Ape Yacht Club",
    thumbnailUrl:
      "https://79c2a03270b154ffaeb97d075da4a69f.ipfscdn.io/ipfs/QmPH6JoYnT6Qb3gjThvVFTkrykbEvK3soSthXGxiFtiCj6/unnamed.png",
    type: "ERC721",
  },
  {
    address: "0x407B457c04A15a56b7A7230bD2F0C28349b6A1EC",
    chain: sepolia,
    title: "Star Striders",
    thumbnailUrl:
      "https://79c2a03270b154ffaeb97d075da4a69f.ipfscdn.io/ipfs/QmRHPUE9BiekPfxnQEi4iW2fxWZhFTgJFCZCE39Xkqx5kV/blade.jpeg",
    type: "ERC721",
  },
];
