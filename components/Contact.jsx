import { useState } from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { z } from "zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define Zod schema for form validation
const contactSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showIcon, setShowIcon] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const validationResult = contactSchema.safeParse(formData);
    if (!validationResult.success) {
      validationResult.error.errors.forEach((err) => toast.error(err.message));
      return;
    }

    setLoading(true); // Set loading to true when submission starts
    try {
      const response = await axios.post("/api/email-send", formData);
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setShowIcon(true);

        // Clear form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        // Hide icon after 3 seconds
        setTimeout(() => setShowIcon(false), 3000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false); // Reset loading to false after submission ends
    }
  };

  return (
    <section className="pt-8 xl:pt-12 pb-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-16">
          <div className="flex-1 mx-auto xl:mx-0 flex flex-col">
            <AnimatedText
              text="Let's Work Together"
              textStyles="h2 mb-12 text-center xl:text-left"
            />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full max-w-[480px]"
            >
              <div className="flex gap-8">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    className="input"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-primary"
                  >
                    Last Name <span className="text-accent">*</span>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    className="input"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="input"
                  placeholder="youremail@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Phone number <span className="text-accent">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  className="input"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-primary"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  id="message"
                  name="message"
                  value={formData.message}
                  className="textarea"
                  placeholder="Leave me a message..."
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-accent flex items-center justify-center gap-2"
                disabled={loading} // Disable button during loading
              >
                {loading ? (
                  <span>Sending...</span> // Show loading text
                ) : showIcon ? (
                  <FaCheckCircle className="text-white text-lg" />
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          </div>
          <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
            <Image
              src="/assets/contact/img.png"
              className="object-cover"
              fill
              quality={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
