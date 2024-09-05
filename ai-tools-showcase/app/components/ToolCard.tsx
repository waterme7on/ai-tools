import { Link } from "@remix-run/react";

interface ToolCardProps {
  tool: {
    slug: string;
    name: string;
    description: string;
    emoji: string;  // 修改为 emoji
  };
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link to={`/tools/${tool.slug}`} className="block">
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
        <span className="text-6xl mb-4 block">{tool.emoji}</span>  {/* emoji */}
        <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
        <p className="text-gray-600">{tool.description}</p>
      </div>
    </Link>
  );
}
