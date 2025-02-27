import { useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "firstname") {
        if (value.trim() === "") {
          newErrors.firstname = "First name is required";
        } else if (!/^[A-Za-z]+$/.test(value.trim())) {
          newErrors.firstname = "First name must contain only letters";
        } else {
          delete newErrors.firstname;
        }
      }

      if (name === "lastname") {
        if (value.trim() === "") {
          newErrors.lastname = "Last name is required";
        } else if (!/^[A-Za-z]+$/.test(value.trim())) {
          newErrors.lastname = "Last name must contain only letters";
        } else {
          delete newErrors.lastname;
        }
      }

      if (name === "email") {
        if (value.trim() === "") {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Valid email is required";
        } else {
          delete newErrors.email;
        }
      }

      if (name === "phonenumber") {
        if (value.trim() === "") {
          newErrors.phonenumber = "Phone number is required";
        } else if (!/^\+94\d{9}$/.test(value)) {
          newErrors.phonenumber =
            "Phone number must start with +94 and have 9 digits after it";
        } else {
          delete newErrors.phonenumber;
        }
      }

      if (name === "subject") {
        if (value.trim() === "") {
          newErrors.subject = "Subject is required";
        } else {
          delete newErrors.subject;
        }
      }

      if (name === "message") {
        if (value.trim() === "") {
          newErrors.message = "Message is required";
        } else {
          delete newErrors.message;
        }
      }

      return newErrors;
    });
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="w-full">
        <input
          type="text"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleInputChange}
          placeholder="Phone Number (+94XXXXXXXXX)"
          className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)]"
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

      <button
        type="submit"
        className="px-8 py-2 lg:px-5 text-[var(--primary)] rounded-4xl transition-all duration-200 bg-[var(--background)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
