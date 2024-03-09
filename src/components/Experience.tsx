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
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Linux Administrator / VMware Administrator"
            subTitle="Rotech (2021 - 2023)"
            result="Linux and VMware administration, system deployment, configuration, and maintenance"
            des="As a Linux/VMware Administrator at Rotech since March 2023, I specialize in deploying and managing RedHat and VMware systems, focusing on security, automation with Ansible, and performance optimization."
          />
          <ResumeCard
            title="Linux Systems Administrator / Engineer"
            subTitle="Highmark (2017 - 2023)"
            result="Enhanced system security, reduced downtime by 30%"
            des="As a Linux Systems Administrator/Engineer at Highmark from Sep 2017 to Mar 2023, I focused on automating and optimizing Linux systems, developing solutions in Bash and Java, and managing server lifecycles and security across virtual and physical environments."
          />
          <ResumeCard
            title="Tier 2 Help Desk Specialist"
            subTitle="Stoltenberg Consulting (2015 - 2017)"
            result="Automated deployment process, improved system performance"
            des="Oversaw daily operations of Linux servers, ensuring smooth performance. Developed and maintained backup strategies for critical data. 
            Collaborated in the integration of new technologies and systems, playing a key role in the transition to a more robust and scalable 
            infrastructure"
          />
          <ResumeCard
            title="I.T Field Technician"
            subTitle="Orlando Health (2014 - 2015)"
            result="Linux system administration, troubleshooting, and optimization"
            des="managed hardware and software installation, configuration, and troubleshooting, including network and printer support, while also maintaining inventory using a MYSQL database and resolving issues through the Cherwell ticketing system."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
