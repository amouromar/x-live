"use client";

"use client";

import {
  ChevronsDownUp,
  Languages,
  MessageSquareMoreIcon,
  SlidersHorizontalIcon,
  Paperclip,
  Smile,
  AtSign,
  X,
  Users,
  Send,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import Image from "next/image";

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: string;
  replyTo?: string | null;
  image?: string | null;
}

interface User {
  id: string;
  name: string;
  isOnline: boolean;
}

const MOCK_USERS: User[] = [
  { id: "1", name: "Alex", isOnline: true },
  { id: "2", name: "Jordan", isOnline: true },
  { id: "3", name: "Taylor", isOnline: false },
  { id: "4", name: "Casey", isOnline: true },
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [showUserList, setShowUserList] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const inputRef = useRef<HTMLInputElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const userListRef = useRef<HTMLDivElement>(null);

  // Close emoji picker and user list when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
      if (
        userListRef.current &&
        !userListRef.current.contains(event.target as Node)
      ) {
        setShowUserList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEmojiSelect = (emojiData: EmojiClickData) => {
    setInput((prev) => prev + emojiData.emoji);
    inputRef.current?.focus();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      toast.error("Image size must be less than 1MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSend = () => {
    if (!input.trim() && !selectedImage) return;

    const message: Message = {
      id: uuidv4(),
      content: input,
      timestamp: new Date().toLocaleTimeString(),
      sender: "You",
      replyTo: replyingTo,
      image: selectedImage,
    };

    setMessages((prev) => [...prev, message]);
    setInput("");
    setSelectedImage(null);
    setReplyingTo(null);
  };

  const handleUserSelect = (username: string) => {
    setInput((prev) => `${prev}@${username} `);
    setShowUserList(false);
    inputRef.current?.focus();
  };

  return (
    <div className="bg-gray-900/60 rounded-lg p-2 h-full flex flex-col">
      {/* Header */}
      <header className="flex flex-row justify-between items-center mb-2">
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-lg font-bold">Live Chat</h1>
          <MessageSquareMoreIcon className="w-7 h-7 p-1 cursor-pointer" />
        </div>
        <div className="flex flex-row gap-2">
          <Languages className="w-6 h-6 p-1 cursor-pointer" />
          <SlidersHorizontalIcon className="w-6 h-6 p-1 cursor-pointer" />
          <ChevronsDownUp className="w-6 h-6 p-1 cursor-pointer" />
        </div>
      </header>

      {/* Chat Messages */}
      <section className="flex-7 bg-gray-900/60 rounded-lg px-1 py-1 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex flex-row mr-auto items-center gap-1"
          >
            {/* Message Sender */}
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col" style={{ color: "#ff69b4" }}>
                <span className="text-sm font-bold">
                  @{message.sender.toLowerCase()}
                </span>
              </div>
            </div>{" "}
            {/* <span className="text-xs text-gray-600">&bull;</span> */}
            {/* Message Reply */}
            <div className="flex flex-row items-center max-w-[80%]">
              {message.replyTo && (
                <div className="text-sm text-gray-400 mb-1">
                  Replying to @{message.replyTo}
                </div>
              )}
              {/* Message Content */}
              <div className="rounded-lg">
                {message.image && (
                  <div className="relative w-full max-w-[300px] h-48 rounded-lg mb-2">
                    <Image
                      src={message.image}
                      alt="Message image"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </div>
                )}
                <p className="text-sm text-white/90 break-words ">
                  {message.content}
                </p>
              </div>
              {/* Timestamp
              <div className="text-xs text-gray-400">
                {message.timestamp}
              </div> */}
            </div>
          </div>
        ))}
      </section>

      {/* Chat Input */}
      <section className="relative flex-1 mt-2 bg-gray-900/60 rounded-lg">
        {selectedImage && (
          <div className="relative mb-2 w-24 h-24">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-cover rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <div className="flex flex-row items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            placeholder={
              replyingTo
                ? `Replying to @${replyingTo}...`
                : "Type your message..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray-900/60 rounded-lg p-2 text-white/80 outline-blue-300/60 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <div className="relative" ref={emojiPickerRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowEmojiPicker(!showEmojiPicker);
                setShowUserList(false);
              }}
              className="p-2 text-gray-400 hover:text-white"
            >
              <Smile className="w-5 h-5" />
            </button>
            {showEmojiPicker && (
              <div className="absolute bottom-full right-1 mb-2 z-10">
                <EmojiPicker
                  onEmojiClick={handleEmojiSelect}
                  width={300}
                  height={350}
                />
              </div>
            )}
          </div>

          <div className="relative" ref={userListRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowUserList(!showUserList);
                setShowEmojiPicker(false);
              }}
              className="p-2 text-gray-400 hover:text-white"
            >
              <AtSign className="w-5 h-5" />
            </button>
            {showUserList && (
              <div className="absolute bottom-full right-1 mb-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10">
                <div className="p-2 border-b border-gray-700 text-sm font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Tag someone</span>
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {users
                    .filter((u) => u.isOnline)
                    .map((user) => (
                      <div
                        key={user.id}
                        onClick={() => handleUserSelect(user.name)}
                        className="px-3 py-2 text-sm hover:bg-gray-700 cursor-pointer flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        {user.name}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <label className="cursor-pointer p-2 text-gray-400 hover:text-white">
            <Paperclip className="w-5 h-5" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={handleSend}
            disabled={!input.trim() && !selectedImage}
            className="p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Chat;
