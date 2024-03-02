import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/Sidebar";
import { IDetails } from "../types/IDetails";

export default function Home() {

  const myDetails: IDetails = {
    name: 'Sachin Bahukhandi',
    designation: 'Web Developer',
    email: "sachinb0013@gmail.com",
    phone:"8936985734",
    dob:"01-23-1996",
    location: "Dehradun, Uttarakhand, India"
  };
  return (
    <div className={styles.container}>
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
        {/* Sidebar */}
        <Sidebar userDetails={myDetails} />
      </main>
    </div>
  );
}
