import "./content.css";

import {useThemeContext} from "src/hooks/useContext/useThemeContext";

export const Content = (): JSX.Element => {
    const {theme, handleChangeTheme} = useThemeContext();

    return (
        <div className={theme}>
            <button onClick={handleChangeTheme}>Click Me!</button>
            <p>Content</p>
        </div>
    );
};