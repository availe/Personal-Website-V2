const resumeData = {
    education: {
      school: "College of Staten Island",
      degree: "B.S. in Computer Science",
      location: "Staten Island, NY",
      graduationDate: "Expected Dec 2024"
    },
    technicalSkills: {
      languages: ["Python", "C++", "C#", "Java", "JavaScript", "TypeScript", "SQL"],
      web: ["HTML/CSS", "React", "NextJS", "Tailwind", "Angular"],
      technologies: ["AWS", "Linux", "Figma", ".NET"],
      certifications: [
        "Google Cybersecurity Professional Certificate",
        "CodePath Introduction to iOS Development",
        "CodePath Introduction to Android Development"
      ]
    },
    experience: [
      {
        company: "Newmark",
        role: "Software Engineering Intern",
        location: "Manhattan, NY",
        duration: "Jun 2024 – Aug 2024",
        responsibilities: [
          "Collaborated closely with 20+ engineers on an internal project utilized by the Quality Control team",
          "Designed and implemented an Angular front-end view for managing web crawling operations.",
          "Utilized Angular routing to connect dashboard rows to corresponding website views.",
          "Implemented a front-end view that lists all links and attachments associated with a given document.",
          "Led UI redesign, addressing challenges with legacy global SCSS codebase and Angular Material quirks.",
          "Refactored components in the .NET codebase and updated EF Core to ensure compliance with new foreign key constraints."
        ]
      },
      {
        company: "Innovare",
        role: "Linux Technician Intern",
        location: "Remote, Peru",
        duration: "Sep 2023 – Nov 2023",
        responsibilities: [
          "Migrated dozens of servers to utilize Sophos Central for end-point security, reducing infrastructure costs while streamlining security management.",
          "Configured repository files for new server installations, setting up hostnames and IP ranges.",
          "Created and set up user accounts to minimize dependency on the root account, enhancing security.",
          "Developed a C++ program to automate the generation of configuration scripts and batch files."
        ]
      },
      {
        company: "Blackfacts",
        role: "Wordpress and Web Design Intern",
        location: "Remote, US",
        duration: "Jul 2023 – Aug 2023",
        responsibilities: [
          "Assisted implementing the 'Blackfacts for Schools' landing page utilizing WordPress and Elementor.",
          "Utilized Elementor to create a video showcase on the Blackfacts for Schools landing page.",
          "Utilized Figma to create website design concepts in accordance to modern web design principles."
        ]
      }
    ],
    projects: [
      {
        title: "Portfolio Website",
        technologies: ["NextJS", "TypeScript", "React", "Tailwind"],
        date: "Sep 2024",
        description: [
          "Developed a modern portfolio website with responsive design: viewable at availe.io",
          "Successfully deployed a 2D platformer game developed during a game jam event on portfolio website."
        ]
      },
      {
        title: "Expense Tracker",
        technologies: ["Java", "JavaFX", "Scene Builder", "Sqlite", "Maven"],
        date: "Nov 2023 – Dec 2023",
        description: [
          "Designed a multi-scene expense tracker application with embedded database for persistent memory.",
          "Leveraged Scene Builder to build an interactive expense table with functionalities such as adding, removing, and sorting expenses.",
          "Implemented a tiered user hierarchy: approved/unapproved users, managers, and a root user.",
          "Created a page that allows the root user and managers to manage other users.",
          "Developed a user profile screen allowing users to view account details, change passwords, and securely sign out."
        ]
      },
      {
        title: "PIC Indirect Addressing",
        technologies: ["Assembly", "PIC18F452 Microcontroller"],
        date: "Jan 2024",
        description: [
          "Utilized Assembly instructions and circuit schematics to interface PIC with peripherals.",
          "Programmed a PIC microcontroller to manage LED states and timing sequences in Assembly.",
          "Incorporated a 7-segment display to keep track of number of iterations performed by each sequence.",
          "Employed indirect addressing tables to manage LED state transitions and minimize memory footprint."
        ]
      }
    ]
  };

export default resumeData;