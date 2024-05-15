'use client';
import Footer from "@/components/Footer";
import TopBar from "../../components/TopBar";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login(){
    const [checked, setChecked] = React.useState(true);
    const api = "http://localhost:8000/signup";
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    
    const handler = async () => {
        let res = await axios.post(api, {name: username, email: email, phone_number: phoneNumber, password: password});
        console.log(res)
        router.push("/home")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    };
    return(
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "75px", background: "white"}}>
            <TopBar/>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "48px"}}>
                <p className="text-black text-[28px] w-[384px] text-center">Бүртгүүлэх</p>
                <Box sx={{display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", justifyContent: "center"}}>
                    <TextField onChange={(event) => setUsername(event.target.value)} sx={{width: '384px', height: '48px'}}
                        id="userName"
                        label="Нэр"
                        type="text"
                        autoComplete="current-password"
                    />
                    <TextField onChange={(event) => setEmail(event.target.value)} sx={{width: '384px', height: '48px'}}
                        id="email"
                        label="Имэйл"
                        type="text"
                        autoComplete="current-password"
                    />
                    <TextField onChange={(event) => setPhoneNumber(event.target.value)} sx={{width: '384px', height: '48px'}}
                        id="phoneNumber"
                        label="Утас"
                        type="text"
                        autoComplete="current-password"
                    />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, width: '384px', height: '48px' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Нууц үг</InputLabel>
                        <OutlinedInput
                            onChange={(event) => setPassword(event.target.value)}
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                            </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <FormControl sx={{ m: 1, width: '384px', height: '48px' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Нууц үг</InputLabel>
                            <OutlinedInput
                                id="re-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                            </FormControl>
                    </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", gap: '8px'}}>
                    <Box sx={{display: 'flex', alignItems: "center", font: "14px", color:"black"}}>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        Үйлчилгээний нөхцөл зөвшөөрөх
                    </Box>
                    <Button onClick={handler} className="border-[#18BA51] text-black w-[384px] h-[48px]" variant="outlined">Бүртгүүлэх</Button>
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}