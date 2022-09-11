import React, {createContext, ReactNode, useCallback, useState} from "react";

interface IThemeContextProps {
    theme?: string,
    handleChangeTheme?: () => void;
}

const ThemeContext = createContext<IThemeContextProps>({});

interface IThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({children}) => {

    const [theme, setTheme] = useState<string>("dark");
    const handleChangeTheme = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme]);

    const initialValue = {
        theme,
        handleChangeTheme
    };

    return (
        <ThemeContext.Provider value={initialValue}>
            {children}
        </ThemeContext.Provider>
    );
};
export {
    ThemeContext,
    ThemeProvider
};