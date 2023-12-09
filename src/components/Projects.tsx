import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectThree, projectTwo, ansibleproject } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="PROJECTS"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Automated Web Application Deployment with Ansible"
            des="Automated deployment and configuration of multi-tier web application environment, streamlining deployments and reducing manual efforts. 
            combining infrastructure automation with application deployment."
            src={ansibleproject}
          />
          <ProjectsCard
            title="Infrastructure as Code (IaC) with Terraform"
            des="Mastered Infrastructure as Code (IaC) principles by creating Terraform scripts for provisioning and managing cloud infrastructure. 
            Achieved dynamic, scalable, and cost-effective infrastructure deployments on AWS."
            src={projectTwo}
          />
          <ProjectsCard
            title="Dockerized Microservices Application"
            des="Developed and containerized a cutting-edge microservices-based web application using Docker. 
            Leveraged Docker Compose for local development and orchestrated services with efficiency."
            src={projectThree}
          />
          <ProjectsCard
            title="Kubernetes Cluster Setup"
            des="stablished a high-performance Kubernetes cluster environment, showcasing expertise in container orchestration. 
            Successfully deployed complex applications on the cluster for seamless scaling."
            src={projectThree}
          />
          <ProjectsCard
            title="CI/CD Pipeline Automation with Jenkins"
            des="Designed and automated a robust CI/CD pipeline using Jenkins, enabling seamless integration, testing, and deployment of code changes. 
            Reduced deployment times by 40% and improved development team collaboration."
            src={projectTwo}
          />
          <ProjectsCard
            title="Monitoring and Logging Stack"
            des="Architected a comprehensive monitoring and logging solution using Prometheus, Grafana, and ELK stack. 
            Enabled real-time insights into infrastructure health and robust log analysis."
            src={projectTwo}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
