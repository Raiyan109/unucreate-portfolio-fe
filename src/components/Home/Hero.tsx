import Image from "next/image";
import heroImg from "@/assets/hero image.png";
import barcodeLogo from "@/assets/jodi barcode logo.png";

const Hero = () => {

    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center mt-16">
            <h1 className="font-anton text-sm lg:text-[20px] flex justify-end pr-5 lg:pr-[89px] pt-5 lg:pt-0 absolute top-0 right-0">
                UX designer & artist
            </h1>

            <div className="flex items-center justify-center relative">
                <Image
                    src={heroImg}
                    width={1300}
                    height={1300}
                    alt="Hero Image"
                    className="w-96 h-96 lg:w-[1300px] lg:h-[853px]"
                />

                <div className="absolute top-[25%] left-[30%] lg:left-[33%]">
                    <Image
                        src={barcodeLogo}
                        width={1300}
                        height={1300}
                        alt="Hero Image"
                        className="w-44 h-44 lg:w-[390.1px] lg:h-[391.63px] object-contain"
                    />
                </div>
                <h1 className="text-sm lg:text-[20px] font-anton text-white absolute top-[73%] left-[18%] lg:left-[33%] max-w-[270px] lg:max-w-[396px] text-center">
                    Building Engaging, Inclusive Experiences through UX, Innovation, and Storytelling
                </h1>
            </div>
        </div>
    );
};

export default Hero;
