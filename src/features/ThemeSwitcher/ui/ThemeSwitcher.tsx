import Sun from '../icons/sun';
import Moon from '../icons/moon';
import {useState} from "react";

const root = document.getElementById('root');

export const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useState(false);

    const themeToggle = () => {
        if (root){
            root.classList.toggle('dark');
            setIsDark(root.classList.contains('dark'));
        }
    }

    return (
        <button
            className='rounded-full w-9 h-9 self-start'
            onKeyDown={(e) => e.preventDefault()}
                onClick={themeToggle}>
            {isDark ? <Moon /> : <Sun />}
        </button>
    );
};
