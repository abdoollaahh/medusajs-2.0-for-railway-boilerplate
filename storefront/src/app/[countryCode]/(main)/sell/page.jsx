"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "emailjs-com"
import { motion } from "framer-motion"

const EmailContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (data) => {
    setIsSubmitting(true)
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_USER_ID")
      .then((result) => {
        alert("Email successfully sent!")
        setIsSubmitting(false)
      })
      .catch((error) => {
        alert("Failed to send email, please try again.")
        setIsSubmitting(false)
      })
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full md:w-1/3 flex flex-col items-center justify-center text-center p-5"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-7xl md:text-9xl font-bold text-blue-600">Sell</h1>
        <p className="text-3xl md:text-4xl mt-4">Give us a few details</p>
      </motion.div>
      <motion.div
        className="w-full md:w-2/3 flex flex-col items-center justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full max-w-lg lg:max-w-3xl p-4">
          <div className="rounded-3xl bg-white/60 shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full">
                  <label
                    htmlFor="user_first_name"
                    className="mb-2 block font-medium"
                  >
                    First Name
                  </label>
                  <motion.input
                    placeholder="Enter your first name"
                    type="text"
                    {...register("user_first_name", { required: true })}
                    className="block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.user_first_name && (
                    <span className="text-red-600">First name is required</span>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="user_last_name"
                    className="mb-2 block font-medium"
                  >
                    Last Name
                  </label>
                  <motion.input
                    placeholder="Enter your last name"
                    type="text"
                    {...register("user_last_name", { required: true })}
                    className="block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.user_last_name && (
                    <span className="text-red-600">Last name is required</span>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="user_email" className="mb-2 block font-medium">
                  Your email
                </label>
                <motion.input
                  type="email"
                  {...register("user_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500"
                  placeholder="name@penochiostudios.com"
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.user_email && (
                  <span className="text-red-600">
                    {errors.user_email.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="content_brief"
                  className="mb-2 block font-medium"
                >
                  Brief of the car
                </label>
                <motion.textarea
                  {...register("content_brief", { required: true })}
                  rows="4"
                  className="block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Leave a comment..."
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
                {errors.content_brief && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="social_media_handles"
                  className="mb-2 block font-medium"
                >
                  Kindly attach a Google Drive Link with the car pictures
                </label>
                <motion.textarea
                  {...register("social_media_handles", { required: true })}
                  rows="4"
                  className="block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Leave a comment..."
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
                {errors.social_media_handles && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200 cursor-pointer w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default EmailContactForm
