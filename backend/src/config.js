require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "PHILIPPINE HEROES";
const description = "Let's give tribute to our heroes who fought for our freedom and independence";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  //gear only
  // {
  //   growEditionSizeTo: 1000,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Chest" },
  //     { name: "Eyeshield" },
  //     { name: "Helmet" },
  //     { name: "Shoulders" },
  //     { name: "Mask" },
  //   ],
  // },
  //    {
  //   growEditionSizeTo: 1,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Abad Santos Face" },
  //     { name: "Base Shade M" },
  //     { name: "Shirt" },
  //     { name: "Abad Santos Eyes" },
  //     { name: "Abad Santos Nose" },
  //     { name: "Abad Santos Mouth" },
  //     { name: "Abad Santos Eyebrow" },
  //     { name: "Abad Santos Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 2,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade M" },
  //     { name: "Aguinaldo Face" },
  //     { name: "Shirt" },
  //     { name: "Aguinaldo Eyes" },
  //     { name: "Aguinaldo Nose" },
  //     { name: "Aguinaldo Mouth" },
  //     { name: "Aguinaldo Eyebrow" },
  //     { name: "Aguinaldo Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 3,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade F" },
  //     { name: "Aquino Face" },
  //     { name: "Shirt" },
  //     { name: "Aquino Eyes" },
  //     { name: "Aquino Nose" },
  //     { name: "Aquino Mouth" },
  //     { name: "Aquino Eyebrow" },
  //     { name: "Aquino Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 4,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade M" },
  //     { name: "Bonifacio Face" },
  //     { name: "Shirt" },
  //     { name: "Bonifacio Eyes" },
  //     { name: "Bonifacio Nose" },
  //     { name: "Bonifacio Mouth" },
  //     { name: "Bonifacio Eyebrow" },
  //     { name: "Bonifacio Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 5,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade M" },
  //     { name: "Burgos Face" },
  //     { name: "Shirt" },
  //     { name: "Burgos Eyes" },
  //     { name: "Burgos Nose" },
  //     { name: "Burgos Mouth" },
  //     { name: "Burgos Eyebrow" },
  //     { name: "Burgos Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 6,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade M" },
  //     { name: "Del Pilar Face" },
  //     { name: "Shirt" },
  //     { name: "Del Pilar Eyes" },
  //     { name: "Del Pilar Nose" },
  //     { name: "Del Pilar Mouth" },
  //     { name: "Del Pilar Eyebrow" },
  //     { name: "Del Pilar Beard" },
  //     // { name: "Del Pilar Facial Hair" },
  //     { name: "Del Pilar Moustache" },
  //     { name: "Del Pilar Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 7,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade F" },
  //     { name: "Escoda Face" },
  //     { name: "Shirt" },
  //     { name: "Escoda Eyes" },
  //     { name: "Escoda Nose" },
  //     { name: "Escoda Mouth" },
  //     { name: "Escoda Eyebrow" },
  //     { name: "Escoda Hair" },
  //   ],
  // }, 
  // {
    //   growEditionSizeTo: 8,
    //   layersOrder: [
      //     // { name: "Background" },
      //     { name: "Base" },
      //     { name: "Base Shade M" },
  //     { name: "Gomez Face" },
  //     { name: "Shirt" },
  //     { name: "Gomez Eyes" },
  //     { name: "Gomez Nose" },
  //     { name: "Gomez Mouth" },
  //     { name: "Gomez Eyebrow" },
  //     { name: "Gomez Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 9,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade M" },
  //     { name: "Jacinto Face" },
  //     { name: "Shirt" },
  //     { name: "Jacinto Eyes" },
  //     { name: "Jacinto Nose" },
  //     { name: "Jacinto Mouth" },
  //     { name: "Jacinto Eyebrow" },
  //     { name: "Jacinto Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 10,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Lapulapu Face" },
  //     { name: "Lapulapu Skin" },
  //     { name: "Base Shade M" },
  //     { name: "Shirt" },
  //     { name: "Lapulapu Eyes" },
  //     { name: "Lapulapu Nose" },
  //     { name: "Lapulapu Mouth" },
  //     { name: "Lapulapu Eyebrow" },
  //     { name: "Lapulapu Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 11,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade M" },
  //     { name: "Luna Face" },
  //     { name: "Shirt" },
  //     { name: "Luna Eyes" },
  //     { name: "Luna Nose" },
  //     { name: "Luna Mouth" },
  //     { name: "Luna Eyebrow" },
  //     { name: "Luna Facial Hair" },
  //     { name: "Luna Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 12,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade M" },
  //     { name: "Mabini Face" },
  //     { name: "Shirt" },
  //     { name: "Mabini Eyes" },
  //     { name: "Mabini Nose" },
  //     { name: "Mabini Mouth" },
  //     { name: "Mabini Eyebrow" },
  //     { name: "Mabini Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 13,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade M" },
  //     { name: "Rizal Face" },
  //     { name: "Shirt" },
  //     { name: "Rizal Eyes" },
  //     { name: "Rizal Nose" },
  //     { name: "Rizal Mouth" },
  //     { name: "Rizal Eyebrow" },
  //     { name: "Rizal Facial Hair" },
  //     { name: "Rizal Hair" },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 14,
  //   layersOrder: [
  //     // { name: "Background" },
  //     { name: "Base" },
  //     { name: "Base Shade M" },
  //     { name: "Zamora Face" },
  //     { name: "Shirt" },
  //     { name: "Zamora Eyes" },
  //     { name: "Zamora Nose" },
  //     { name: "Zamora Mouth" },
  //     { name: "Zamora Eyebrow" },
  //     { name: "Zamora Hair" },
  //   ],
  // },
 {
    growEditionSizeTo: 10,
    layersOrder: [
    //   // { name: "Background" },
      { name: "Base" },
      { name: "Face" },
      { name: "Skin" },
      { name: "Base Shade M" },
      { name: "Shirt" },
      { name: "Eyes M" },
      { name: "Nose" },
      { name: "Mouth" },
      { name: "Eyebrow" },
      { name: "Mole" },
      { name: "Beard" },
      { name: "Moustache" },
      { name: "Hair M" },
      // { name: "Chest" },
      // { name: "Eyeshield" },
      // { name: "Helmet" },
      // { name: "Shoulders" },
      // { name: "Mask" },
    ],
  },
