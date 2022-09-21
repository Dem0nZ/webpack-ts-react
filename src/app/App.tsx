import {Link} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss';
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>main</Link>
            <Link to='/about'>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <AppRouter/>
            </Suspense>
        </div>
    );
};

export default App;