import PostModal from "@/components/PostModal";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import { useState } from "react";


import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {MentionsInput, Mention } from 'react-mentions';

const StoryPortal = ({ plus = false, src, href, title }: { plus?: boolean, src: string, href: string, title: string }) => {
  return (
    <div className="relative rounded-md overflow-hidden cursor-pointer">
      <Image className="hover:scale-105 transition-all ease-in-out duration-500" src={src} width={109} height={192} alt='story' />
      <Image className="absolute top-[5px] left-[5px] rounded-full border-2 border-[#ffffffcc]" src={href} alt='user' width={35} height={35} />
      {plus && <div className="absolute bottom-[28px] left-[44.5px] w-[30px] h-[30px] border border-white rounded-full bg-[#088dcd] text-white text-center leading-[28px] cursor-pointer">&#43;</div>}
      <div className="absolute bottom-0 bg-[#000000b3] w-[109px] text-center text-white text-[14px]">{title}</div>
    </div>
  )
}
const ReactIcon = ({ title, href }: { title: string, href: string }) => {
  return (
    <div className="flex gap-1">
      <svg className="w-[16px] h-[32px] stroke-[#088dcd] fill-[#088dcd17] stroke-2"><use href={href} /></svg>
      <h5 className="text-[12px]">{title}</h5>
    </div>
  )
}
const Index = () => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('');
  const [mentions, setMentions] = useState([]);
  const mentionsConfig = {
    markup: '@[__display__](__id__)',
    displayTransform: (id, display) => `@${display}`,
    suggestions: [
      { id: 1, display: 'John Doe' },
      { id: 2, display: 'Jane Smith' },
      { id: 3, display: 'Bob Johnson' },
    ],
  };
  return (
    <main className={`p-12`} >
      {show && <PostModal />}
      <div>
        <MentionsInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ border: '1px solid #ccc', padding: '10px' }}
        >
          <Mention
            trigger="@"
            data={mentionsConfig.suggestions}
            renderSuggestion={(suggestion) => suggestion.display}
            onAdd={(id, display) =>
              setMentions([...mentions, { id, display }])
            }
          />
          <textarea />
        </MentionsInput>
        <Picker onSelect={(emoji:any) => setValue(value + emoji.native)} />
      </div>
      <div className="max-w-[1100px] flex gap-4 mx-auto text-[#3e3f5e]">
        <div className="w-[285px] flex flex-col">
          <Image src='/ad-widget2.gif' alt='advertisement' width={285} height={248} />
        </div>
        <div className="flex-grow">
          <div onClick={() => setShow(true)} className="w-fit text-[18px] text-white bg-sky-600 border border-[#ccc] rounded-full p-4 cursor-pointer hover:bg-sky-500 transition-all ease-in-out mb-5">+ Create New Post</div>
          <div className="flex justify-between">
            <h1 className="font-bold">Recent Stories</h1>
            <p className="text-[12px] text-[#088dcd] underline cursor-pointer">See all</p>
          </div>
          <div className="flex justify-between gap-[2px] p-2">
            <StoryPortal plus src='/story-card5.jpg' href='/user3.jpg' title="Add your story" />
            <StoryPortal src='/story-card.jpg' href='/user6.jpg' title="Tamana Bhatia" />
            <StoryPortal src='/story-card2.jpg' href='/user7.jpg' title="Emily Caros" />
            <StoryPortal src='/story-card3.jpg' href='/user8.jpg' title="Daniel Cardos" />
            <StoryPortal src='/story-card4.jpg' href='/user2.jpg' title="Emma Watson" />
          </div>
          <div className="flex flex-col gap-2 w-full p-4 bg-[#fafafa] border border-[#ccc] rounded-md">
            <div className="flex justify-between w-full mb-4">
              <div className="flex gap-4">
                <div className="relative w-fit">
                  <Image className="h-[40px] rounded-full border border-[#cacaca]" width={40} height={40} src='/user1.jpg' alt='user' />
                  <svg className="w-[15px] h-[15px] absolute bottom-0 right-0"><use href='#symbol-verified' /></svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <h1 className="text-[14px] text-[#088dcd] font-bold">Jack Carter</h1>
                    <h4 className="text-[12px]">Share post</h4>
                  </div>
                  <h1 className="text-[12px]">Published: Sep,15 2020</h1>
                </div>
              </div>
              <svg className="w-[40px] h-[40px] stroke-[#088dcd] hover:bg-[#dee8f3] rounded-full cursor-pointer transition-all duration-500 ease-in-out p-2"><use href="#symbol-dot-3" /></svg>
            </div>
            <h1 className="text-[#3e3f5e] text-[15px]">Supervision as a Personnel Development Device</h1>
            <p className="text-[14px] text-[#7d7e9e]">Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
            <hr />
            <div className="flex gap-4">
              <ReactIcon href="#symbol-eye" title="1.2k" />
              <ReactIcon href="#symbol-msg" title="54" />
              <ReactIcon href="#symbol-star" title="5k" />
              <ReactIcon href="#symbol-share" title="205" />
            </div>
          </div>
        </div>
        <div className="w-[285px] flex flex-col">
          <div className="flex flex-col h-[200px] bg-[#fafafa] border border-[#e1e8ed] rounded-md p-4 gap-4">
            <h1 className=" text-[15px] font-semibold">Your groups</h1>
            <div className="h-[70px] flex items-center gap-4">
              <Image className="rounded-full" src='/your-group1.jpg' alt='group' width={60} height={60} />
              <div className="flex flex-col gap-[1px]">
                <h5 className="text-[13px] font-semibold">Good Group</h5>
                <p className="text-[12px]">Notifications</p>
                <p className="text-[12px] text-[#088dcd] underline cursor-pointer">View feed</p>
              </div>
            </div>
            <div className="h-[70px] flex items-center gap-4">
              <Image className="rounded-full" src='/your-group2.jpg' alt='group' width={60} height={60} />
              <div className="flex flex-col gap-[1px]">
                <h5 className="text-[13px] font-semibold">E-course Group</h5>
                <p className="text-[12px]">Notifications</p>
                <p className="text-[12px] text-[#088dcd] underline cursor-pointer">View feed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2000px]"></div>
    </main >
  )
}
Index.getLayout = MainLayout;
export default Index;