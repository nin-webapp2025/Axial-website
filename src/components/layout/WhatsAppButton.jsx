import { colors, shadows } from "@/styles/designTokens";

const whatsappUrl = "https://wa.me/2348168189028";

export default function WhatsAppButton() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-500 hover:scale-110 md:bottom-8 md:right-8"
      href={whatsappUrl}
      rel="noreferrer"
      style={{
        backgroundColor: "#25D366",
        boxShadow: shadows.medium,
      }}
      target="_blank"
    >
      <span className="pulse-ring absolute inset-0 -z-10 rounded-full border border-[#25D366]" />
      <svg
        aria-hidden="true"
        fill="none"
        height="28"
        viewBox="0 0 24 24"
        width="28"
      >
        <path
          d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.83 11.83 0 0 0 5.74 1.46h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.16-3.45-8.42ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.75.99 1-3.65-.24-.37a9.84 9.84 0 0 1-1.52-5.28c0-5.45 4.43-9.88 9.9-9.88 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.9 6.97c0 5.46-4.44 9.9-9.9 9.9Zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.94 8.94 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.45 1.08 2.86 1.23 3.05.15.2 2.1 3.2 5.08 4.5.71.3 1.26.48 1.7.61.71.22 1.36.19 1.87.11.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z"
          fill={colors.neutral.white}
        />
      </svg>
    </a>
  );
}
