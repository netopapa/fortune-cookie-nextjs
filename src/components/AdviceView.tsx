'use client';

import Image from "next/image";
import { useState } from "react";
import cookieImage from "../assets/fortune-cookie.png";
import paperImage from "../assets/paper.png";

export default function AdviceView({ adviceText }: { adviceText: string }) {
  const [showAdvice, setShowAdvice] = useState<boolean>(false);
  return (
    <>
      {showAdvice && (
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            alt="background paper"
            src={paperImage}
            width={700}
            height={466}
            style={{
              maxWidth: "100%",
              height: "auto",
              position: "absolute",
              top: "calc(50% - 233px)",
              left: "calc(50% - 350px)",
              zIndex: 1,
            }}
          />

          <h3
            className="text-gray-900 text-base z-10 text-center"
            style={{ maxWidth: "550px", transform: 'translateY(15px)' }}
          >
            {adviceText}
          </h3>
        </div>
      )}

      {!showAdvice && (
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            alt="fortune cookie"
            src={cookieImage}
            width={300}
            height={400}
            style={{
              maxWidth: "100%",
              height: "auto",
              cursor: "pointer",
            }}
          />

          <div className="h-5"></div>

          <button
            className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setShowAdvice(true)}
          >
            Show advice!
          </button>
        </div>
      )}
    </>
  );
}
