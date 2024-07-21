import CssModule from "@/components/CssModule";
import DataFetching from "@/components/DataFetching";
import UseGlobalCSS from "@/components/UseGlobalCSS";
import UseImage from "@/components/UseImage";
import UseRouter from "@/components/UseRouter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Jai Shree Ram</h1>
      <hr />
      Learning UseRouter Concepts
      <UseRouter />
      <UseGlobalCSS />
      <CssModule />
      <UseImage />
      <DataFetching />
    </main>
  );
}
