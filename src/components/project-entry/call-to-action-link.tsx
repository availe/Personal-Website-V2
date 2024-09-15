import Link from "next/link";

export const callToActionLink = (isInternal: boolean, codeUrl: string) => {
  const linkClass =
    "text-center text-[#ec6240] hover:text-[#ffa07a] transition-colors duration-100 ease-in-out";

  return isInternal ? (
      <a href={codeUrl} className={linkClass}>
        View Project
      </a>
  ) : (
    <a
      href={codeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      View Code in GitHub
    </a>
  );
};
