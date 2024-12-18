
interface TaskTextProps {
    header?: string;
    description?: string;
}

export const TaskText = (props: TaskTextProps) => {
    const {
        header,
        description,
    } = props;
    return (
        <div
            className="p-6 dark:bg-slate-900 bg-white rounded-md shadow-lg"
        >
            {header && <h1
                className='text-2xl font-bold dark:text-gray-300 text-gray-800 mb-4'
            >{header}</h1>}
            {description && <p
                className='dark:text-gray-400 text-gray-600 text-base leading-relaxed'
            >{description}</p>}
        </div>
    );
};