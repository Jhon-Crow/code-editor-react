interface SelectProps<T extends string>{
    options: T[];
    value: T;
    onChange: (value: T)=> void;
    className?: string;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        options,
        value,
        className,
        onChange
    } = props;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as T);
    };

    return (
        <select
            className={`
            max-h-fit           
            text-center p-2 
            dark:bg-slate-900 bg-white
            rounded-md shadow-lg 
            dark:text-gray-300 text-gray-800
            ${className}
            `}
            value={value}
            onChange={handleChange}
        >
            {options.map((opt, index: number) => <option value={opt} key={index}>{opt}</option>)}
        </select>
    );
};