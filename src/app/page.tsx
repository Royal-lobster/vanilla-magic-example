import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const ConnectButton = dynamic(() => import("@/components/ConnectButton"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex text-center items-center max-w-md bg-neutral-700 p-10 rounded-md shadow-md justify-center flex-col gap-2">
        <h1 className="text-2xl font-bold">Vanilla rainbow connector</h1>
        <p className="text-sm text-neutral-400">
          You can connect with any social media accounts or email by clicking on
          connect button below
        </p>
        <ConnectButton />
      </div>
    </main>
  );
}
