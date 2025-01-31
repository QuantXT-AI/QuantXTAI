# QuantXT 🤖💰

QuantXT is an AI-powered chatbot that provides deep insights into your cryptocurrency portfolio across Ethereum and Solana networks. With dual personality modes and real-time analysis powered by Birdeye API, QuantXT helps you track your crypto journey - from your biggest wins to your most painful "rekt" moments.

## Features 🌟

### Wallet Analysis
- Multi-chain support (Ethereum & Solana)
- Real-time portfolio tracking
- Historical transaction analysis
- Performance metrics visualization

### Personality Modes 😈😇
- **Evil QuantXT**: Sarcastic, ruthless, and brutally honest about your trading mistakes
- **Good QuantXT**: Supportive, encouraging, and focuses on learning opportunities

### Analysis Features
- **Fumble Detection**: Identifies missed opportunities and suboptimal trades
- **Rekt Analysis**: Calculates and analyzes your biggest losses
- **Transaction Timeline**: Comprehensive view of your trading history
- **Real-time Monitoring**: Live updates on portfolio performance via Birdeye API

## Tech Stack 🛠️

- **Frontend**: Next.js 14, React, TailwindCSS
- **State Management**: Redux Toolkit
- **Blockchain Integration**: ethers.js, @solana/web3.js
- **API Integration**: Birdeye API
- **AI/ML**: OpenAI GPT for natural language processing
- **Data Visualization**: Chart.js, D3.js

## Getting Started 🚀

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Birdeye API key
- Ethereum/Solana wallet

### Installation

1. Clone the repository:
git clone https://github.com/yourusername/QuantXT.git
cd QuantXT

2. Install dependencies:
npm install

3. Configure environment variables:
cp .env.example .env.local

Fill in your environment variables:
```env
NEXT_PUBLIC_BIRDEYE_API_KEY=your_birdeye_api_key
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
```

4. Run the development server:
npm run dev

Visit http://localhost:3000 to see your application.

## Usage 💡

1. Connect your wallet (Ethereum or Solana)
2. Choose your preferred QuantXT personality (Evil/Good)
3. Start chatting! Ask questions like:
   - "Show me my biggest fumbles this month"
   - "How rekt am I from the recent market crash?"
   - "Analyze my latest transactions"
   - "What's my current portfolio status?"

## API Integration 🔌

### Birdeye API Integration
```typescript
import { BirdeyeClient } from './lib/birdeye';

const client = new BirdeyeClient({
  apiKey: process.env.NEXT_PUBLIC_BIRDEYE_API_KEY,
  network: 'mainnet',
});
```

## Architecture Overview 🏗️

The system architecture is visualized in the diagram above, showing the interaction between different components:
- User Interface Layer
- Core Processing System
- Blockchain Integration
- Analysis Features
- Real-time Data Processing

## Security 🔒

- Client-side wallet connection only - private keys never leave the user's browser
- API key protection via environment variables
- Rate limiting on API endpoints
- Regular security audits

## Contributing 🤝

1. Fork the repository
2. Create your feature branch: git checkout -b feature/AmazingFeature
3. Commit your changes: git commit -m 'Add some AmazingFeature'
4. Push to the branch: git push origin feature/AmazingFeature
5. Open a Pull Request

## Roadmap 🗺️

- [ ] Support for additional blockchain networks
- [ ] Advanced trading pattern recognition
- [ ] Social features and portfolio sharing
- [ ] Mobile app development
- [ ] Custom personality creation
- [ ] Integration with DeFi protocols
- [ ] Automated trading suggestions
- [ ] NFT portfolio analysis

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Birdeye API for real-time data
- OpenAI for natural language processing
- The amazing crypto community

## Stay Connected 🌐

- [Website](https://quantxt.io)
- [Twitter](https://twitter.com/quantxt)
