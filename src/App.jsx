import { useState } from "react";
import DataForm from "./components/form/form";
import DisplayBoard from "./components/display-board/display-board";
import classes from "./App.module.scss";

function App() {
    const [vcard, setVCard] = useState(null);

    const vcardGenerateHandler = value => {
        setVCard(value);
    };
    return (
        <>
            <header>
                <h3 className={classes.title}>Visiting Card generator</h3>
            </header>
            <section className={classes.container}>
                <div className={classes["left-half"]}>
                    <DataForm onVCardGenerate={vcardGenerateHandler} />
                </div>
                <div className={classes["right-half"]}>
                    <DisplayBoard userData={vcard} />
                </div>
            </section>
        </>
    );
}

export default App;
