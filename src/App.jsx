import s from "./App.module.css";
import Product from "./Components/Product/Product";
import React, {useState, Suspense, useEffect} from "react";
import filtersStyle from './Components/Filters/Filters.module.css'
import Header from "./Components/Header/Header";

const Filters = React.lazy(() => import("./Components/Filters/Filters"));

const change = (showFilters, setGridTemplateAreas) => {
    if (window.innerWidth > 480) {
        if (window.innerWidth > 600) {
            setGridTemplateAreas(`"h h"\n"${showFilters ? 'f' : 'p'} p"`);
        } else {
            setGridTemplateAreas(`"h h"\n"${showFilters ? 'f f' : 'p p'}"\n"p p"`);
        }
    } else {
        if (showFilters) {
            setGridTemplateAreas('"h h"\n"f f"\n"p p"');
        } else {
            setGridTemplateAreas('"h h"\n"p p"');
        }
    }
}

const App = () => {
    const [showFilters, setShowFilters] = useState(window.innerWidth > 600);
    const [gridTemplateAreas, setGridTemplateAreas] = useState('');

    useEffect(() => {
        change(showFilters, setGridTemplateAreas);
    }, [showFilters, setGridTemplateAreas])
    useEffect(() => {
        const setGrid = () => {
            change(showFilters, setGridTemplateAreas);
        }
        window.addEventListener("resize", setGrid)
        return () => {
            window.removeEventListener("resize", setGrid);
        }
    });

    return (
        <div style={{gridTemplateAreas}} className={s.app}>
            <Header/>
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
