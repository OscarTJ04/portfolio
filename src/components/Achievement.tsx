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
            title="Linux Administrator / VMware Administrator"
            subTitle="Rotech (Mar. 2023 – Present)"
            result="Success"
            des="Successfully deployed and configured SFTP servers on Redhat 8/9 distribution, enhancing file transfer security.
            Streamlined server configuration to STIG benchmarks using Oscap and Ansible, improving security compliance.
            Automated daily tasks using Ansible, leading to increased operational efficiency.
            Played a pivotal role in maintaining and optimizing RHEL systems across zLinux and VMware platforms"
          />

          <ResumeCard
            title="Linux Systems Administrator / Engineer"
            subTitle="Highmark (Sep. 2017 - Mar. 2023)"
            result="Success"
            des="Successfully deployed and configured SFTP servers on Redhat 8/9 distribution, enhancing file transfer security.
            Streamlined server configuration to STIG benchmarks using Oscap and Ansible, improving security compliance.
            Automated daily tasks using Ansible, leading to increased operational efficiency.
            Played a pivotal role in maintaining and optimizing RHEL systems across zLinux and VMware platforms"
          />

          <ResumeCard
            title="Tier 2 Help Desk Specialist"
            subTitle="Stoltenberg Consulting (Jan. 2015 - Sep. 2016)"
            result="Success"
            des="Effectively resolved complex technical issues, earning a reputation for excellent customer service.
            Played a key role in upgrading and migrating technical infrastructure, including servers and network equipment.
            Managed end-user accounts using Active Directory, ensuring efficient user access and security"
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
