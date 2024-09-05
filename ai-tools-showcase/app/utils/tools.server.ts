interface Tool {
  slug: string;
  name: string;
  description: string;
  emoji: string;  // 修改为 emoji
  url: string;
}

const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    description: "Powerful AI chat tool",
    emoji: "🤖",  // emoji
    url: "https://chat.openai.com/",
  },
  // 添加更多工具...
];

export async function getTools() {
  return tools;
}

export async function getToolBySlug(slug: string | undefined) {
  return tools.find((tool) => tool.slug === slug);
}
