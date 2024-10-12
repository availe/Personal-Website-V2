import ContactCTA from "@/components/btns/contact-cta";
import ResumeContent from "./resume-content";

export default function ResumePage() {
  return (
    <div className="container mx-auto px-8 flex flex-col gap-8 pt-4 md:pt-2">
      <ResumeContent />

      <div className="flex justify-center">
        <a href="/Rafael_Diaz_Resume.pdf" download className="text-center text-sm text-[#ec6240] hover:text-[#ffa07a] transition-colors duration-100 ease-in-out">
          Download as PDF
        </a>
      </div>
      
      {/* <div className="fixed bottom-4 right-4">
        <ContactCTA />
        </div> */}
    </div>
  );
}
