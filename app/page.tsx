"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type ProjectCategory = "all" | "data" | "ai" | "software";

type Project = {
  id: string;
  number: string;
  title: string;
  categoryLabel: string;
  categories: Exclude<ProjectCategory, "all">[];
  technologies: string[];
  image: string;
  imageAlt: string;
  summary: string;
  problem: string;
  objective: string;
  solution?: string;
  question: string;
  contributions: string[];
  keyFeatures?: string[];
  challenges?: string[];
  impact: string;
  lessons: string;
  futureEnhancements?: string[];
  pipeline: string[];
};

const projects: Project[] = [
  {
    id: "bi-dashboard",
    number: "01",
    title: "Executive Business Intelligence Dashboard",
    categoryLabel: "Data + BI",
    categories: ["data", "software"],
    technologies: [
      "Power BI",
      "Microsoft Fabric",
      "DAX",
      "Salesforce",
      "SQL",
    ],
    image: "/projects/bi-dashboard.png",
    imageAlt:
      "Power BI dashboard showing revenue, material cost, labour cost, overhead cost and profit",

    summary:
      "Interactive Power BI dashboards that bring operational and Salesforce data into a single reporting view for leadership.",

    problem:
      "Leadership relied on multiple disconnected spreadsheets and reports to monitor business performance. This made it difficult to get timely, consistent insights or move quickly from a high-level metric to the records behind it.",

    objective:
      "Create a reporting solution that consolidates operational and Salesforce data and makes key performance information easier for leadership to monitor.",

    solution:
      "I developed interactive Power BI dashboards that combined data from multiple business systems into one reporting environment, supported by transformed datasets, DAX measures and drill-down reporting.",

    question:
      "How can leadership monitor performance without piecing together several disconnected reports?",

    contributions: [
      "Built ETL workflows in Microsoft Fabric to prepare and transform reporting datasets.",
      "Developed DAX measures and KPIs for executive-level reporting.",
      "Designed interactive Power BI dashboards and drill-down reports.",
      "Integrated data from multiple business systems into a unified reporting view.",
      "Worked on translating stakeholder reporting needs into clearly defined metrics and dashboard views.",
    ],

    keyFeatures: [
      "Executive KPI reporting",
      "Interactive filters and slicers",
      "Drill-down and drill-through analysis",
      "Operational and Salesforce data integration",
      "DAX-based calculations",
      "Centralized reporting",
    ],

    challenges: [
      "Turning broad stakeholder requests into clearly defined metrics.",
      "Ensuring different data sources could be represented consistently in one report.",
      "Designing dashboards that provided detail without overwhelming the user.",
      "Balancing high-level executive reporting with the ability to investigate individual records.",
    ],

    impact:
      "The dashboards made it easier for leadership to monitor key performance indicators from one place, reduced reliance on manual reporting and supported faster evidence-based decisions.",

    lessons:
      "This project deepened my understanding of data modelling for reporting at scale. It also showed me how much dashboard design affects the way people interpret data. Defining the right KPI and making it easy to investigate the records behind it can be as important as the calculation itself.",

    pipeline: [
      "Operational + Salesforce data",
      "Microsoft Fabric ETL",
      "Data transformation",
      "Data model + DAX",
      "Power BI dashboard",
      "Business decisions",
    ],
  },

  {
    id: "ai-applications",
    number: "02",
    title: "AI-Powered Applications",
    categoryLabel: "AI + Data",
    categories: ["ai", "data", "software"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "OpenAI APIs",
      "REST APIs",
      "Clerk Auth",
    ],
    image: "/projects/ai-map-app.png",
    imageAlt:
      "Web application showing categorized data points plotted on an interactive map",

    summary:
      "Web applications that combine frontend engineering, data analysis and AI capabilities to make complex information easier to work with.",

    problem:
      "Some business workflows involved large amounts of information and repetitive manual work. Existing applications could display information, but there was an opportunity to use AI and analytics to make those workflows more useful and efficient.",

    objective:
      "Build AI-enabled application experiences that combine usable interfaces, structured data and intelligent functionality rather than treating AI as a separate experiment.",

    solution:
      "I contributed to applications that brought AI capabilities into web-based workflows while also preparing and analysing the data required to support those features.",

    question:
      "How can AI be incorporated into a real application in a way that supports an actual user workflow?",

    contributions: [
      "Built frontend interfaces using Next.js and TypeScript.",
      "Integrated AI capabilities through APIs.",
      "Prepared datasets using Python.",
      "Conducted data analysis to support AI-driven application functionality.",
      "Worked with REST APIs to connect frontend experiences to backend and AI services.",
      "Collaborated on testing and deployment of application workflows.",
    ],

    keyFeatures: [
      "AI API integration",
      "Interactive data interfaces",
      "Data preparation and analysis",
      "Frontend-to-backend workflows",
      "Authentication",
      "Map-based data exploration",
    ],

    challenges: [
      "Presenting complex information in a way that remained understandable to the user.",
      "Connecting AI outputs to useful actions inside an existing workflow.",
      "Handling data preparation before information could be used effectively by application features.",
      "Testing interactions across frontend, backend and AI services.",
    ],

    impact:
      "The applications helped reduce manual processes, improve how users interacted with information and support more intelligent, data-driven workflows.",

    lessons:
      "Working on these applications taught me that adding AI to a product is only one part of the solution. The quality of the data, the surrounding workflow and the way results are presented all influence whether the feature is actually useful.",

    futureEnhancements: [
      "Explore predictive analytics where suitable.",
      "Improve model and prompt evaluation.",
      "Add richer self-service reporting capabilities.",
      "Continue improving the way AI outputs are validated and presented to users.",
    ],

    pipeline: [
      "User / business data",
      "Data preparation",
      "Analysis",
      "AI service / API",
      "Application workflow",
      "User outcome",
    ],
  },

  {
    id: "resource-manager",
    number: "03",
    title: "Resource Management Platform",
    categoryLabel: "Software + Data",
    categories: ["software", "data", "ai"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Convex DB",
      "OAuth",
      "Tailwind CSS",
    ],
    image: "/projects/resource-management.png",
    imageAlt:
      "Resource planning interface showing employee availability, skills and allocation controls",

    summary:
      "A centralized platform for managing employee allocation, project staffing and resource availability.",

    problem:
      "Managing employee allocations, project assignments and resource availability across teams was fragmented and largely manual. Managers lacked one place to understand who was available and how people were already allocated.",

    objective:
      "Develop a centralized platform where the organization could manage resources, projects, allocations, notifications and users from a single system.",

    solution:
      "I contributed to the development of a resource management application that brought user, project and allocation information together into a single planning interface.",

    question:
      "How can managers quickly understand employee availability, skills and project allocation without relying on fragmented manual coordination?",

    contributions: [
      "Developed responsive frontend interfaces using Next.js and TypeScript.",
      "Built reusable UI components to improve consistency and maintainability.",
      "Integrated secure authentication and role-based access control using OAuth.",
      "Worked with backend APIs to connect project, user and allocation workflows.",
      "Collaborated with the product team to translate business requirements into technical features.",
      "Developed interfaces that allowed resources to be searched and filtered by information such as skill, department, role and availability.",
    ],

    keyFeatures: [
      "User management",
      "Project management",
      "Resource planning",
      "Capacity view",
      "Employee allocation",
      "Authentication",
      "Role management",
      "Notifications",
      "Reporting",
    ],

    challenges: [
      "Designing reusable components that could adapt to different user roles.",
      "Managing authentication and authorization across multiple workflows.",
      "Keeping layouts responsive while displaying complex project and employee information.",
      "Presenting resource availability clearly enough for managers to make staffing decisions.",
    ],

    impact:
      "The platform brought resource-management information into one application, reducing manual coordination and improving visibility into employee availability and project allocations.",

    lessons:
      "Building this platform sharpened how I think about enterprise software. I learned to balance usability with technical constraints, design for multiple user roles from the beginning and keep implementation grounded in the workflows people actually use.",

    pipeline: [
      "Employee profiles",
      "Skills + availability",
      "Current allocations",
      "Project requirements",
      "Resource planning",
      "Staffing decision",
    ],
  },
];

