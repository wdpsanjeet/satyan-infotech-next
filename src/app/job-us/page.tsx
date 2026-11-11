import { Hero } from "@/components/common/Hero";
import { JobContent } from "@/components/sections/JobContent";

export const metadata = { title: "Career Path and Training", description: "Industry-focused full stack development training, internships, and job opportunities from Satyan Infotech." };

export default function JobPage() {
  return <main role="main" className="jobs-page"><article><Hero image="/frontend/img/fullstack_banner_dark.jpeg" imageAlt="Industry-focused full stack development training" title={<>Industry-Focused <br /> Training with Job Assurance</>} /><JobContent /></article></main>;
}
