# Yuna Interactive

Full-stack Development

### Frontend Development

- [x] P0: Implement ScrollArea on Chat Interface
- [x] P0: Update Video with the Right Assets
- [x] P0: Disable Auto Scroll if it's still too glitchy
- [x] P0: View Trade Details -> open Dexscreener in the same window
- [x] P1: FAQ in Chat Box (would show on the very first chat)
- [x] P1: Tackle All Feedback from the Sheets
- [x] P0: New Photo Yuna & Video Yuna
- [x] P0: Dynamic Copywriting
- [x] P0: Photo Founder Update
- [x] P0: Trigger Yuna Traits by Chat
- [x] P0: Add Button at the top right of the page to redirect to Research Paper
- [x] P0: Update Opengraph and Social Media Card Copywriting
- [x] P0: Video Implementation on Chat Page Sidebar
- [x] P0: Video Implementation on USP (Producs) Section
- [x] P0: New Nav Bar Interaction (would show sub menu of information)
- [x] P0: Implement Whole Layout (layout only) of the New Design (3rd Iteration)
  - [x] Landing Page
  - [x] Chat Page
- [x] P0: Update Quick Chat list
- [x] P0: Agree with Slightly Different User Flow (no connect wallet, all manual input and only on Chat Page)
- [x] P0: Agree with User should fill their wallet first before interacting with Yuna
- [x] P0: Character Selection feature that would change the theming and copywriting
- [x] P0: Swap Founder Position to the Top
- [x] P1: Video Implementation on Hero Section
- [x] P1: New Loading State (Pinky-Pinky vibes with Custom Spinner)
- [x] P1: Overlapping Yuna on Footer
- [x] P1: Video Transition when visiting Chat Page
- [x] P2: Bugfix where clicking links in product section are not scrolling to top of the page
- [x] P2: Bugfix where Sidebar Character Selector layout shifted on load
- [x] P2: Character Selection on Sidebar (Chat with Character Page)
- [x] P2: Dynamic Quick Chat Suggestions
- [ ] P2: Info Coming Soon for Voice Support on Chat Page
- [ ] P2: Streaming mode (update status terakhir si Agent lagi ngapain, ala ala WayFinder.ai)

### Blockchain API Development

- [ ] Overall Trading Analysis
  - [ ] Launch timestamp
  - [ ] ATH price + timestamp before buying
  - [ ] ATH timestamp when holding
  - [ ] ATH timestamp after selling
  - [ ] Wallet Portfolio
    - [ ] Total Portfolio (Meme coin) values (HMW classify if a token is a meme?)
    - [ ] Get Actual Current Remaining Tokens (for 5 Past Trades)
    - [ ] For each portfolio get its buying price VS current price to get top gainer vs top loser
- [x] Search $TICKER to find Token Address (search-ticker)
  - [x] Use DexScreener Pair API to token address by ticker (symbol)
- [x] Supporting Data for Search for $TICKER or Token Address (Assist) (ticker-deep-diver)
  - [x] Price
  - [x] Market Cap
  - [x] 1hr Volume (Dumping or Pumping Phase)
  - [x] Token Security (Optional)
- [x] Improvement
  - [x] ATH Price OHLCV for smaller timeframe
  - [x] Exit Time bug when no last selling
  - [x] Add Ethereum price data
- [x] Agree with Currency to Calculate PnL (SOL vs USD Value) -> USD + SOL (using USD Conversion)
- [x] All Trades Data of a Wallet (last 100 trades or last 3 months)
  - [x] Is This Token Trades profiting or losing? Trading PnL
  - [x] Market Cap When Entry
  - [x] Market Cap When Selling
  - [x] Current Market Cap
  - [x] Position Sizing per Trade
  - [x] ATH Price during hold
  - [x] ATH Price after sell
  - [x] Flag if this token is not fully traded (could be from external transfer / airdrop / etc)
  - [x] Flag if this token is not fully exited (has remaining tokens)
- [x] Supporting Data for (n) Past Trades (past_trades)
- [x] Supporting Data for top (n) Fumble (fumble_checker)
- [x] Supporting Data for top (n) Rekt (rekt_checker)
- [x] Supporting Data for Deep Dive Analysis on my $TICKER Trades (Past) (deep_dive_analysis_past) (Analyze)
- [ ] Monitor Birdeye Limitation (Starter Package: $99, 3 Millions CU, 1,000 rpm, $33 per 1M Additional CUs)
- [ ] Monitor Vercel Serverless Limitation (Pro Package: $20, 5 Minutes Max Duration Timeout)
- [ ] Monitor Upstash Rate Limit and Redis

### AI Agent Development

- [ ] CTA CTA CTA for every past trades
- [ ] Twitter Endpoints Fix
  - [x] Harusnya pakai username and password aja supaya gak pakai Twitter API V2 karena kita gak butuh posting
  - [x] Lower down the max timeout limit, supaya gak kelamaan, currently 30 secs padahal dah obvious failed
  - [x] Utilize Cookie to avoid login everytime requesting fetch tweets
  - [x] Utilize Proxy to avoid IP Block
  - [x] Add fetch on fetch params in Scraper for Edge Runtime Hosting
  - [ ] Adjust supaya show search result for last 24 hours -> resource heavy -> filtering
- [ ] Fine tuning prompts
  - [ ] Deep Dive make sure match with Figma mockup/from PRD
- [ ] Testing for (n) Latest Trades (latest_trades)
- [ ] Testing for top (n) Fumble (fumble_checker)
- [ ] Testing for top (n) Rekt (rekt_checker)
- [ ] Testing for Ticker Deep Dive Analysis on my $TICKER Trades (Past) (deep_dive_analysis_past) (Analyze)
  - [ ] Twitter/X API Data Fetching to define "Hype of Coin" based on total tweets indicator
- [ ] Testing for Search for $TICKER or $TOKEN_ADDRESS (Assess) (ticker_search)
  - [ ] Twitter/X API Data Fetching to generate "Crypto Thesis and Insights" by sorting all Twitter Threads from account with > 1k followers
- [ ] At the end of each response, agent should always offer what possible actions that user could do
- [ ] Explore Twitter (Official API / Eliza) + Search Engine (Aggregated Data Sources)
  - [ ] Twitter Account List for references
  - [ ] Portal News (e.g. Binance Research)
- [ ] P1: Overall Trading Analysis from Docs
  - [ ] P1: For Fumble etc, make sure to always put overall summary at the top
- [x] Support 5 Characters traits, provide support on 1 single endpoint
- [x] BTS Documentation
- [x] Whitepaper

### Misc. Completed ✓

- [x] Frontend Base Layout (2nd Iteration)
- [x] Frontend x Backend x AI Agent Communication mechanics
- [x] Get All Trades Data on Blockchain (Enhanced + Sanitized)
- [x] Redis Caching Implementation (to speed up the process and minimize Birdeye rate limit hit)
- [x] Core Flow Rate Limit Implementation
