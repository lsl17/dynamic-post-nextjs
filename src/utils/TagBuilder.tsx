import { dataType } from "@/store/types";
import { min, random } from "lodash";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
const MIN_TEXTAREA_HEIGHT = 32;
const XHeading = ({ title }: { title?: string }) => {
    const [val, setVal] = useState(title)
    return (
        <input onChange={e => setVal(e.target.value)} value={val} className="w-full outline-none text-[#3e3f5e] text-[15px]" placeholder="Heading goes here..." />
    )
}
const XDescription = ({ title }: { title?: string }) => {
    const [val, setVal] = useState(title)
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    useLayoutEffect(() => {
        if (!textareaRef?.current) return
        // Reset height - important to shrink on delete
        textareaRef.current.style.height = "inherit";
        // Set height
        textareaRef.current.style.height = `${Math.max(
            textareaRef.current.scrollHeight,
            MIN_TEXTAREA_HEIGHT
        )}px`;
    }, [val]);
    return (
        <textarea ref={textareaRef}
            onChange={e => setVal(e.target.value)}
            value={val} className="w-full outline-none text-[14px] text-[#7d7e9e] border-black" placeholder="Description goes here..." />
    )
}
const XImage = ({ sources = [''] }: { sources?: string[] }) => {
    return (
        <div className="flex w-full">
            <div className="grid w-full" style={{ gridTemplateColumns: `repeat(${min([sources.length, sources.length > 4 ? 3 : 2])}, minmax(0, 1fr))` }}>
                {sources.map((item, i) => <Image key={i} src={sources[i]} alt='img' layout='responsive' width={300} height={500} />)}
            </div>
        </div>
    )
}
const TagBuilder = ({ key, tag, ...rest }: { key: number } & dataType) => {
    switch (tag) {
        case 'XHeading':
            return <XHeading key={key} {...rest} />
        case 'XDescription':
            return <XDescription key={key} {...rest} />
        case 'XImage':
            return <XImage key={key} {...rest} />
        default:
    }
}
export default TagBuilder;