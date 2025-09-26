import Button from "@/components/shared/Button";
import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div
            className="bg-[url('/harvest_bg.webp')] bg-cover bg-center h-dvh"
        >
            <div className="backdrop-brightness-75 h-full w-full flex flex-row justify-between gap-5">
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="bg-[#749b3f]/30 p-1 text-[#749b3f] font-semibold">Welcome to Fresh Harvest</h2>

                    <h1>Fresh Fruits and Vegetables</h1>
                    <p>At Fresh Harvests,we are passinate about providing you with the freshest and most flavorful fruits and vegetables</p>
                    <Button>
                        Shop Now
                    </Button>
                    <div>
                        <h3 className='text-sm font-semibold mb-2'>Download App :</h3>
                        <div className='flex flex-row gap-3 items-center'>
                            <Image src='/app_store.png' width={140} height={50} alt='app_store' />
                            <Image src='/play_store.png' width={140} height={50} alt='play_store' />
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
