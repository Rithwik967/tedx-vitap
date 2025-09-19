import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export default function CallToAction() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <div className="max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-red-600 to-red-900 rounded-2xl p-10 text-white">
                <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-red-500/10 backdrop-blur border border-red-400/40 text-sm">
                    <div className="flex items-center">
                        <Image className="size-6 md:size-7 rounded-full border-3 border-white"
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=50" alt="TEDx Speaker 1" width={28} height={28} />
                        <Image className="size-6 md:size-7 rounded-full border-3 border-white -translate-x-2"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="TEDx Speaker 2" width={28} height={28} />
                        <Image className="size-6 md:size-7 rounded-full border-3 border-white -translate-x-4"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                            alt="TEDx Speaker 3" width={28} height={28} />
                    </div>
                    <p className="-translate-x-2 font-medium">Join community of 1000+ TEDx enthusiasts</p>
                </div>
                <h1 className="text-4xl md:text-5xl md:leading-[60px] font-semibold max-w-xl mt-5 bg-gradient-to-r from-white to-red-200 text-transparent bg-clip-text">
                    Ready to be inspired? Join TEDx VITAP 2025.
                </h1>
                <a 
                    href="https://www.instagram.com/tedx.vitap?igsh=bmJlbmNiZmxseTl2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 text-white bg-red-500 hover:bg-red-600 transition-all rounded-full uppercase text-sm mt-8 inline-block"
                >
                    Follow us!
                </a>
            </div>
        </>
    );
}
