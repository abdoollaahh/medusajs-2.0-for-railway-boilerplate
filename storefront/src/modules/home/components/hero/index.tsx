import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import HeroImage from "/public/images/sellCar.jpg"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6"></div>
    </div>
  )
}

export default Hero
