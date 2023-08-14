import { PortalContext, usePortalContext } from "@/store/store";
import { dataType } from "@/store/types";
import TagBuilder from "@/utils/TagBuilder";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const PortHead = () => {
    return (
        <div className="flex justify-between bg-[#f0f0f0] p-4 rounded-t-md">
            <div className="flex gap-4">
                <div className="relative w-fit">
                    <Image className="rounded-full border border-[#ccc]" src='/user6.jpg' alt='user' width={50} height={50} />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                        <h1 className="text-[14px] text-[#088dcd] font-bold">Jack Carter</h1>
                        <h4 className="text-[12px]">Share post</h4>
                    </div>
                    <h1 className="text-[12px]">Editing now...</h1>
                </div>
            </div>
            <button className="w-10 h-10 flex justify-center items-center shadow-md rounded-full">&#10006;</button>
        </div>
    )
}
const ToolItem = ({ src, onClick }: { src: string, onClick?: () => void }) => {
    return (
        <Image onClick={onClick} className="h-[20px] cursor-pointer hover:scale-105" src={src} alt='tool' width={20} height={20} />
    )
}
const PortFoot = () => {
    const { data, setData } = usePortalContext();
    const [sources, setSources] = useState([''])
    // const [imgCount, setImgCount] = useState(0)
    const imgCount = useRef(0);
    useEffect(() => {
        if (sources[0] === '' || imgCount.current == 0) return;
        if (sources.length === imgCount.current) {
            setData((prev: dataType[]) => {
                const new_data = [...prev]
                new_data.push({ tag: 'XImage', sources });
                return new_data;
            })
            setSources([''])
        }
    }, [sources])
    const ref = useRef<HTMLInputElement>(null);
    const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        // setImgCount(files ? files.length : 0)
        imgCount.current = files ? files.length : 0;
        for (let i = 0; i < (files ? files.length : 0) && files; i++) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const resultUrl: string = reader.result as string;
                setSources((prev) => {
                    const new_data = [...prev];
                    new_data.push(resultUrl);
                    if (new_data[0] === '') new_data.splice(0, 1);
                    return new_data;
                });
            };
            reader.readAsDataURL(files?.[i]);
        }
    }
    return (
        <div className="flex justify-between bg-[#f0f0f0] p-4 rounded-b-md">
            <div className="flex gap-2 items-center">
                <ToolItem onClick={() => setData((prev: dataType[]) => {
                    const new_data = [...prev]
                    new_data.push({ tag: 'XHeading' });
                    return new_data;
                })} src='/icon-head.png' />
                <ToolItem onClick={() => setData((prev: dataType[]) => {
                    const new_data = [...prev]
                    new_data.push({ tag: 'XDescription' });
                    return new_data;
                })} src='/icon-cont.png' />
                <ToolItem onClick={() => { ref.current?.click() }} src='/icon-pic.png' />
                {/* <ToolItem src='/icon-gif.png' /> */}
                <div className="flex flex-col w-[20px] h-[20px] overflow-visible">
                    <ToolItem src='/icon-emoji.png' />
                    <div className="w-[400px] h-[400px] bg-white rounded-md shadow-sm mt-2">
                        <div className="flex flex-wrap gap-2 h-full overflow-scroll p-4">
                            {Array.from({ length: 307 }, (_, i) => i).map((item, i) =>
                                <Image className="hover:scale-110 cursor-pointer transition-all ease-in-out hover:bg-[#eee] rounded-md" key={i} src={`/emoji/_default/emoji (${item + 1}).png`} alt='img' width={30} height={30} />)}
                        </div>
                    </div>
                </div>
                <input type="file" ref={ref} hidden accept="image/*" multiple onChange={handleFileInputChange} />
                {/* image/jpeg,image/png,image/bmp,image/tiff,image/svg+xml,image/avif */}
            </div>
            <button className="bg-sky-600 text-white px-4 py-2 rounded-full">Post</button>
        </div>
    )
}
const PortContent = () => {
    const { data, setData } = usePortalContext();
    return (
        <div className='flex flex-col gap-2 w-full p-4'>
            {data.map((item, i) => TagBuilder({ key: i, ...item }))}
        </div>
    )
}


const PostModal = () => {
    const [data, setData] = useState<dataType[]>([
        { tag: 'XHeading', title: 'Supervision as a Personnel Development Device' },
        { tag: 'XDescription', title: 'Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.' }
    ])
    useEffect(() => { console.log(data) }, [data])
    return (
        <PortalContext.Provider value={{ data, setData }}>
            <div className="fixed max-h-[100vh] overflow-y-auto left-0 right-0 top-0 bg-black/40 bottom-0 z-10 p-10">
                <div className="flex flex-col gap-2 max-w-[600px] mx-auto rounded-md shadow-md bg-white">
                    <PortHead />
                    <PortContent />
                    <PortFoot />
                </div>
            </div>
        </PortalContext.Provider>
    )
}
export default PostModal;