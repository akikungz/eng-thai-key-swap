"use client";
import { useState } from "react";

import { engMapThai, thaiMapEng } from "@/assets/data";

export default function Home() {
  const [engKey, setEngKey] = useState("");
  const [thaiKey, setThaiKey] = useState("");

  return (
    <main className="container mx-auto flex flex-col md:flex-row items-center justify-center h-screen gap-8 p-4">
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
        <span className="text-4xl font-bold">Eng key</span>
        <textarea
          className="w-full h-full p-2 border border-gray-300 rounded-md"
          placeholder="Type your text here..."

          // Set the value of the textarea to the state variable
          value={engKey}
          onChange={(e) => {
            setEngKey(() => {
              setThaiKey(() => {
                let opt = "";
                const eng = e.target.value;
                
                for (let i = 0; i < eng.length; i++) {
                  opt += engMapThai[eng[i] as keyof typeof engMapThai] || eng[i];
                }

                return opt;
              });

              return e.target.value;
            });
          }}
        />
      </div>

      {/* vertical divider */}
      <div className="border-r border-gray-300 h-full hidden md:block" />

      {/* horizontal divider */}
      <div className="border-b border-gray-300 w-full md:hidden" />

      <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
        <span className="text-4xl font-bold hidden md:block">Thai key</span>
        <textarea
          className="w-full h-full p-2 border border-gray-300 rounded-md"
          placeholder="Type your text here..."

          // Set the value of the textarea to the state variable
          value={thaiKey}
          onChange={(e) => {
            setThaiKey(() => {
              setEngKey(() => {
                let opt = "";
                const thai = e.target.value;
                
                for (let i = 0; i < thai.length; i++) {
                  opt += thaiMapEng[thai[i] as keyof typeof thaiMapEng] || thai[i];
                }

                return opt;
              });

              return e.target.value;
            });
          }}
        />

        <span className="text-4xl font-bold md:hidden">Thai key</span>
      </div>
    </main>
  );
}
