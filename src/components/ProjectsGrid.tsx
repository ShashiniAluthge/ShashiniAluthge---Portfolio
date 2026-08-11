import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";
import GitIcon from "../assets/github.png";
import FigmaIcon from "../assets/FigmaIcon.png";
import closeIcon from "../assets/Close.png";

// Local images
import IssueTrackerImage from "../assets/IssueTrackerImage.png";
import GymClientImage from "../assets/GymClient.png";
import GameWebImage from "../assets/GameWeb.png";
import PortfolioImage from "../assets/Portfolio.png";
import Xpress from "../assets/Xpress.png";
import careAlertImage from "../assets/careAlert.png";
import Shopfinity from "../assets/Shopfinity.png";
import gymClientWebUi from "../assets/GymClientWebUi.png";
import gymClientMobileUi from "../assets/GymMobileUi.png";
import gymAdminUi from "../assets/GymAdminUi.png";
import SunResortUi from "../assets/SunResortUi.png";
import XtronicsUi from "../assets/XtronicsUi.png";

interface Project {
    id: number;
    title: string;
    description: string;
    tech_stack: string[];
    github_url: string | null;
    live_url: string | null;
    image: string;
    project_type: string | null;
    year: number;
    category_slug: string;
    category_name: string;
}

// ─── Hardcoded project data ─────────────────────────────────────────────────

