'use client';
import Footer from "@/components/Footer";
import TextField from '@mui/material/TextField';
import TopBar from "../../components/TopBar";
import InputAdornments from "@/components/Input";
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";

export default function Login(){
    const router = useRouter();
    return(
        <div className="flex flex-col items-center gap-[75px] bg-white">
            <TopBar/>
            <div className="flex flex-col items-center gap-[48px]">
                <p className="text-black text-[28px] w-[384px] text-center">Нэвтрэх</p>
                <div className="flex flex-col gap-[16px]">
                    <div className="flex justify-center items-center">
                        <TextField sx={{width: '384px', height: '48px'}}
                            id="outlined-password-input"
                            label="Имэйл"
                            type="text"
                            autoComplete="current-password"
                        />
                    </div>
                    <InputAdornments/>
                </div>
                <div className="flex flex-col gap-[32px]">
                    <Button className="bg-[#18BA51] w-[384px] h-[48px]" variant="contained">Нэвтрэх</Button>
                    <p className="text-[14px] text-center text-[#3F4145]">Эсвэл</p>
                    <Button onClick={() => router.push("/signup")} className="border-[#18BA51] text-black w-[384px] h-[48px]" variant="outlined">Бүртгүүлэх</Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}