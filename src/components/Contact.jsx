import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      axios.post("https://getform.io/f/akkgppza", userInfo);
      toast.success("Your message has been sent successfully");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <div
        name="contacts"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill the below form to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/akkgppza"
            // method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div>
              <label htmlFor="name" children className="block text-gray-700">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                id="name"
                className="shadow apperance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Full Name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="email" children className="block text-gray-700">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                id="email"
                className="shadow apperance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Email"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="message" children className="block text-gray-700">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                name="message"
                type="text"
                id="message"
                className="shadow apperance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Message"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