const allProjects: Project[] = [
    {
        id: 1,
        title: "Issue Tracker - Issue Management System",
        description:
            "I developed a full-stack issue tracking web application that allows users to create, view, update, and delete issues efficiently. The system includes user authentication, issue assignment, sorting, filtering, pagination, and a dashboard to manage and monitor issues effectively across the platform.",
        tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Prisma", "NextAuth.js", "MySQL"],
        github_url: "https://github.com/ShashiniAluthge/issue-tracker",
        live_url: null,
        image: IssueTrackerImage,
        project_type: "full-stack",
        year: 2026,
        category_slug: "web-development",
        category_name: "Web Development",
    },
    {
        id: 2,
        title: "Gym Management System Client Website",
        description:
            "I developed the client-side web application for a gym management system, enabling users to manage workouts, track progress, view payments, and explore gym details, membership plans, and contact information.",
        tech_stack: ["React.js", "TypeScript"],
        github_url: "https://github.com/GymManagmentSystem/gym_client_web_app",
        live_url: null,
        image: GymClientImage,
        project_type: "frontend",
        year: 2026,
        category_slug: "web-development",
        category_name: "Web Development",
    },
    {
        id: 3,
        title: "Game Hub - Gaming Website",
        description:
            "I developed a dynamic Game Hub website using React, Vite, and TypeScript, incorporating tools like React Query, Zustand, and Chakra UI for enhanced functionality and design.",
        tech_stack: ["React.js", "TypeScript", "React Query", "Zustand"],
        github_url: "https://github.com/ShashiniAluthge/game-hub",
        live_url: null,
        image: GameWebImage,
        project_type: "frontend",
        year: 2026,
        category_slug: "web-development",
        category_name: "Web Development",
    },
    {
        id: 4,
        title: "My Personal Portfolio",
        description:
            "I developed my personal portfolio website using React, TypeScript, and Tailwind CSS, showcasing my projects, skills, and experience with a clean, responsive design.",
        tech_stack: ["React.js", "TypeScript", "Tailwind CSS"],
        github_url: "https://github.com/ShashiniAluthge/ShashiniAluthge---Portfolio",
        live_url: "https://shashinialuthge.netlify.app/",
        image: PortfolioImage,
        project_type: "full-stack",
        year: 2026,
        category_slug: "web-development",
        category_name: "Web Development",
    },
    {
        id: 5,
        title: "XPress - Courier Service Management System",
        description:
            "This system was designed to streamline personal courier services while addressing communication failures and the lack of trust in external providers. It operates through both web and mobile applications, ensuring secure and efficient document and package transfers. I played a key role in developing the full stack mobile application development.",
        tech_stack: ["React Native", "Express.js", "MySQL"],
        github_url: "https://github.com/Courier-Service-Project",
        live_url: null,
        image: Xpress,
        project_type: "full-stack",
        year: 2026,
        category_slug: "mobile-app-development",
        category_name: "Mobile App Development",
    },
    {
        id: 6,
        title: "Care Alert Mobile App",
        description:
            "I developed Care Alert, a mobile app that fetches global COVID-19 updates via a public API. It includes registration, login, home, and detail views, with a focus on front-end development.",
        tech_stack: ["React Native", "JavaScript"],
        github_url: "https://github.com/ShashiniAluthge/CareAlertMobileApp",
        live_url: null,
        image: careAlertImage,
        project_type: "frontend",
        year: 2026,
        category_slug: "mobile-app-development",
        category_name: "Mobile App Development",
    },
    {
        id: 7,
        title: "Shopfinity - Mobile Shopping App",
        description:
            "This system was developed to simplify and optimize the shopping experience for users. Built as a Flutter mobile application, it connects seamlessly with a public API to enable key functionalities such as placing orders, searching products, and browsing items by category. The application features a responsive and user-friendly interface, ensuring smooth and efficient user interactions.",
        tech_stack: ["Flutter"],
        github_url: "https://github.com/Shopfinity-team/shopfinity",
        live_url: null,
        image: Shopfinity,
        project_type: "frontend",
        year: 2026,
        category_slug: "mobile-app-development",
        category_name: "Mobile App Development",
    },
    {
        id: 8,
        title: "MotionZone - Client Website",
        description:
            "I designed UIs for the MotionZone Gym Management System Client website, enabling gym members to track workouts, manage personal details, and access gym-related information seamlessly.",
        tech_stack: ["Figma"],
        github_url: null,
        live_url: "https://www.figma.com/design/crFQPiaHehWpzrgu6b49Kh/MotionZone-Client-Web-App?t=DTZhp1jIo0gHYZlk-1",
        image: gymClientWebUi,
        project_type: null,
        year: 2026,
        category_slug: "ui-ux-design",
        category_name: "UI/UX Design",
    },
    {
        id: 9,
        title: "MotionZone - Client Mobile App",
        description:
            "I designed UIs for the MotionZone Gym Management client mobile app, allowing members to track workouts, view schedules, manage personal details, and check payment history.",
        tech_stack: ["Figma"],
        github_url: null,
        live_url: "https://www.figma.com/design/QhOMwueILHGCcRvLDJOz0e/MotionZone-Client-MobileApp?t=DTZhp1jIo0gHYZlk-1",
        image: gymClientMobileUi,
        project_type: null,
        year: 2026,
        category_slug: "ui-ux-design",
        category_name: "UI/UX Design",
    },
    {
        id: 10,
        title: "MotionZone - Admin Website",
        description:
            "I designed UIs for the MotionZone Gym Management Admin web app, enabling gym administrators to add exercises, manage workouts, schedules, clients, staff details, and access a summarized dashboard view.",
        tech_stack: ["Figma"],
        github_url: null,
        live_url: "https://www.figma.com/design/33kXsMsybzaLk9gnk0qxvu/MotionZone-Admin-Web?node-id=0-1&t=tDms4d6xdUmFn4GH-1",
        image: gymAdminUi,
        project_type: null,
        year: 2026,
        category_slug: "ui-ux-design",
        category_name: "UI/UX Design",
    },
    {
        id: 11,
        title: "SunResort - Hotel Management System",
        description:
            "I designed UIs for the SunResort Hotel Management System, enabling efficient management of employees, suppliers, customers, sales, and inventory.",
        tech_stack: ["Figma"],
        github_url: null,
        live_url: "https://www.figma.com/design/I7UWnR3PEckuKDReZSRcw0/Sun-Resort?node-id=2-2&t=DTZhp1jIo0gHYZlk-1",
        image: SunResortUi,
        project_type: null,
        year: 2026,
        category_slug: "ui-ux-design",
        category_name: "UI/UX Design",
    },
    {
        id: 12,
        title: "Xtronics - Computer Accessories Shop",
        description:
            "Designed a fully prototyped e-commerce website for a computer accessories shop using Figma. The prototype includes Home, About Us, Products, Cart, and Contact Us pages, showcasing computer accessories organized by category and providing a complete user flow from product selection to checkout with a modern, user-friendly interface.",
        tech_stack: ["Figma"],
        github_url: null,
        live_url: "https://www.figma.com/design/ljA8H20y1SMSbaRGc27tL3/XTRONICS---Computer-Accessories-Shop-design?node-id=0-1&t=GNTSWYGyJgnUBk7G-1",
        image: XtronicsUi,
        project_type: null,
        year: 2026,
        category_slug: "ui-ux-design",
        category_name: "UI/UX Design",
    },
];

