import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import styles from "~/styles/global.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <Document>
      <div className="flex flex-col min-h-screen"> {/* Flexbox container */}
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8"> {/* Main area that grows */}
          <Outlet /> {/* Render child routes here */}
        </main>
        <Footer />
      </div>
    </Document>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

