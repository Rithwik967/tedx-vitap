import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
    return (
        <div className="max-w-5xl w-full mx-auto p-10 text-white bg-black">
            <span className="px-2 py-1 text-xs border border-red-500 rounded-full text-red-500">Reach Out To Us</span>
            <h1 className="text-4xl font-bold text-left mt-4">
                We&apos;d love to Hear From You.
            </h1>
            <p className="text-left mt-4 text-gray-300">
                Or just reach out manually to{" "}
                <a href="mailto:tedxvitap@vitap.ac.in" className="text-red-500 hover:underline">tedxvitap@vitap.ac.in</a>
            </p>
            <div className="grid md:grid-cols-3 mt-16 gap-8">
                <div>
                    <Mail className="text-red-500 bg-red-500/20 p-2.5 aspect-square rounded-full size-10" />
                    <p className="text-lg font-bold mt-2">Email Support</p>
                    <p className="text-gray-400 mt-1 mb-4">Our team can respond in real time.</p>
                    <a href="mailto:tedxvitap@vitap.ac.in" className="text-red-500 font-semibold">
                        tedx@vitap.ac.in
                    </a>
                </div>
                <div>
                    <MapPin className="text-red-500 bg-red-500/20 p-2.5 aspect-square rounded-full size-10" />
                    <p className="text-lg font-bold mt-2">Visit Our Campus</p>
                    <p className="text-gray-400 mt-1 mb-4">Visit our location in real life.</p>
                    <span className="text-red-500 font-semibold">
                        Auditorium, VIT-AP University, Amaravati
                    </span>
                </div>
                <div>
                    <Phone className="text-red-500 bg-red-500/20 p-2.5 aspect-square rounded-full size-10" />
                    <p className="text-lg font-bold mt-2">Call Us Directly</p>
                    <p className="text-gray-400 mt-1 mb-4">Available during working hours.</p>
                    <span className="text-red-500 font-semibold">
                        +91 9491111348
                    </span>
                </div>
            </div>
        </div>
    );
}
