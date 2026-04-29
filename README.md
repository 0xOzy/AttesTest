# 🏛️ AttestID — No-Code On-Chain Credential Platform for the Web4 Era

[![Network](https://img.shields.io/badge/Network-Base_Sepolia-0052FF?style=for-the-badge&logo=base&logoColor=white)](https://base.org)
[![Protocol](https://img.shields.io/badge/Protocol-EAS-5B5B5B?style=for-the-badge&logo=ethereum&logoColor=white)](https://attest.org)
[![Framework](https://img.shields.io/badge/Framework-Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Language](https://img.shields.io/badge/Code-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![Status](https://img.shields.io/badge/Status-Testnet-yellow?style=for-the-badge)](https://attestid.xyz)

**AttestID** is a full-stack SaaS platform that lets anyone — DAOs, event organizers, AI developers, and Web3 freelancers — issue, manage, and verify on-chain attestations on **Base** without writing a single line of Solidity.

Built on the **Ethereum Attestation Service (EAS)**, AttestID transforms static credentials into composable, verifiable digital assets for both **humans and AI agents**.


## ✨ Why AttestID?

| Feature | Description |
|:---|:---|
| 🧩 **No‑Code Schema Builder** | Visually construct EAS schemas through an intuitive drag‑and‑drop interface |
| ⛽ **Gasless USDC Payments** | Powered by **Circle Nanopayments** & **x402 Protocol**, supporting micro‑transactions as low as **$0.000001** |
| 💰 **Hybrid Monetization** | **Subscription** via Base Pay + **Pay‑Per‑Use** via x402 for developers and AI agents |
| 🤖 **Multi‑Entity Credentials** | Issue verifiable badges for **humans** (DAO membership, skill endorsements) and machine‑readable licenses for **AI agents** |
| 🔌 **API‑First & SDK‑Ready** | Standardized REST API with `@attestid/client` SDK for seamless third‑party integration |
| 📚 **Developer Portal** | Comprehensive `/docs` with quickstart guides, interactive API reference, tutorials, and FAQ |
| 🎨 **Bauhaus × Brutalism UI** | A distinctive visual identity with bold typography, sharp geometric edges, and luxury color palettes |
| 🛡️ **Enterprise‑Ready** | Custom SLA, dedicated support, and a "Contact Sales" pipeline for large‑scale deployments |


## 🏗️ Architecture

```mermaid
graph TD
    A[User / AI Agent] --> B[Frontend - Next.js 14]
    B --> C[API Routes - Next.js Backend]
    C --> D[Prisma ORM]
    D --> E[(PostgreSQL - Neon)]
    C --> F[EAS SDK v2]
    F --> G[EAS Contracts - Base Sepolia]
    C --> H[Circle Paymaster]
    H --> I[USDC Gasless Transactions]
    C --> J[x402 Middleware]
    J --> K[Circle Nanopayments]
    K --> L[Batch Settlement - Base L2]
    A --> M[Wallet Connection]
    M --> N[RainbowKit + Wagmi v2]
```

🛠️ Tech Stack

Layer Technology Purpose
Frontend Next.js 14 (App Router) + TypeScript Server‑side rendering, routing, and API integration
Styling Tailwind CSS + CSS Variables Bauhaus × Brutalism design system with dark/light mode
State Management TanStack Query v5, Zustand Server state caching and client‑side UI state
Database Prisma ORM + PostgreSQL (Neon) Type‑safe database access with serverless‑ready pooling
Authentication SIWE (Sign‑In with Ethereum) Wallet‑based authentication via RainbowKit + Wagmi v2
Blockchain EAS (Ethereum Attestation Service) On‑chain credential issuance and verification on Base Sepolia
Payments Circle Paymaster + Nanopayments, x402 Protocol Gasless USDC micro‑transactions and subscription billing
Hosting Vercel / VPS (Docker + Nginx) Flexible deployment from serverless to self‑hosted
Containerization Docker + multi‑stage builds Optimized production images with Next.js standalone output

🎯 Target Users

User Type Use Case
🏛️ DAOs Sybil‑resistant membership verification and governance weighting
🎟️ Event Organizers On‑chain attendance certificates and hackathon participation badges
🤖 AI Developers Issue machine‑readable Agent Licenses for autonomous AI agents (KYA)
💼 Web3 Freelancers Receive verifiable on‑chain skill endorsements and reputation scores
🔒 DeFi Protocols Gated access to private pools based on attestation‑verified credentials

💰 Monetization Model

AttestID implements a hybrid monetization strategy to serve both regular users and developer ecosystems:

Model Mechanism Target Price
Subscription Base Pay — recurring USDC billing with one‑time approval Regular users via UI Starter (Free), Pro ($19/mo), Enterprise (Custom)
Pay‑Per‑Use x402 Protocol + Circle Nanopayments — gasless per‑API‑call billing Developers & AI Agents $0.01/verify**, **$0.05/create

All payments are settled in USDC on Base L2 with zero gas fees for micro‑transactions.

🚀 Getting Started

Prerequisites

· Node.js ≥ 20.x
· Docker (for containerized deployment)
· PostgreSQL database (or a Neon free tier account)
· Base Sepolia RPC endpoint
· Wallet (e.g., MetaMask) with testnet ETH & USDC

Installation

```bash
# Clone the repository
git clone https://github.com/username/attestid.git
cd attestid

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# Start the development server
npm run dev
```

The application will be available at http://localhost:3000.

Environment Variables

Create a .env file in the project root with the following variables:

```env
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://user:password@ep-xxxx-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
DIRECT_URL="postgresql://user:password@ep-xxxx.us-east-1.aws.neon.tech/neondb?sslmode=require"

# Authentication
NEXTAUTH_SECRET="<random-32-char-string>"

# Application URLs
APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Blockchain RPC (Base Sepolia)
NEXT_PUBLIC_BASE_SEPOLIA_RPC="https://sepolia.base.org"
```

⚠️ Never commit .env files to version control. The .env.example file is provided as a template.

Quick Deploy with Docker

The project includes a production‑ready Dockerfile with multi‑stage builds and Next.js standalone output:

```bash
# Build the Docker image
docker build --platform linux/amd64 -t attestid:latest .

# Run the container
docker run -d \
  --name attestid \
  --restart always \
  -p 3000:3000 \
  --env-file .env.production \
  attestid:latest
```

📚 Documentation

Full developer documentation is available at /docs after deployment:

Section Description
🏁 Introduction Platform overview and core concepts
⚡ Quickstart 5‑minute guides for API Key and x402 Wallet paths
🧠 Core Concepts Architecture, payment flows, credential lifecycle
📡 API Reference Interactive documentation for all REST endpoints with rate limits
🧩 SDKs & Tools Official @attestid/client SDK for JavaScript/TypeScript
📖 Tutorials Step‑by‑step use cases (DAO login, AI Agent license, Next.js integration)
🖥️ Dashboard Guide How to use the User and Admin dashboards
❓ FAQ & Support Common questions and support contact information

⛓️ Smart Contracts

AttestID leverages existing audited infrastructure on Base Sepolia — no custom smart contracts required.

Contract Address Purpose
EAS Core 0x4200000000000000000000000000000000000021 Attestation creation and revocation
EAS Schema Registry 0x4200000000000000000000000000000000000020 Credential schema registration
Circle Paymaster 0x31BE08D380A21fc740883c0BC434FcFc88740b58 Gasless transaction sponsorship
USDC (Base Sepolia) 0x036CbD53842c5426634e7929541eC2318f3dCF7e Payment token for subscriptions and pay‑per‑use

🗺️ Roadmap

Phase Milestone Status
Q2 2026 Base Sepolia testnet deployment + SDK v0.1 🟢 Current
Q2 2026 Base Mainnet launch 🔜 Next
Q3 2026 @attestid/client SDK v1.0 with full x402 support 📅 Planned
Q3 2026 ZK‑Attestations for privacy‑preserving verification 📅 Planned
Q4 2026 Multi‑chain expansion (Optimism, Arbitrum) 📅 Planned
Q4 2026 AI Agent Marketplace integration 📅 Planned

🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

Please read our Code of Conduct before contributing.

📄 License & Status

Attribute Value
Current Status 🟡 Testnet (Base Sepolia)
Mainnet Target Q2 2026
License MIT
Built With ❤️ + AI Studio Vibe Coding

📬 Contact

· Email: team@attestid.xyz
· Twitter/X: @AttestID
· Discord: Join our community
· GitHub: github.com/username/attestid

---

<p align="center">
  <b>⚡ Empowering the next generation of verifiable digital identity — for humans and AI agents alike.</b>
</p>
