import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessModal from "./SuccessModal";

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  // Validation function
  const validate = (name: string, value: string) => {
    let error = "";

    if (value.trim() === "") {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else {
      if (name === "firstname" && !/^[A-Za-z]+$/.test(value.trim())) {
        error = "First name must contain only letters";
      }
      if (name === "lastname" && !/^[A-Za-z]+$/.test(value.trim())) {
        error = "Last name must contain only letters";
      }
      if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
        error = "Valid email is required";
      }
    }

    return error;
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};

    Object.entries(formData).forEach(([key, value]) => {
      const error = validate(key, value);
      if (error) newErrors[key as keyof ContactFormData] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate(name, value),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    if (form.current) {
      emailjs
        .send(
          "service_6sx0s2a",
          "template_08edp1m",
          {
            to_name: "Shashini",
            from_name: `${formData.firstname} ${formData.lastname}`,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          "I1MAe3NyO6eBMcmob"
        )
        .then(() => {
          console.log("SUCCESS!");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            subject: "",
            message: "",
          });
          setErrors({});
          setIsLoading(false);
          setIsSuccessModalVisible(true);

          setTimeout(() => {
            setIsSuccessModalVisible(false);
          }, 10000);
        })
        .catch((error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4" ref={form}>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder="First Name"
              className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)]"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{errors.firstname}</p>
            )}
          </div>

          <div className="w-full md:w-1/2">
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)]"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname}</p>
            )}
          </div>
        </div>

        <div className="w-full">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)] text-sm"
          />
          {errors.phonenumber && (
            <p className="text-red-500 text-sm">{errors.phonenumber}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)]"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>

        <div className="w-full">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)] h-30"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between ">
          <button
            type="submit"
            className="px-8 py-2 lg:px-5 text-[var(--primary)] rounded-4xl transition-all duration-200 bg-[var(--background)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer"
          >
            Submit
          </button>

          {isLoading && (
            <div className="w-8 h-8 border-3 border-t-[var(--primary)] border-gray-300 rounded-full animate-spin pr-5"></div>
          )}
        </div>
      </form>

      {isSuccessModalVisible && (
        <SuccessModal onclose={() => setIsSuccessModalVisible(false)} />
      )}
    </div>
  );
};

export default ContactForm;
