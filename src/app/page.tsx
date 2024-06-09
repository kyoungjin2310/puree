import BtnStyle from "./_component/common/btn/BtnStyle";
import ChartSpline from "./_component/common/chart/ChartSpline";
import styles from "./page.module.css";
import HaeaderStyle from "@/app/_component/common/HeaderStyle";
export default function Home() {
  return (
    <main className={styles.main}>
      <HaeaderStyle />
      <BtnStyle text="texts" />
      <ChartSpline />
    </main>
  );
}
