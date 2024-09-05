import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getToolBySlug } from "../utils/tools.server";

export const loader: LoaderFunction = async ({ params }) => {
  const tool = await getToolBySlug(params.slug);
  if (!tool) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ tool });
};

export default function ToolDetail() {
  const { tool } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{tool.name}</h1>
      <span className="text-6xl mb-8 block">{tool.emoji}</span>  {/* emoji */}
      <p className="text-lg mb-4">{tool.description}</p>
      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        使用工具
      </a>
    </div>
  );
}
