

interface TaskTextProps {
    theme?: 'dark' | 'light';
    header?: string;
    description?: string;
}

export const TaskText = (props: TaskTextProps) => {
    const {
        header,
        description,
        theme = 'dark'
    } = props;
    return (
        <div
            className={`p-6 bg-${theme === 'dark' ? 'slate-900' : 'white'} rounded-md shadow-lg`}
        >
            {header && <h1
                className={`text-2xl font-bold text-gray-${theme === 'dark' ? 300 : 800} mb-4`}
            >{header}</h1>}
            {description && <p
                className={`text-gray-${theme === 'dark' ? 400 : 600} text-base leading-relaxed`}
            >{description}</p>}
        </div>
    );
};