import { Accordian } from "@/components/userComp/accoridan";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <h1 className="text-center">Accoridon Example</h1>
        <Accordian />
      </div>
    </main>
  );
}
