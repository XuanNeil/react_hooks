import {useContext} from "react";
import {ThemeContext} from "src/hooks/useContext/themeContext/themeContext";

export const useThemeContext = () => {
    return useContext(ThemeContext);
};