const filters: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "data", label: "Data & BI" },
  { value: "ai", label: "AI" },
  { value: "software", label: "Software" },
];

const experience = [
  {
    company: "Qhala",
    role: "Software Engineer",
    period: "Mar 2024 — Present",
    description:
      "Working across software engineering, business intelligence, data analytics and AI-enabled products.",
  },
  {
    company: "Self-employed",
    role: "Freelance Data Analyst",
    period: "Sep 2023 — Feb 2024",
    description:
      "Cleaned and analysed datasets, built Power BI and Tableau dashboards and delivered analytical reports.",
  },
  {
    company: "Taltech International Hub",
    role: "Software Engineering Attaché",
    period: "Jun 2023 — Aug 2023",
    description:
      "Worked on e-commerce development, operational reporting and Power BI dashboards.",
  },
];

export default function Home() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;

    return projects.filter((project) =>
      project.categories.includes(filter)
    );
  }, [filter]);

  function openProject(project: Project) {
    setSelectedProject(project);

    setTimeout(() => {
      document
        .getElementById("case-study")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#161616]">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#f7f7f5]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-14">
          <a href="#" className="group">
            <p className="font-semibold tracking-tight">Joan Kurgat</p>
            <p className="text-xs text-neutral-500">
              Data · AI · Software
            </p>
          </a>

          <div className="hidden items-center gap-7 text-sm md:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a
              href="#contact"
              className="rounded-full bg-[#161616] px-5 py-2.5 text-white transition hover:bg-blue-600"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-5 md:px-10 md:pt-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-7 flex flex-wrap gap-2">
              <Badge>Data Analytics</Badge>
              <Badge>Artificial Intelligence</Badge>
              <Badge>Software Engineering</Badge>
            </div>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Joan Cherono Kurgat
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[82px]">
              I turn data into 
              <span className="text-blue-600"> products, insights  </span>
              and <span className="text-blue-600"> decisions  </span>
              
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
              I&apos;m a Software Engineer working across analytics,
              business intelligence and AI. My work ranges from
              preparing and analysing data to building Power BI
              dashboards, data-driven applications and AI-enabled
              workflows.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[#161616] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
              >
                Explore my work
              </a>

              <a
                href="#about"
                className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium transition hover:border-neutral-900"
              >
                More about me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Metric label="Core focus" value="Analytics + BI" />
            <Metric label="Also building" value="AI Applications" />
            <Metric label="Engineering" value="Web + APIs" />
            <Metric label="Approach" value="Problem → Evidence" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-14">
          <SectionLabel>About</SectionLabel>

          <div className="mt-5 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              I like solving the question behind the requirement.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-neutral-600">
              <p>
                My background is in Software Engineering, but a large
                part of my professional work sits between software and
                data. I work with data to understand what is happening,
                build tools that make that information easier to use,
                and connect insights back to real business workflows.
              </p>

              <p>
                Sometimes that means building a dashboard. Sometimes it
                means preparing and modelling data. In other cases, the
                best solution is an application or an AI-enabled
                workflow.
              </p>

              <p>
                I enjoy the point where analysis stops being a set of
                numbers and starts helping someone answer a real
                question.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-5">
            {[
              "Business question",
              "Data & sources",
              "Clean & model",
              "Analyse & build",
              "Decision / product",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-200 bg-[#fafafa] p-5"
              >
                <span className="text-xs font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-5 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-14"
      >
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Selected work</SectionLabel>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Work across data, AI and software.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
              These are some of the projects that best show how I
              combine technical implementation with business and data
              problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  filter === item.value
                    ? "bg-[#161616] text-white"
                    : "border border-neutral-300 bg-white hover:border-neutral-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex overflow-hidden rounded-[28px] border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/60 lg:flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <Badge>{project.categoryLabel}</Badge>

                  <span className="text-sm text-neutral-400">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.02em]">
                  {project.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-6 leading-7 text-neutral-600">
                  {project.summary}
                </p>

                <div className="mt-7 border-t border-neutral-100 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    The question
                  </p>

                  <p className="mt-2 text-sm leading-6">
                    {project.question}
                  </p>
                </div>

                <button
                  onClick={() => openProject(project)}
                  className="mt-8 flex items-center justify-between border-t border-neutral-100 pt-5 text-left text-sm font-semibold text-blue-600"
                >
                  Spotlight
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}
      {selectedProject && (
        <section
          id="case-study"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-28 md:px-10 lg:px-14"
        >
          <div className="overflow-hidden rounded-[36px] bg-[#161616] text-white">
            {/* HEADER */}
            <div className="p-7 md:p-12">
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Case Study · {selectedProject.categoryLabel}
                  </p>

                  <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
                    {selectedProject.title}
                  </h2>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
                    {selectedProject.summary}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {selectedProject.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-300"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="shrink-0 rounded-full border border-neutral-600 px-4 py-2 text-sm text-neutral-300 transition hover:border-white hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative mx-5 aspect-[16/8] overflow-hidden rounded-[24px] bg-neutral-900 md:mx-12">
              <Image
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            {/* PROBLEM / OBJECTIVE */}
            <div className="grid gap-12 p-7 md:grid-cols-2 md:p-12">
              <CaseBlock
                number="01"
                title="The problem"
                text={selectedProject.problem}
              />

              <CaseBlock
                number="02"
                title="The objective"
                text={selectedProject.objective}
              />
            </div>

            {/* SOLUTION */}
            {selectedProject.solution && (
              <div className="border-y border-neutral-800 px-7 py-12 md:px-12">
                <SectionLabelDark>03 · The solution</SectionLabelDark>

                <p className="mt-5 max-w-4xl text-2xl leading-10 text-neutral-200">
                  {selectedProject.solution}
                </p>
              </div>
            )}

            {/* CONTRIBUTION */}
            <div className="grid gap-12 p-7 md:grid-cols-[0.8fr_1.2fr] md:p-12">
              <div>
                <SectionLabelDark>
                  04 · My contribution
                </SectionLabelDark>

                <h3 className="mt-4 text-3xl font-semibold">
                  What I worked on
                </h3>

                <p className="mt-5 max-w-md leading-7 text-neutral-400">
                  These are the areas of the project where I was
                  directly involved.
                </p>
              </div>

              <div className="space-y-3">
                {selectedProject.contributions.map(
                  (contribution, index) => (
                    <div
                      key={contribution}
                      className="flex gap-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-5"
                    >
                      <span className="text-sm font-semibold text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="leading-7 text-neutral-300">
                        {contribution}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* FLOW */}
            <div className="bg-[#202020] p-7 md:p-12">
              <SectionLabelDark>
                05 · How it fits together
              </SectionLabelDark>

              <h3 className="mt-4 text-3xl font-semibold">
                Project workflow
              </h3>

              <div className="mt-8 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
                {selectedProject.pipeline.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="flex min-h-28 flex-1 flex-col justify-between rounded-2xl border border-neutral-700 bg-neutral-900 p-4">
                      <span className="text-xs text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mt-5 text-sm font-medium">
                        {step}
                      </p>
                    </div>

                    {index <
                      selectedProject.pipeline.length - 1 && (
                      <span className="hidden text-neutral-600 xl:block">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURES / CHALLENGES */}
            <div className="grid gap-12 p-7 md:grid-cols-2 md:p-12">
              {selectedProject.keyFeatures && (
                <div>
                  <SectionLabelDark>
                    06 · Key features
                  </SectionLabelDark>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {selectedProject.keyFeatures.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.challenges && (
                <div>
                  <SectionLabelDark>
                    07 · Challenges
                  </SectionLabelDark>

                  <div className="mt-6 space-y-4">
                    {selectedProject.challenges.map(
                      (challenge) => (
                        <div
                          key={challenge}
                          className="border-l border-neutral-600 pl-5 text-neutral-300"
                        >
                          {challenge}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* IMPACT */}
            <div className="bg-blue-600 p-7 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                08 · Business impact
              </p>

              <p className="mt-5 max-w-5xl text-3xl font-medium leading-[1.4] md:text-4xl">
                {selectedProject.impact}
              </p>
            </div>

            {/* LESSONS */}
            <div className="grid gap-12 p-7 md:grid-cols-[0.7fr_1.3fr] md:p-12">
              <div>
                <SectionLabelDark>
                  09 · Reflection
                </SectionLabelDark>

                <h3 className="mt-4 text-3xl font-semibold">
                  What I learned
                </h3>
              </div>

              <p className="text-xl leading-9 text-neutral-300">
                {selectedProject.lessons}
              </p>
            </div>

            {/* FUTURE */}
            {selectedProject.futureEnhancements && (
              <div className="border-t border-neutral-800 p-7 md:p-12">
                <SectionLabelDark>
                  10 · What I would explore next
                </SectionLabelDark>

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  {selectedProject.futureEnhancements.map(
                    (enhancement, index) => (
                      <div
                        key={enhancement}
                        className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5"
                      >
                        <span className="text-xs text-blue-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="mt-3 leading-7 text-neutral-300">
                          {enhancement}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-14">
          <SectionLabel>Toolkit</SectionLabel>

          <div className="mt-4 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                What I use to get from data to a working solution.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SkillCard
                title="Analyse"
                description="Python · R · SQL · Excel · Stata"
                detail="Cleaning, statistical analysis, exploration and data preparation."
              />

              <SkillCard
                title="Visualise & model"
                description="Power BI · DAX · Microsoft Fabric · Tableau"
                detail="Data models, dashboards, KPIs, reporting and transformation workflows."
              />

              <SkillCard
                title="Build"
                description="Next.js · React · TypeScript · REST APIs"
                detail="Applications and interfaces that bring data and AI into real workflows."
              />

              <SkillCard
                title="Automate & collect"
                description="Python · Selenium · BeautifulSoup · ETL"
                detail="Automating collection, transformation and repetitive data workflows."
              />
            </div>
          </div>
        </div>
      </section>

      {/* OTHER WORK */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-14">
        <SectionLabel>Other work</SectionLabel>

        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
          A few other things I&apos;ve worked on.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <MiniProject
            title="Survey Analytics"
            tools="Python · R · Power BI · KoboToolbox"
            text="Worked across survey design, data collection, cleaning, analysis and reporting to support research and product decisions."
          />

          <MiniProject
            title="AI Readiness Assessment"
            tools="R · Excel · Python"
            text="Analysed data used to evaluate AI adoption readiness across African countries and support broader research discussions."
          />

          <MiniProject
            title="Automated Data Collection"
            tools="Python · Selenium · BeautifulSoup"
            text="Automated online data collection and preparation workflows to reduce repetitive manual work and improve data availability."
          />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-y border-neutral-200 bg-[#161616] text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-14">
          <SectionLabelDark>Experience</SectionLabelDark>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Where I&apos;ve applied these skills.
          </h2>

          <div className="mt-12">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="grid gap-3 border-t border-neutral-800 py-7 md:grid-cols-[0.9fr_1fr_0.7fr]"
              >
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-neutral-400">
                    {item.company}
                  </p>
                </div>

                <p className="max-w-xl leading-7 text-neutral-300">
                  {item.description}
                </p>

                <p className="text-sm text-neutral-500 md:text-right">
                  {item.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Education</SectionLabel>

            <h2 className="mt-4 text-3xl font-semibold">
              B.Sc. Software Engineering
            </h2>

            <p className="mt-3 text-neutral-600">
              Multimedia University of Kenya
            </p>

            <p className="mt-1 text-neutral-500">
              2019 — 2023 · Second Class Honours (Upper Division)
            </p>
          </div>

          <div>
            <SectionLabel>Certifications</SectionLabel>

            <div className="mt-5 space-y-4">
              <Certification>
                Career Essentials in Data Analysis — Microsoft &
                LinkedIn
              </Certification>

              <Certification>
                Career Essentials in Project Management — Microsoft &
                LinkedIn
              </Certification>

              <Certification>
                Professional Soft Skills Learning Pathway — LinkedIn
                Learning
              </Certification>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 lg:px-14"
      >
        <div className="rounded-[36px] bg-blue-600 p-8 text-white md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            Contact
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
                Interested in data, AI or software that solves a real
                problem?
              </h2>
            </div>

            <div className="flex flex-col justify-end space-y-3 lg:text-right">
              <a
                href="mailto:kurgatjoan2@gmail.com"
                className="text-lg hover:underline"
              >
                kurgatjoan2@gmail.com
              </a>

              <p>Nairobi, Kenya</p>

              <a
                href="https://www.linkedin.com/in/joan-kurgat-90b878250/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-6 pb-10 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <p>Joan Cherono Kurgat</p>
        <p>Built with Next.js, TypeScript & Tailwind CSS. </p>
      </footer>
    </main>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
      {children}
    </span>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <p className="text-xs uppercase tracking-wide text-neutral-400">
        {label}
      </p>

      <p className="mt-3 font-semibold">{value}</p>
    </div>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
      {children}
    </p>
  );
}

function SectionLabelDark({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
      {children}
    </p>
  );
}

function SkillCard({
  title,
  description,
  detail,
}: {
  title: string;
  description: string;
  detail: string;
}) {
  return (
    <div className="rounded-[24px] border border-neutral-200 bg-[#fafafa] p-7">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-4 font-medium">{description}</p>

      <p className="mt-4 leading-7 text-neutral-600">
        {detail}
      </p>
    </div>
  );
}

function CaseBlock({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
        {number} · {title}
      </p>

      <p className="mt-5 text-xl leading-8 text-neutral-300">
        {text}
      </p>
    </div>
  );
}

function MiniProject({
  title,
  tools,
  text,
}: {
  title: string;
  tools: string;
  text: string;
}) {
  return (
    <article className="rounded-[24px] border border-neutral-200 bg-white p-7">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 text-sm text-blue-600">{tools}</p>

      <p className="mt-5 leading-7 text-neutral-600">{text}</p>
    </article>
  );
}

function Certification({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-neutral-200 pb-4 leading-7">
      {children}
    </div>
  );
}