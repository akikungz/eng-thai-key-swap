"use client";
import { useState } from "react";

import { FaClipboard } from "react-icons/fa";

import { engMapThai, thaiMapEng } from "@/assets/data";

export default function Home() {
  const [engKey, setEngKey] = useState("");
  const [thaiKey, setThaiKey] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <main className="container mx-auto flex flex-col md:flex-row items-center justify-center h-screen gap-8 p-4">
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
        <div className="w-full h-16 flex items-center justify-center">
          <span className="text-4xl font-bold">Eng key</span>
          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => copyToClipboard(engKey)}
          >
            <FaClipboard />
          </button>
        </div>
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

      <div className="w-8 h-8 hidden md:flex items-center justify-center">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-md"
          onClick={() => {
            const temp = engKey;
            setEngKey(thaiKey);
            setThaiKey(temp);
          }}
        >
          ⬌
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
        <div className="w-full h-16 hidden items-center justify-center md:flex">
          <span className="text-4xl font-bold">Thai key</span>
          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => copyToClipboard(thaiKey)}
          >
            <FaClipboard />
          </button>
        </div>
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
