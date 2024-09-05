import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getTools } from "~/utils/tools.server";
import ToolCard from "~/components/ToolCard";

export const loader = async () => {
  const tools = await getTools();
  return json({ tools });
};

export default function Index() {
  const { tools } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-3xl font-bold my-8">AI-Tools-Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
