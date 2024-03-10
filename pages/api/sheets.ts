import { IPortfolio } from "../../types/IPortfolio";

export default function handler(req: any, res: any) {
  const myData: IPortfolio = {
    about: {
      headline:
        "Seasoned Full Stack Developer with 3+ years of expertise, specializing in API development for a developer-centric focus. Proficient in diverse technology stacks, consistently delivering robust and scalable solutions.",
      stacks: [
        {
          key: "Web Wizard",
          description:
            "Crafting Stunning Websites with HTML, CSS, JavaScript, jQuery, and React.",
          icon: {
            key: "DiReact",
            color: "#0092e4",
          },
        },
        {
          key: "API Development",
          description:
            "Orchestrating Seamless Solutions with LAMP, Redis, Kafka, and NestJS",
          icon: {
            key: "DiLaravel",
            color: "red",
          },
        },
        {
          key: "Web Development",
          description:
            "Crafting Dynamic Solutions with LAMP Stack and Laravel Lumen for Seamless User Experiences",
          icon: {
            key: "DiPhp",
            color: "#B197FC",
          },
        },
        {
          key: "Linux Virtuoso",
          description:
            "Proficient in Linux Server Administration & Optimization.",
          icon: {
            key: "DiUbuntu",
            color: "#e95420",
          },
        },
      ],
    },
  };
  res.status(200).json(myData);
}
