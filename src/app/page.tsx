import BtnStyle from "./_component/common/btn/BtnStyle";
import styles from "./page.module.css";
import HaeaderStyle from "@/app/_component/common/HeaderStyle";
export default function Home() {
  return (
    <main className={styles.main}>
      <HaeaderStyle />
      <BtnStyle text="texts" />
    </main>
  );
}
