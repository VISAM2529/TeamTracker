"use client";
import React, { useState } from "react";

const Page = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState([]);

  const handleChangeBtn = (e) => {
    setPrompt(e.target.value);
  };

  const handleGenerateBtn = async () => {
    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (data.result) {
        setPrompt("");
        let result_output =
          data.result.response.candidates[0].content.parts[0].text;
        result_output = result_output.replace("**", "<br/>");
        setOutput([...output, result_output]);
      }
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col-reverse">
      <div className="w-full flex items-center justify-between gap-2">
        <input
          onChange={handleChangeBtn}
          className="w-3/4 pt-3 pb-3 pl-10 rounded-lg bg-white outline-none"
          placeholder="Explore anything..."
          value={prompt}
        />
        <button
          onClick={handleGenerateBtn}
          className="bg-black w-1/4 p-3 text-white rounded-lg leading-relaxed block"
        >
          E x p l o r e
        </button>
      </div>
      <div className="p-5 flex flex-col gap-5">
        {output?.map((res) => {
          return (
            <h1
              key={output.indexOf(res)}
              className="text-xl shadow-lg bg-white p-5 rounded-lg"
            >
              {res ? res : "Generating"}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
