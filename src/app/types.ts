export interface AgentMessage {
  agentName: string;
  messages: unknown[];
  nodeName: string;
  nodeId: string;
  usedTools?: unknown[];
  sourceDocuments?: unknown[];
  artifacts?: unknown[];
  state?: Record<string, unknown>;
}

export interface AIResponse {
  text: string;
  question: string;
  chatId: string;
  chatMessageId: string;
  sessionId: string;
  memoryType: string;
  agentReasoning: AgentMessage[];
}
