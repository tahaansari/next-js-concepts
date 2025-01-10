import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>This is homepage</h1>
      <Image src="https://placehold.co/600x400" style={{ width: "100%" }} width={600} height={400} alt="placeholder" />
    </>
  );
}
