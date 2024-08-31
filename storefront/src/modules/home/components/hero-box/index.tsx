"use client"

import React from "react"
import { motion } from "framer-motion"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import New from "/public/images/sedan.svg"
import Used from "/public/images/compact.svg"
import Rental from "/public/images/convertible.svg"

const data = [
  {
    id: "1",
    title: "New",
    handle: "new-cars",
    link: "new",
    image: New,
  },
  {
    id: "2",
    title: "Used",
    handle: "used-cars",
    link: "used",
    image: Used,
  },
  {
    id: "3",
    title: "Rental",
    handle: "rental-cars",
    link: "rental",
    image: Rental,
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 50,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const HeroBox: React.FC = () => {
  return (
    <motion.div
      className="relative md:-mt-20 md:mx-[250px] rounded-3xl shadow-xl p-10 lg:p-5 z-10 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <div className="flex flex-col md:flex-row justify-between px-4">
        <div className="p-5">
          <motion.h1
            className="md:text-4xl text-2xl md:text-start text-center font-semibold text-slate-600 cursor-default"
            variants={itemVariants}
          >
            Search for your dream car
          </motion.h1>
          <motion.ul
            className="flex flex-col md:flex-row md:gap-5 justify-center items-center md:justify-start"
            variants={itemVariants}
          >
            {data.map((item) => (
              <motion.li
                key={item.id}
                className="flex py-12"
                variants={itemVariants}
              >
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href={`/categories/${item.link}`}
                >
                  <div className="bg-gray-100 w-48 flex flex-col justify-center items-center rounded-md hover:shadow-lg transition duration-300">
                    <Image src={item.image} width={100} alt={item.title} />
                    <div className="pb-5">{item.title}</div>
                  </div>
                </LocalizedClientLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          className="flex flex-col justify-center items-center"
          variants={itemVariants}
        >
          <LocalizedClientLink
            className="hover:text-ui-fg-base"
            href={`/store`}
          >
            <button className="w-40 h-12 mt-4 bg-[#0c62c8] text-white rounded-md">
              View All
            </button>
          </LocalizedClientLink>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroBox
