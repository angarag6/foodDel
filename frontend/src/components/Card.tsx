export default function Card(){
    return (
        <div className="flex flex-col gap-[14px] ">
            <img className="w-[282px] h-[168px] rounded-[16px] object-cover" src="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA0seZMfBI4cfT2mi3IslQI6oxPPtt8IC5fGuzEHfNWIVx1hMieo0vnt1dCKywqoOffZtglxdW4pP7kV9cwOAguidwu3r4p-99QxAAgvG8tnyZG4inP7BZg7otJydZZNtFd0YJ3LTlq9S59HuZWQKn45qdkyFAe17K4Drz2LtqzimvNKNJ49mhqS~rlej5tfz876iy8tme9VR--rGYzgF~Vy167l5VVbuKqbaJe2c0zFgtdqpHyddFB3N6Rl0KO54kGCMTWVZsOhNQpDpaHhHTdm3WTBgKUrv7JIbyeWRjG2~UXxvxyviSCvsQcbZs3oNX695ZwVLneI1976CC6PGQ__" alt="" />
            <div>
                <p className="text-[20px] text-black">Өглөөний хоол</p>
                <p className="text-[#18BA51] text-[18px]">4,800₮</p>
            </div>
        </div>
    )
}