import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="DevOps Specialist"
            subTitle="XYZ Corporation (2021 - 2023)"
            result="Streamlined CI/CD pipelines, increased deployment frequency"
            des="Focused on automating and optimizing the company's development and deployment processes. Managed CI/CD pipelines using Jenkins and Docker, 
            leading to a 40% increase in deployment efficiency. Worked closely with development teams to implement DevOps best practices, significantly 
            improving collaboration and productivity."
          />
          <ResumeCard
            title="Linux Systems Administrator"
            subTitle="ABC Tech Solutions (2019 - 2021)"
            result="Enhanced system security, reduced downtime by 30%"
            des="Managed and optimized Linux server environments for high availability and security. Implemented automation scripts for system maintenance 
            and deployment, reducing manual workloads. Spearheaded a team in migrating services to cloud-based solutions, resulting in improved scalability 
            and cost-efficiency."
          />
          <ResumeCard
            title="Linux Administrator"
            subTitle="Innovative Start-up (2017 - 2019)"
            result="Automated deployment process, improved system performance"
            des="Oversaw daily operations of Linux servers, ensuring smooth performance. Developed and maintained backup strategies for critical data. 
            Collaborated in the integration of new technologies and systems, playing a key role in the transition to a more robust and scalable 
            infrastructure"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
