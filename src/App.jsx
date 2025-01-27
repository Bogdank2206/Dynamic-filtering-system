import s from "./App.module.css";
import Product from "./Components/Product/Product";
import React, {useState, Suspense} from "react";
import filtersStyle from './Components/Filters/Filters.module.css'

const Filters = React.lazy(() => import("./Components/Filters/Filters"));

const App = () => {
    console.log('App');

    const [showFilters, setShowFilters] = useState(window.screen.width > 640);
    const styles = {
        gridTemplateAreas: `"h h"\n"${showFilters ? 'f' : 'p'} p"`,
    }

    return (
        <div style={styles} className={s.app}>
            {
                showFilters
                    ? (
                        <Suspense fallback={<div className={filtersStyle.filters}>Loading...</div>}>
                            <Filters setShowFilters={setShowFilters}/>
                        </Suspense>
                    )
                    : null
            }
            <Product showFilters={showFilters} setShowFilters={setShowFilters}/>
        </div>
    )
}

export default App;
