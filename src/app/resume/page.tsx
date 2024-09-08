import resumeData from "./resume-data";

export default function ResumePage() {
  const headerStyle = "text-xl font-bold border-b-2 border-gray-600";

  return (
    <div className="container mx-auto px-8 pt-12 md:pt-8 flex flex-col gap-8">
      {/* Education Section */}
      <section>
        <h2 className={headerStyle}>Education</h2>
        <div className="mt-4">
          <p className="font-semibold">
            {resumeData.education.school}{" "}
            <span className="font-normal">
              &ndash; {resumeData.education.degree},{" "}
              {resumeData.education.graduationDate}
            </span>
          </p>
          <p className="md:text-sm">{resumeData.education.location}</p>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section>
        <h2 className={headerStyle}>Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="contents md:block">
            <p>
              <strong>Languages:</strong>{" "}
              {resumeData.technicalSkills.languages.join(", ")}
            </p>
            <p>
              <strong>Web:</strong> {resumeData.technicalSkills.web.join(", ")}
            </p>
          </div>
          <div className="contents md:block">
            <p>
              <strong>Technologies:</strong>{" "}
              {resumeData.technicalSkills.technologies.join(", ")}
            </p>
            <p>
              <strong>Certifications:</strong>{" "}
              {resumeData.technicalSkills.certifications.join(", ")}
            </p>
          </div>
        </div>
      </section>

      {/* Internship Experience Section */}
      <section>
        <h2 className={headerStyle}>Internship Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mt-4">
            <p className="font-semibold">
              {exp.company} - {exp.role}{" "}
              <span className="font-normal">
                ({exp.duration}, {exp.location})
              </span>
            </p>
            <ul className="list-disc pl-5 mt-2">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section>
        <h2 className={headerStyle}>Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="mt-4">
            <p className="font-semibold">
              {project.title} -{" "}
              <span className="font-normal">
                {project.technologies.join(", ")} ({project.date})
              </span>
            </p>
            <ul className="list-disc pl-5 mt-2">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="flex justify-center">
        <span className="text-center text-sm text-[#ec6240] transition-colors duration-100 ease-in-out">
          Download as PDF
        </span>
      </div>
    </div>
  );
}
