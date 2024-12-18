import { ethers } from "ethers";
import { PublicKey } from "@solana/web3.js";

/**
 * Enum representing different blockchain wallet address types
 */
export enum WalletAddressType {
  ETH = "ethereum",
  SOL = "solana",
  UNKNOWN = "unknown",
}

/**
 * Validate if an address matches Ethereum (EVM) address regex
 * @param address The wallet address to check
 * @returns Boolean indicating if the address matches Ethereum address format
 */
export function isEthereumAddressFormat(address: string): boolean {
  // Check for 0x prefix and 40 hexadecimal characters
  const ethAddressRegex = /^0x[0-9A-Fa-f]{40}$/;
  return ethAddressRegex.test(address);
}

/**
 * Validate if an address matches Solana address regex
 * @param address The wallet address to check
 * @returns Boolean indicating if the address matches Solana address format
 */
export function isSolanaAddressFormat(address: string): boolean {
  // Solana addresses are base58 encoded and typically 32-44 characters long
  const solAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  return solAddressRegex.test(address);
}

/**
 * Validate Ethereum (EVM) wallet address
 * @param address The wallet address to validate
 * @returns Boolean indicating if the address is a valid EVM address
 */
export const validateEVMAddress = (address: string) => {
  try {
    return ethers.isAddress(address);
  } catch {
    return false;
  }
};

/**
 * Validate Solana wallet address
 * @param address The wallet address to validate
 * @returns Boolean indicating if the address is a valid Solana address
 */
export const validateSolanaAddress = (address: string) => {
  try {
    const pubkey = new PublicKey(address);
    if (!PublicKey.isOnCurve(pubkey)) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};

/**
 * Determine the type of blockchain wallet address
 * @param address The wallet address to check
 * @returns WalletAddressType enum value
 */
export function determineWalletAddressType(address: string): WalletAddressType {
  // Remove whitespace and trim
  const cleanAddress = address.trim();

  // First, check address format via regex
  if (isEthereumAddressFormat(cleanAddress)) {
    return WalletAddressType.ETH;
  }

  if (isSolanaAddressFormat(cleanAddress)) {
    return WalletAddressType.SOL;
  }

  return WalletAddressType.UNKNOWN;
}

/**
 * Validate wallet address
 * @param address The wallet address to check
 * @returns Validation result
 */
export const validateWalletAddress = (address: string) => {
  // Check Ethereum address first
  if (isEthereumAddressFormat(address)) {
    return validateEVMAddress(address);
  }

  // Check Solana address
  if (isSolanaAddressFormat(address)) {
    return validateSolanaAddress(address);
  }

  // Unknown address type
  return false;
};
