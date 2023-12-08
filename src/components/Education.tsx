import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
           <ResumeCard
            title="AAS - Associate of Applied Science in IT & Networking"
            subTitle="DeVry University, College of Engineering & Information Sciences (2021 - 2023)"
            result="3.05/4"
            des="During my pursuit of an Associate of Applied Science degree in IT & Networking at DeVry University, 
            I engaged in a comprehensive curriculum that provided a solid foundation in various aspects of Information Technology, 
            with a specialized focus on Network Systems Administration. Throughout this educational journey, I had the privilege of 
            delving into a wide range of subjects, including network design, server administration, cybersecurity, and database management."
          />
          <ResumeCard
            title="Docker Mastery: The Complete Toolset From a Docker Captain"
            subTitle="Udemy Course (Completed in 2022)"
            des="An intensive course covering Docker essentials, container orchestration with Docker Compose, Docker Swarm, and Kubernetes. Focused on practical use-cases and hands-on implementation, enhancing my skills in containerization and microservices."
          />
          <ResumeCard
            title="Ansible for the Absolute Beginner - Hands-On - DevOps"
            subTitle="Udemy Course (Completed in 2020)"
            des="Focused on foundational Ansible concepts, this course included hands-on practice with Ansible Playbooks and roles. It equipped me with the skills to automate server configuration and management, a key aspect of my role as a DevOps Specialist."
          />
        </div>
      </div>
      {/* part Two */}

    </motion.div>
  );
};

export default Education;
