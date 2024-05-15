'use client';
import { Box, Button, Modal, Typography } from "@mui/material"
import React from "react";

export default function Foods(){
    const MockData = [
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            ingeredient: "tums luuwan songino manjin edr l orson bh",
            discount: ""
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            ingeredient: "tums luuwan songino manjin edr l orson bh",
            discount: ""
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            ingeredient: "tums luuwan songino manjin edr l orson bh",
            discount: ""
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            ingeredient: "tums luuwan songino manjin edr l orson bh",
            discount: ""
        }
    ]

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 981,
        bgcolor: 'background.paper',
        boxShadow: 2,
        p: 4,
        display: "flex",
        gap: "30px",
        borderRadius: '8px'
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const[count, setCount] = React.useState(0);

    const add = () => setCount(count+1)
    const minus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex gap-[24px]">
            {
                MockData.map((el) => {
                    return (
                        <div>
                            <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <img className="w-[50%] object-cover" src={el.img} alt="" />
                                    <Box sx={{display: 'flex', flexDirection: "column", gap: '30px'}}>
                                        <Box sx={{ fontSize: '28px'}}>
                                            {el.name}
                                            <Typography sx={{fontSize: '18px', color: "#18BA51"}} id="modal-modal-title" variant="h6" component="h2">    
                                                {el.price}
                                            </Typography>
                                        </Box>
                                        <Box sx={{fontSize: '18px'}}>
                                            Орц
                                            <Typography id="modal-modal-description" sx={{ mt: 2, color: '#767676', background: "#F6F6F6", borderRadius: '8px', fontSize: '16px', padding: '8px' }}>
                                            {el.ingeredient}
                                            </Typography>
                                        </Box>
                                        <Box sx={{display: "flex", flexDirection: "column", gap: "8px"}}>
                                            Тоо
                                            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                                <Button onClick={minus} sx={{color: "white", background: "#18BA51"}}>-</Button>
                                                <Typography>
                                                    {count} 
                                                </Typography>
                                                <Button onClick={add} sx={{color: "white", background: "#18BA51"}}>+</Button>
                                            </Box>
                                        </Box>
                                        <Button sx={{background: "#18BA51", color: "white", width: "100%", borderRadius: "4px", height: "48px"}}>Сагслах</Button>
                                    </Box>
                                </Box>
                            </Modal>
                            <div onClick={handleOpen} className="flex flex-col gap-[14px]">
                                <img className="w-[282px] h-[186px] rounded-[16px] object-cover" src={el.img} alt="" />
                                <div className="flex flex-col">
                                    <p className="text-[18px] text-black">{el.name}</p>
                                    <p className="text-[18px] text-[#18BA51]">{el.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}