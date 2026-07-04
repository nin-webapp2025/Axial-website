"use client";

import { Reveal } from "@/animations/Motion";

const whatsappNumber = "2348168189028";

const getFieldType = (field) => {
  const normalized = field.toLowerCase();

  if (normalized.includes("email")) {
    return "email";
  }

  return "text";
};

export default function ContactForm({ data }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const lines = data.fields.map((field) => {
      const key = field.toLowerCase().replace(/\s+/g, "-");
      const value = formData.get(key)?.toString().trim() ?? "";

      return `${field}: ${value}`;
    });

    const message = encodeURIComponent(lines.join("\n"));

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="section-shell section-light">
      <Reveal className="site-container">
        <form className="light-panel grid gap-7 p-6 md:grid-cols-2 md:p-12" onSubmit={handleSubmit}>
          {data.fields.map((field) =>
            field.toLowerCase().includes("message") ? (
              <textarea
                key={field}
                className="min-h-48 border-0 border-b border-[#0a2448]/25 bg-transparent px-0 py-4 text-[#061329] outline-none transition-colors placeholder:text-[#526077] focus:border-[#cdaa57] md:col-span-2"
                name={field.toLowerCase().replace(/\s+/g, "-")}
                placeholder={field}
                required
              />
            ) : (
              <input
                key={field}
                className="border-0 border-b border-[#0a2448]/25 bg-transparent px-0 py-4 text-[#061329] outline-none transition-colors placeholder:text-[#526077] focus:border-[#cdaa57]"
                name={field.toLowerCase().replace(/\s+/g, "-")}
                placeholder={field}
                required
                type={getFieldType(field)}
              />
            )
          )}
          <button className="button-dark mt-3 w-fit md:col-span-2" type="submit">{data.button}</button>
        </form>
      </Reveal>
    </section>
  );
}
