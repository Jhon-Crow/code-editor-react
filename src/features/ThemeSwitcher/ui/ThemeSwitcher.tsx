import Sun from '../icons/sun';
import Moon from '../icons/moon';
import {memo, useCallback, useState} from "react";

const root = document.getElementById('root');

export const ThemeSwitcher = memo(() => {
    const [isDark, setIsDark] = useState(false);

    const themeToggle = useCallback(() => {
        if (root){
            root.classList.toggle('dark');
            setIsDark(root.classList.contains('dark'));
        }
    }, [])

    const preventKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.currentTarget.blur();
    }, [])

    return (
        <button
            className='rounded-full w-9 h-9 self-start'
            onKeyDown={preventKeyDown}
                onClick={themeToggle}>
            {isDark ? <Moon /> : <Sun />}
        </button>
    );
});