//   { 
//     growEditionSizeTo: 1000,
//     layersOrder: [
//       // { name: "Background" },
//       { name: "Base" },
//       { name: "Face" },
//       { name: "Skin" },
//       { name: "Base Shade F" },
//       { name: "Shirt" },
//       { name: "Eyes F" },
//       { name: "Nose" },
//       { name: "Mouth" },
//       { name: "Eyebrow" },
//       { name: "Mole" },
//       { name: "Hair F" },
//       // { name: "Chest" },
//       // { name: "Eyeshield" },
//       // { name: "Helmet" },
//       // { name: "Shoulders" },
//       // { name: "Mask" },
//     ],
//   },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3900,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://bangonpilipinas.com", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'PHILIPPINE HEROES';
const CONTRACT_SYMBOL = 'PHL';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xBE0317DA7bf17F660DFFA487a12254A8baD94503';
const TREASURY_ADDRESS = '0xBE0317DA7bf17F660DFFA487a12254A8baD94503';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.01; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-08-29T10:00:48+00:00"; // FINAL date : 8/29/2022 10:00am uses GMT
// const PUBLIC_MINT_START_DATE = "2022-05-26T03:00:00+00:00"; // Test date uses GMT

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
// const PRESALE_MINT_START_DATE = "2022-08-22T02:00:00+00:00"; // FINAL date : 8/22/2022 10:00am uses GMT
const PRESALE_MINT_START_DATE = "2022-05-26T02:00:00+00:00"; // Test date uses GMT
const ROYALTY_SHARE = 200; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xBE0317DA7bf17F660DFFA487a12254A8baD94503"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x3c9D2B371C44b8Ea5ef66655f63F46521cf7D960"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
// let CONTRACT_ADDRESS = "0x85414D3dE74ad5e7b7DE08Bf5F92bD69570C6C99"; // If you want to manually include it
let CONTRACT_ADDRESS = "0xC1cEdC7DBf49E3dFCF47800c5789851ceEC1DeD3"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Let's give tribute to our heroes who fought for our freedom and independence. Which hero will you get?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeiezlbb4ahkj6ec4fm76lvc6n2bbgqxndrpl3jgl3osq5wy5lxpmou"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 18 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
