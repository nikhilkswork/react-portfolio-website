import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.subject ||
        !formData.message
    ) {
        setMessage("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
        setMessage("Please enter a valid email.");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(formData.phone)) {
        setMessage("Please enter a valid 10-digit phone number.");
        return;
    }

    setMessage("Message submitted successfully!");

    setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    };

  return (
    <div>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
            setFormData({
            ...formData,
            name: e.target.value
            })
        }


        />

        <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) =>
            setFormData({
            ...formData,
            phone: e.target.value
            })
        }
        />

        <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) =>
            setFormData({
            ...formData,
            phone: e.target.value
            })
        }
        />

        <input
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) =>
            setFormData({
            ...formData,
            subject: e.target.value
            })
        }
        />

        <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) =>
            setFormData({
            ...formData,
            message: e.target.value
            })
        }
        />

        <button type="submit">
        Submit
        </button>
        
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Contact;