const categoryTagMap: Record<string, string> = {
    "web-development": "WEB DEV",
    "mobile-app-development": "MOBILE APP",
    "ui-ux-design": "UI/UX",
};

const categoryLabelMap: Record<string, string> = {
    "web-development": "Web Development",
    "mobile-app-development": "Mobile Application",
    "ui-ux-design": "UI/UX Design",
};

const projectTypeLabelMap: Record<string, string> = {
    "full-stack": "Full-Stack Development",
    frontend: "Frontend Development",
    backend: "Backend Development",
};

const filters: { key: string; label: string }[] = [
    { key: "all", label: "All" },
    { key: "web-development", label: "Web Dev" },
    { key: "mobile-app-development", label: "Mobile" },
    { key: "ui-ux-design", label: "UI/UX" },
];

const ProjectsGrid = () => {
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects =
        activeFilter === "all" ? allProjects : allProjects.filter((p) => p.category_slug === activeFilter);

    return (
        <div className="flex flex-col justify-center items-center w-full">
            {/* Filter pills */}
            <div className="flex justify-center mb-12">
                <div
                    className="inline-flex gap-1 p-1.5 rounded-full flex-wrap justify-center"
                    style={{ background: "var(--secondbackground)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                    {filters.map((f) => (
                        <button
                            key={f.key}
                            onClick={() => setActiveFilter(f.key)}
                            className="relative px-4 md:px-5 py-2 rounded-full text-sm md:text-base font-medium transition-colors"
                            style={{ color: activeFilter === f.key ? "#fff" : "rgba(255,255,255,0.6)" }}
                        >
                            {activeFilter === f.key && (
                                <motion.span
                                    layoutId="active-project-filter"
                                    className="absolute inset-0 rounded-full"
                                    style={{ background: "linear-gradient(135deg, var(--primary), var(--gradient_1))" }}
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{f.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1400px] mx-auto pb-4 items-stretch"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            categoryTag={categoryTagMap[project.category_slug]}
                            isUIUX={project.category_slug === "ui-ux-design"}
                            onOpen={() => setSelectedProject(project)}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                {selectedProject && (
                    <Modal
                        project={selectedProject}
                        isUIUX={selectedProject.category_slug === "ui-ux-design"}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

// ─── Editorial numbered project card ───────────────────────────────────────

const ProjectCard = ({
    project,
    index,
    categoryTag,
    isUIUX,
    onOpen,
}: {
    project: Project;
    index: number;
    categoryTag: string;
    isUIUX: boolean;
    onOpen: () => void;
}) => {
    const { ref, isInView } = useAnimatedInView<HTMLDivElement>();
    const number = String(index + 1).padStart(2, "0");
    const isMobile = project.category_slug === "mobile-app-development";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={onOpen}
            className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
            style={{
                background: "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                border: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,157,255,0.35)";
                e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,157,255,0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <div
                className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "var(--primary)", filter: "blur(60px)" }}
            />

            <div className="relative flex items-start justify-between mb-2">
                <span
                    className="text-3xl md:text-4xl font-light"
                    style={{ fontFamily: "'Syne', sans-serif", color: "rgba(255,255,255,0.25)" }}
                >
                    {number}
                </span>
                <span
                    className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold pt-2"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                >
                    {categoryTag}
                </span>
            </div>

            <h3
                className="relative text-[var(--secondary)] font-bold text-xl md:text-2xl mb-4 leading-snug line-clamp-2 min-h-[3.5rem] md:min-h-[4rem]"
                style={{ fontFamily: "'Syne', sans-serif" }}
            >
                {project.title}
            </h3>

            <div
                className={`relative rounded-2xl overflow-hidden aspect-[4/3] mb-5 flex items-center justify-center ${isMobile ? "p-4 md:p-5" : ""}`}
                style={{ background: "rgba(255,255,255,0.02)" }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className={`transition-transform duration-500 group-hover:scale-105 w-full h-full ${isMobile ? "object-contain" : "object-cover"}`}
                />
            </div>

            <div className="relative flex items-center justify-between">
                <span
                    className="text-xs md:text-sm"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(255,255,255,0.4)" }}
                >
                    {project.year}
                </span>

                <div
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                    style={{ border: "1px solid rgba(255,255,255,0.25)", color: "var(--secondary)" }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14 M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <span
                    className="text-xs md:text-sm tracking-widest uppercase font-medium"
                    style={{ color: "var(--secondary)" }}
                >
                    {isUIUX ? "View Design" : "View Project"}
                </span>
            </div>
        </motion.div>
    );
};

// ─── Modal ───────────────────────────────────────────────────────────────────

const Modal = ({
    project,
    isUIUX,
    onClose,
}: {
    project: Project;
    isUIUX: boolean;
    onClose: () => void;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            style={{ background: "rgba(5,21,31,0.75)", backdropFilter: "blur(6px)" }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl rounded-3xl my-8 flex flex-col overflow-hidden"
                style={{
                    maxHeight: "88vh",
                    background: "var(--secondbackground)",
                    border: "1px solid rgba(0,157,255,0.2)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110"
                    style={{ background: "rgba(5,21,31,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                    <img src={closeIcon} className="w-4 h-4" />
                </button>

                <div className="no-scrollbar overflow-y-auto min-h-0">
                    <div className="relative w-full aspect-video">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <div
                            className="absolute inset-0"
                            style={{ background: "linear-gradient(to top, var(--secondbackground) 0%, transparent 35%)" }}
                        />
                    </div>

                    <div className="px-6 md:px-8 pb-8 -mt-1">
                        <span
                            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                color: "var(--primary)",
                                background: "rgba(0,157,255,0.1)",
                            }}
                        >
                            {isUIUX
                                ? "UI/UX Design"
                                : projectTypeLabelMap[project.project_type ?? ""] ?? categoryLabelMap[project.category_slug]}
                        </span>

                        <h2 className="text-[var(--secondary)] font-bold text-2xl md:text-3xl mb-4">{project.title}</h2>

                        <p
                            className="text-sm md:text-base font-light leading-7 mb-6"
                            style={{ color: "rgba(255,255,255,0.65)" }}
                        >
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-7">
                            {project.tech_stack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs md:text-sm px-3 py-1 rounded-full font-medium"
                                    style={{ color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.14)" }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="h-px w-full mb-6" style={{ background: "rgba(255,255,255,0.08)" }} />

                        <div className="flex gap-3 flex-wrap">
                            {!isUIUX && project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                                    style={{ color: "var(--secondary)", border: "1px solid rgba(255,255,255,0.2)" }}
                                >
                                    <img src={GitIcon} className="w-4 h-4" />
                                    View Code
                                </a>
                            )}

                            {!isUIUX && project.live_url && (
                                <a
                                    href={project.live_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
                                    style={{
                                        background: "linear-gradient(135deg, var(--primary), var(--gradient_1))",
                                        boxShadow: "0 4px 16px rgba(0,157,255,0.3)",
                                    }}
                                >
                                    Visit Site
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7 M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            )}

                            {isUIUX && project.live_url && (
                                <a
                                    href={project.live_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
                                    style={{
                                        background: "linear-gradient(135deg, var(--primary), var(--gradient_1))",
                                        boxShadow: "0 4px 16px rgba(0,157,255,0.3)",
                                    }}
                                >
                                    <img src={FigmaIcon} className="w-4 h-4" />
                                    View in Figma
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectsGrid;