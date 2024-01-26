import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { SiTerraform, SiJenkins, SiAnsible } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Admin.", "Automation Specialist.", "DevOps Professional."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Oscar Tejada</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        Dynamic and detail-oriented Linux Systems Admin with over nine years of experience in automating, configuring, and optimizing cloud and network operations. 
        Proficient in orchestrating deployments and fostering innovations to improve system reliability and performance. 
        Adept in leading cross-functional teams to achieve organizational goals and championing the adoption of DevOps best practices.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="https://www.Github.com/oscartj04" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/oscar-tejada04"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiAnsible />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <SiTerraform />
            </span>
            <span className="bannerIcon">
              <SiJenkins />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
