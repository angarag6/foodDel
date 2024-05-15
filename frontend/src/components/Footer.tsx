'use client';
import { useRouter } from "next/navigation";
import BackPicture from "./icons/BackPicture";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import PineWhite from "./icons/Pinewhite";
import Twitter from "./icons/Twitter";

export default function Footer(){

    const router = useRouter();

    const area = () => {
        router.push("/area");
    }

    const terms = () => {
        router.push("/terms");
    }

    const secure = () => {
        router.push("/secure");
    }

    const foodMenu = () => {
        router.push("/foodMenu");
    }

    const home = () => {
        router.push("/home");
    }

    return (
        <div className="bg-[#18BA51] flex flex-col gap-[40px] px-[120px] py-[111px] relative">
            <BackPicture/>
            <div className="flex justify-center items-center gap-[8px]">
                <PineWhite/>
                <p className="text-[20px] text-white">Food Delivery</p>
            </div>
            <div className="flex justify-between z-50">
                <button onClick={home} className="text-white text-[16px] underline">Нүүр</button>
                <button className="text-white text-[16px] underline">Холбоо барих</button>
                <button onClick={foodMenu} className="text-white text-[16px] underline">Хоолны цэс</button>
                <button onClick={terms} className="text-white text-[16px] underline">Үйлчилгээний нөхцөл</button>
                <button onClick={area} className="text-white text-[16px] underline">Хүргэлтийн бүс</button>
                <button onClick={secure} className="text-white text-[16px] underline">Нууцлалын бодлого</button>
            </div>
            <div className="flex gap-[18px] justify-center">
                <Facebook/>
                <Instagram/>
                <Twitter/>
            </div>
            <hr className="bg-white w-[1200px]"/>
            <div className="flex flex-col gap-[8px] items-center">
                <p className="text-white text-[16px]">© 2024 Pinecone Foods LLC</p>
                <p className="text-white text-[16px]">Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
            </div>
        </div>
    )
}