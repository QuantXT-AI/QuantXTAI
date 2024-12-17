import { uuidv4 } from "https://jslib.k6.io/k6-utils/1.4.0/index.js";
import { check, sleep } from "k6";
import http from "k6/http";

// Test configuration
export const options = {
  vus: 10, // virtual users
  duration: "30s",
};

// Generate random Ethereum address
function generateRandomEthAddress() {
  const chars = "0123456789abcdef";
  let addr = "0x";
  for (let i = 0; i < 40; i++) {
    addr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return addr;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const payload = {
    question: "show me my top 5 fumble",
    character: "evil",
    walletAddress: generateRandomEthAddress(),
    sessionId: uuidv4(),
    history: [
      {
        role: "apiMessage",
        content: "think you're ready for the crypto world? think again...",
      },
    ],
  };

  const headers = {
    accept: "*/*",
    "content-type": "application/json",
    cookie: "characterId=good",
    origin: "https://cryaistal.ai",
    referer: `https://cryaistal.ai/cryaistal-agent?type=EVIL&walletAddress=${payload.walletAddress}`,
  };

  const response = http.post(
    "https://cryaistal.ai/ask-question",
    JSON.stringify(payload),
    { headers: headers },
  );

  check(response, {
    "is status 200": (r) => r.status === 200,
  });

  sleep(1);
}
