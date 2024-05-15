'use client';
import TopBar from "../../components/TopBar";
import Footer from "@/components/Footer"
import { v4 as uuidv4 } from "uuid"

export default function FoodMenu(){

    const MockData = [
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ce3JD5WS-bYMIVmSFbljBiaIINfDQvqOMkQTaHxWieXwXgre~Bb2PdK3eD5odftQXPxx0pSlWHk0LJWZhDCuyHf4ActS87DO5h7bJbEFmi9SfG2Cpm6kC9WEA6q8OgUEecorIC7uX~qCUt~DE6rB5aRKh~~a~ttL4nIcCWDQkoYbNAP35BlfWh-Lx6Oxrwr1Me9C0LaouBj7tx5crQ0yZaqLiGsHQWVdiUt0nosQWUE7a0W~dN3rTPduJSd~VlE4b8iPABs9XGYTEGHEtZ9W8IA6kvyuPk2xYADhcGQCpAU4aPOJkNYaZ4h7LpZOBdOtz3UgxeE-DNfOft8hnFKwtw__",
            name: "Main Pizza",
            discount: 20
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ce3JD5WS-bYMIVmSFbljBiaIINfDQvqOMkQTaHxWieXwXgre~Bb2PdK3eD5odftQXPxx0pSlWHk0LJWZhDCuyHf4ActS87DO5h7bJbEFmi9SfG2Cpm6kC9WEA6q8OgUEecorIC7uX~qCUt~DE6rB5aRKh~~a~ttL4nIcCWDQkoYbNAP35BlfWh-Lx6Oxrwr1Me9C0LaouBj7tx5crQ0yZaqLiGsHQWVdiUt0nosQWUE7a0W~dN3rTPduJSd~VlE4b8iPABs9XGYTEGHEtZ9W8IA6kvyuPk2xYADhcGQCpAU4aPOJkNYaZ4h7LpZOBdOtz3UgxeE-DNfOft8hnFKwtw__",
            name: "Main Pizza",
            discount: 20
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ce3JD5WS-bYMIVmSFbljBiaIINfDQvqOMkQTaHxWieXwXgre~Bb2PdK3eD5odftQXPxx0pSlWHk0LJWZhDCuyHf4ActS87DO5h7bJbEFmi9SfG2Cpm6kC9WEA6q8OgUEecorIC7uX~qCUt~DE6rB5aRKh~~a~ttL4nIcCWDQkoYbNAP35BlfWh-Lx6Oxrwr1Me9C0LaouBj7tx5crQ0yZaqLiGsHQWVdiUt0nosQWUE7a0W~dN3rTPduJSd~VlE4b8iPABs9XGYTEGHEtZ9W8IA6kvyuPk2xYADhcGQCpAU4aPOJkNYaZ4h7LpZOBdOtz3UgxeE-DNfOft8hnFKwtw__",
            name: "Main Pizza",
            discount: 20
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ce3JD5WS-bYMIVmSFbljBiaIINfDQvqOMkQTaHxWieXwXgre~Bb2PdK3eD5odftQXPxx0pSlWHk0LJWZhDCuyHf4ActS87DO5h7bJbEFmi9SfG2Cpm6kC9WEA6q8OgUEecorIC7uX~qCUt~DE6rB5aRKh~~a~ttL4nIcCWDQkoYbNAP35BlfWh-Lx6Oxrwr1Me9C0LaouBj7tx5crQ0yZaqLiGsHQWVdiUt0nosQWUE7a0W~dN3rTPduJSd~VlE4b8iPABs9XGYTEGHEtZ9W8IA6kvyuPk2xYADhcGQCpAU4aPOJkNYaZ4h7LpZOBdOtz3UgxeE-DNfOft8hnFKwtw__",
            name: "Main Pizza",
            discount: 20
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            discount: 0
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            discount: 0
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            discount: 0
        },
        {
            price: "34,800₮",
            img: "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mrKNTktvMZdf~8BPiiTJURm8j4Kgr9J-QbMQaiBso8EnhWMJO4lCBmYpeOi8zOCWUdY5mCD4P8erlo~ezrBlACxlLcdubo8EfKGxaNj6VzVrG0lBT2tQvilUGhaIVwFVa4sVDMo3vbxBIVl5HZDMhIRZc2HMBZ5tj1I5EpBtVHUOtPXBKHFGPyOiO2ZbGpMKBY5wrnSlojyvMvAluqbn9kffeGhZ3JMY6KT~9pdSUVzI8hzRblDe8U0xxkNCIpkYnVXItGDGt-zcuk2FlVJA~aKPcdsozyEwjWnXUlO6OeLoM~rHgxn-b9hIjTv6hhDQeIxPvtvRqjbGKnNWquK8ug__",
            name: "Main Pizza",
            discount: 0
        }
    ];

    return (
        <div className="flex flex-col items-center bg-white">
            <TopBar/>
            <div className="flex gap-[26px] px-[120px] py-[32px]">
                <button className="rounded-[8px] border-[1px] w-[280px] h-[43px] bg-[#18BA51] text-white">Breackfast</button>
                <button className="rounded-[8px] border-[1px] w-[280px] h-[43px]">Soup</button>
                <button className="rounded-[8px] border-[1px] w-[280px] h-[43px]">Main Course</button>
                <button className="rounded-[8px] border-[1px] w-[280px] h-[43px]">Dessert</button>
            </div>
            <div className="flex gap-[24px] flex-wrap items-center justify-between w-[1200px]">
                {
                    MockData.map((el) => {
                        return (
                            <div key={uuidv4()} className="flex flex-col gap-[14px] relative">
                                <img className="w-[282px] h-[186px] rounded-[16px] object-cover " src={el.img} alt="" />
                                {
                                    el.discount !== 0 && (
                                        <div className="border-white border-[1px] px-[16px] py-[4px] absolute bg-[#18BA51] text-white top-[16px] left-[197px] rounded-[16px]">{el.discount}%</div>
                                    )
                                }
                                <div className="flex flex-col">
                                    <p className="text-[18px] text-black">{el.name}</p>
                                    <p className="text-[18px] text-[#18BA51]">{el.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}