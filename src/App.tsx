import React from "react";
import styles from "./App.module.css";
import { Project } from "./pages/Project/Project"
import { Divider } from "./ui-lib/Divider/Divider";
import { Header } from "./ui-lib/Header/Header";
import { DataProvider } from "./shared/DataProvider";

const title = "Office Dashboard";

function App() {
  return (
    <DataProvider>
        <div className={styles.container}>
          <div className={styles.content}>
            <Header title={title}/>
            <Divider />
            <div className={styles.pageContent}>
              <Project/>
            </div> 
          </div>
        </div>
    </DataProvider>
  );
}
export default App;
