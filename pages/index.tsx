import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import { IDetails } from "../types/IDetails";
import MainContent from "../components/MainContent";
import CompleteComponent from "../components/CompleteComponent";
import { INav } from "../types/INav";

export default function Home() {

  const myDetails: IDetails = {
    name: 'Sachin Bahukhandi',
    designation: 'Web Developer',
    email: "sachinb0013@gmail.com",
    phone: "8936985734",
    dob: "01-23-1996",
    location: "Dehradun, Uttarakhand, India",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sachin-bahukhandi/",
      github: "https://github.com/SachinBahukhandi",
      stackoverflow: "https://stackoverflow.com/users/5192105/sachin-bahukhandi"
    }
  };
  const navItems: Array<INav> = [
    {
      name: "About",
    },
    {
      name: "Resume",
    },
    {
      name: "PortFolio",
    },
    {
      name: "Blog",
    },
    {
      name: "Contact",
    }
  ];
  return (
    <div>
      <Head>
        <title>{myDetails.name}'s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></script>
      </Head>
      <main>

        <Sidebar userDetails={myDetails} />
        <MainContent navItems={navItems} />
      </main>
    </div>
  );
}
