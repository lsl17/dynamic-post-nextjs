import Image from "next/image"
import { useState } from "react"

const WebElement = ({ href, badge = false }: { href: string, badge?: boolean }) => {
    return (
        <div className="flex justify-center relative items-center w-[37px] h-[37px] bg-[#deebf3] border border-[#088dcd] text-[#088dcd] rounded-full cursor-pointer">
            <svg className="w-[18px] h-[18px] stroke-current fill-[#088dcd17] stroke-2 "><use href={href} /></svg>
            {badge && <div className="w-[8px] h-[8px] bg-[#ff7373] absolute top-[1px] right-[1px] rounded-full"></div>}
        </div>
    )
}
const SearchItem = ({ src, title }: { src: string, title: string }) => {
    return (
        <div className="flex justify-between hover:bg-[#e3f0f8] p-2 rounded-md items-center transition-all ease-in-out cursor-pointer">
            <div className="flex gap-1 items-center rounded-full text-[12px] font-bold p-[3px_10px_3px_4px] cursor-pointer transition-all ease-in-out text-[#3e3f5e]">
                <Image className="h-[30px] rounded-full" width={30} height={30} src={src} alt='user' />
                {title}
            </div>
            <div>...</div>
        </div>
    )
}
const Header = () => {
    const [active, setActive] = useState(false)
    return (
        <div className="flex justify-between items-center w-full h-[70px] px-[15px] py-[10px] bg-[#f5f5f5] shadow-md sticky top-0 z-10">
            <div className="flex gap-4 items-center">
                <Image className="h-[30px]" priority src='/logo.png' alt='logo' width={40} height={30} />
                <h1 className="text-[24px] font-bold">Socimo</h1>
                <div onClick={() => setActive(true)} className="h-[43px] overflow-visible">
                    <div className={`h-fit rounded-lg ${active ? 'shadow-lg bg-white' : ''}`}>
                        <div className="relative">
                            <input className={`outline-none w-[400px] h-[43px] ${active ? 'p-[10px_20px_10px_10px]' : 'border p-[10px_20px_10px_43px]'} border-[#e1e8ed] rounded-full`} placeholder="Search..." />
                            {active &&
                                <div onClick={(e) => { setActive(false); e.stopPropagation(); }} className="absolute right-2 top-3 cursor-pointer border-[#ccc] rounded-full text-[14px] p-[1px] leading-[14px]">&#10006;</div>
                            }
                        </div>
                        {active &&
                            <div className="w-full h-[300px] bg-white p-2 font-Roboto text-[#3e3f5e]">
                                <h1 className="font-bold text-[14px]">Your recent research</h1>
                                <div className="flex flex-col">
                                    <SearchItem src='/user1.jpg' title="Danial Carabal" />
                                    <SearchItem src='/user2.jpg' title="Maria K" />
                                    <SearchItem src='/user3.jpg' title="Fawad Khan" />
                                    <SearchItem src='/user4.jpg' title="Danial Sandos" />
                                    <SearchItem src='/user5.jpg' title="Jack Carter" />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex gap-1 items-center rounded-full text-[12px] font-bold border border-[#088dcd] p-[3px_10px_3px_4px] cursor-pointer hover:bg-[#e3f0f8] transition-all ease-in-out text-[#3e3f5e]">
                    <Image className="h-[30px] rounded-full" width={30} height={30} src='/user.jpg' alt='user' />
                    Daniel Cardos
                </div>
                <WebElement href="#symbol-live" />
                <WebElement href="#symbol-home" />
                <WebElement href="#symbol-msg" badge />
                <WebElement href="#symbol-notification" badge />
                <WebElement href="#symbol-plus" />
                <WebElement href="#symbol-grid" />
            </div>
        </div>
    )
}
export default Header;