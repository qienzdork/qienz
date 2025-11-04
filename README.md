# CarNFT Forge — Farcaster → Car NFT (hidden AI) [Starter Repo]

This starter project creates a private AI-powered Car NFT generator that:
- Fetches Farcaster profile info (optional)
- Generates a unique car image **server-side** (AI calls are hidden from users)
- Uploads image + metadata to IPFS via NFT.Storage
- Lets the connected user mint the NFT on **Base Sepolia** (testnet)

**Privacy note:** The project is intentionally designed so users will not see any AI prompts or provider info. All generation happens on the server.

## Features
- Next.js (App Router)
- Server route: `/api/generate` calls Replicate (or OpenAI) and NFT.Storage
- Simple frontend with Connect Wallet, Forge (generate) → Preview → Mint
- Solidity ERC721 contract + Hardhat deploy script for Base Sepolia

## Env (.env.local)
Copy `.env.example` -> `.env.local` and fill values:

```
# Required for hidden AI generation
REPLICATE_API_TOKEN=your_replicate_api_token

# For storing generated assets
NFT_STORAGE_API_KEY=your_nft_storage_api_key

# Optional: Farcaster Neynar API (to auto fetch user profile from FID)
NEYNAR_API_KEY=your_neynar_api_key_or_leave_blank

# Hardhat deploy
DEPLOYER_PRIVATE_KEY=0x...
NEXT_PUBLIC_BASE_RPC=https://sepolia.base.org
```

## Quick start (local)
```bash
npm install
# run next.js dev
npm run dev
```

## Deploy contract to Base Sepolia (test)
```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network baseseplia
```

## How it works (user flow)
1. User connects wallet (MetaMask on Base Sepolia).
2. User enters FID (or the server fetches it if NEYNAR_API_KEY is configured).
3. User clicks **Forge My Car** — server generates an image based on that user's pfp & fid (hidden).
4. Preview appears; user clicks **Mint** to upload to IPFS and mint on Base Sepolia.

## Notes
- This is a starter template. Replace Replicate with OpenAI images if you prefer.
- Keep API keys secret — do NOT commit `.env.local` to GitHub.
