"use client";

import React from "react";
import { useChat } from "ai/react";
import ReactMarkdown from 'react-markdown';
import ThemeToggle from "./ThemeToggle";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="relative max-w-2xl mx-auto h-screen flex flex-col min-h-screen bg-lmgray dark:bg-dmbg">
      <div className="flex-grow pt-10 space-y-4 overflow-auto">
        {messages.length === 0 ? (
          <div className="border p-4 rounded bg-white dark:bg-gray-800">
            <h2 className="text-xl text-black dark:text-white">Selam👋,</h2>
            <p className="text-black dark:text-gray-200">
              Bu Chatbot DevChatBot. Bu Chatbot sadece Yazılımcılar ve Geliştiriciler için çalışıyor. Yazılım ve Kodlama hakkında istediğini sorabilirsin.
            </p>
          </div>
        ) : (
          <ul className="space-y-2">
            {messages.map((item, index) => (
              <li key={index} className={item.role === "user" ? "flex justify-end text-green-500 dark:text-green-400" : ""}>
                {item.role === "user" ? (
                  <p className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-gray-800">
                    {item.content}
                  </p>
                ) : (
                  <article className="prose lg prose-dark">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-gray-800">
                      <ReactMarkdown>{item.content}</ReactMarkdown>
                    </div>
                  </article>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-dmbg">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            disabled={isLoading}
            placeholder="Konuşmaya Başlamak İçin Bir Şeyler Yaz!"
            value={input}
            onChange={handleInputChange}
            type="text"
            className="border-2 rounded-md p-2 w-full bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          />
          <button
            type="submit"
            className={`bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Gönderiliyor..." : <span className="transform rotate-90">&#9650;</span>}
          </button>
        </form>
      </div>
      <div className="absolute bottom-4 right-4">
      </div>
    </div>
  );
}
