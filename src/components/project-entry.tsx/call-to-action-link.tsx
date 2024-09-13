import Link from "next/link";

export const callToActionLink = (isInternal: boolean, codeUrl: string) => {
  const linkClass =
    "text-center text-[#ec6240] hover:text-[#ffa07a] transition-colors duration-100 ease-in-out";

  return isInternal ? (
    <Link href={codeUrl} passHref>
      <span className={linkClass}>View Project</span>
    </Link>
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
