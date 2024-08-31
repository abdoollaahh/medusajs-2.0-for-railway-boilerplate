"use client"

import React, { useRef, useState } from "react"

const EmailContactForm = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div>
      <div className="h-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full h-screen md:h-screen md:w-1/3 md:mx-20 flex flex-col justify-center items-center">
            <h1 className="text-[20rem] md:text-9xl mb-10 font-bold text-blue-600">
              Sell
            </h1>
            <p className="text-8xl md:text-4xl text-center">
              Give us a few details
            </p>
          </div>
          <div className="flex w-full md:w-2/3 flex-col md:flex-col">
            <div className="flex flex-row items-center justify-center">
              <div className="m-20 w-10/12 rounded-3xl bg-white/60 p-28  shadow-xl">
                <form ref={form}>
                  <div className="flex flex-col justify-start">
                    <div className="flex flex-row w-full">
                      <div className="w-1/2 pr-2">
                        <label for="name" className="mb-2 block font-medium">
                          First Name
                        </label>
                        <input
                          placeholder="Enter your first name"
                          type="text"
                          name="user_first_name"
                          id="user_first_name"
                          className="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="w-1/2 pl-2">
                        <label for="name" className="mb-2 block font-medium">
                          Last Name
                        </label>
                        <input
                          placeholder="Enter your last name"
                          type="text"
                          name="user_last_name"
                          id="user_last_name"
                          className="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <label for="email" class="mb-2 block font-medium ">
                        Your email
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        className="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500"
                        placeholder="name@penochiostudios.com"
                        required
                      />
                    </div>
                    <div className="mt-6">
                      <div className="m-1 mb-6">
                        <label for="message" class="mb-2 block font-medium">
                          Brief of the car
                        </label>
                        <textarea
                          name="content_brief"
                          id="message"
                          rows="4"
                          class="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500 "
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                      <div className="m-1 mb-6">
                        <label for="message" class="mb-2 block font-medium">
                          Kindly attach a Google Drive Link with the car
                          pictures
                        </label>
                        <textarea
                          name="social_media_handles"
                          id="message"
                          rows="4"
                          class="mb-10 block w-full rounded-lg bg-white/10 p-2.5 text-gray-900 shadow-md backdrop-blur-xl focus:border-blue-500 focus:ring-blue-500 "
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="m-4 flex flex-row justify-center">
                      <input
                        type="submit"
                        value="Send"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailContactForm
