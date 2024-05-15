'use client';
import Footer from "@/components/Footer";
import TopBar from "../../components/TopBar";
import Star from "@/components/icons/Star";
import { useId } from "react";

export default function Area(){
    const locations = ["Нархан хотхон", "26-р байр", "26-р байр", "45-р байр", "3-р байр", "Хоймор хотхон", "Хоймор хотхон"]

    return (
        <div className="flex flex-col bg-white items-center gap-[40px]">
            <TopBar/>
            <img className="w-[1200px] h-[616px]" src="https://s3-alpha-sig.figma.com/img/eef0/4a9f/fcc4a2bce9bd256b5eb53b5b527de457?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mdDWoBgUE1kv2YljCddTQw7Wp-zb58Owz0MLEmss~quml~VUsd5g~QhYIRyPPSBS0SW20~ZrxQtpZbtGf11tWT~xXJPCWvpshZiATdfMj5Lyoy1joAqDowB6o6~4t3silXNPnqOZVVn8KLMSKPlVQuvESMkSJhO~qKRMuM9ALsqKP4ZDTHqrAlCHomtgLr-D65bnG6El-I2Zx3PX9m0CQhSrJRxiaDsrpIS6vrX6gXg~unMbwNie6CUup5Aed08YsGj8bggbRfr2ir~z02ZYr8J7uTzRv1ydVkB0-LHIapmSy4xW~kkzYsKoP6QubTuG19VONQC7anWOjmYBqkMc0Q__" alt="" />
            <div className="flex w-[1200px] flex-col">
                <div className="flex gap-[8px] py-[16px]">
                    <Star/>
                    Хүргэлтийн бүс дэх хаягууд
                </div>
                <div className="flex gap-[24px]">
                    <div className="rounded-[16px] shadow-[4px_4px_12px_0_rgba(0,0,0,0.1)] p-[24px] flex flex-col w-[50%]">
                            <p className="text-black text-[20px] py-[16px]">А бүс</p>
                            <hr className="w-[100%] h-[1px] color-[#18BA51] pb-[16px]" />
                            <div className="flex w-[100%]">
                                <div className="w-[50%] flex flex-col gap-[16px]">
                                    {locations.map((el) => (
                                        <p key={useId()} className="text-[16px]">{el}</p>
                                    ))}
                                </div>
                                <div className="w-[50%] flex flex-col gap-[16px]">
                                    {locations.map((el) => (
                                        <p key={useId()} className="text-[16px]">{el}</p>
                                    ))}
                                </div>
                            </div>
                    </div>
                    <div className="rounded-[16px] shadow-[4px_4px_12px_0_rgba(0,0,0,0.1)] p-[24px] flex flex-col w-[50%]">
                            <p className="text-black text-[20px] py-[16px]">Б бүс</p>
                            <hr className="w-[100%] h-[1px] color-[#18BA51] pb-[16px]" />
                            <div className="flex w-[100%]">
                                <div className="w-[50%] flex flex-col gap-[16px]">
                                    {locations.map((el) => (
                                        <p key={useId()} className="text-[16px]">{el}</p>
                                    ))}
                                </div>
                                <div className="w-[50%] flex flex-col gap-[16px]">
                                    {locations.map((el) => (
                                        <p key={useId()} className="text-[16px]">{el}</p>
                                    ))}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}