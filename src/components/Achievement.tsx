import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="DevOps Specialist"
            subTitle="Rapid7 (2021 - 2023)"
            result="Success"
            des="Streamlined CI/CD pipelines, increasing deployment frequency by 40%. Focused on automating and optimizing the company's development and deployment processes. Enhanced collaboration and productivity by working closely with development teams to implement DevOps best practices."
          />

          <ResumeCard
            title="Linux Systems Administrator"
            subTitle="Cognixia (2019 - 2021)"
            result="Success"
            des="Enhanced system security and reduced downtime by 30%. Managed and optimized Linux server environments for high availability and security. Implemented automation scripts for system maintenance and spearheaded a team for migrating services to cloud-based solutions, improving scalability and cost-efficiency."
          />

          <ResumeCard
            title="Linux Administrator"
            subTitle="Zebra Medical Vision (2017 - 2019)"
            result="Success"
            des="Automated deployment process, improving system performance. Oversaw daily operations of Linux servers, developed and maintained backup strategies for critical data. Collaborated in the integration of new technologies and systems, playing a key role in the transition to a more robust and scalable infrastructure."
          />

          <ResumeCard
            title="Continuous Training"
            subTitle=""
            result="Certification In Progress"
            des="AWS DevOps Engineer, Certified Kubernetes Administrator (CKA), Certified Docker Associate (DCA)"
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
