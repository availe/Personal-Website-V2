"use client";

import { FaPhone, FaEnvelope } from "react-icons/fa";

interface Contact {
  icon: React.ComponentType<{ size: number }>;
  href: string;
  label: string;
  iconSize: number;
}

const ContactItem: React.FC<Contact> = ({
  icon: Icon,
  href,
  label,
  iconSize,
}) => {
  return (
    <a href={href} className="mx-2 hover:underline flex items-center">
      <Icon size={iconSize} />
      <span className="ml-2">{label}</span>
    </a>
  );
};

const ContactCTA: React.FC = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE || "Phone not available";
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL || "Email not available";

  const contactDetails: Contact[] = [
    {
      icon: FaPhone,
      href: `tel:${phoneNumber}`,
      label: phoneNumber,
      iconSize: 20,
    },
    {
      icon: FaEnvelope,
      href: `mailto:${emailAddress}`,
      label: emailAddress,
      iconSize: 20,
    },
  ];

  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white p-4 rounded"
        onClick={() => alert("Contact Us")}
      >
        Contact Us
      </button>
      <div className="mt-4">
        {contactDetails.map((contact, index) => (
          <ContactItem
            key={index}
            icon={contact.icon}
            href={contact.href}
            label={contact.label}
            iconSize={contact.iconSize}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactCTA;
