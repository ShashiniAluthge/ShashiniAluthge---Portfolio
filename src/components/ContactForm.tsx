import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence } from "framer-motion";
import StatusModal from "./StatusModal";


interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  subject: string;
  message: string;
}

const inputClasses =
  "w-full px-4 py-2.5 rounded-xl text-sm placeholder:text-white/40 text-[var(--secondary)] bg-white/5 border border-white/10 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/25 transition-colors";

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
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

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
          "service_zzrh15j",
          "template_08edp1m",
          {
            to_name: "Shashini",
            from_name: `${formData.firstname} ${formData.lastname}`,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          "8pblVUwqygD_I6YV_"
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
          setStatus("success");

          setTimeout(() => {
            setStatus(null);
          }, 5000);
        })
        .catch((error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
          setStatus("error");

          setTimeout(() => {
            setStatus(null);
          }, 5000);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4" ref={form}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder="First Name"
              className={inputClasses}
            />
            {errors.firstname && (
              <p className="text-[#f87171] text-xs mt-1">{errors.firstname}</p>
            )}
          </div>

          <div className="w-full md:w-1/2">
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              placeholder="Last Name"
              className={inputClasses}
            />
            {errors.lastname && (
              <p className="text-[#f87171] text-xs mt-1">{errors.lastname}</p>
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
            className={inputClasses}
          />
          {errors.email && (
            <p className="text-[#f87171] text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className={inputClasses}
          />
          {errors.phonenumber && (
            <p className="text-[#f87171] text-xs mt-1">{errors.phonenumber}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            className={inputClasses}
          />
          {errors.subject && (
            <p className="text-[#f87171] text-xs mt-1">{errors.subject}</p>
          )}
        </div>

        <div className="w-full">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className={`${inputClasses} h-32 resize-none`}
          ></textarea>
          {errors.message && (
            <p className="text-[#f87171] text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button
            type="submit"
            className="px-8 py-3 font-semibold rounded-full text-sm text-white transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--gradient_1))",
              boxShadow: "0 6px 24px rgba(0,157,255,0.3)",
            }}
          >
            Submit
          </button>

          {isLoading && (
            <div className="w-6 h-6 border-2 border-t-[var(--primary)] border-white/15 rounded-full animate-spin" />
          )}
        </div>
      </form>

      <AnimatePresence>
        {status && (
          <StatusModal
            variant={status}
            onclose={() => setStatus(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;