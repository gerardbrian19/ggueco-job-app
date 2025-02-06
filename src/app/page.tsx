import Home from "./pages/Home";
import styles from "./styles/page.module.css";

export default function Page() {
  return (
    <div id="app">
      <header className={styles.bgHeader}></header>
      <Home />
    </div>
  );
}
