interface SelectProps<T extends string>{
    theme?: 'dark' | 'light',
    options: T[];
    value: T;
    onChange: (value: T)=> void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        theme = 'dark',
        options,
        value,
        onChange
    } = props;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as T);
    };

    return (
        <select
            className={`text-center p-2 bg-${theme === 'dark' ? 'slate-900' : 'white'} rounded-md shadow-lg text-gray-${theme === 'dark' ? 300 : 800}`}
            value={value}
            onChange={handleChange}
        >
            {options.map((opt, index: number) => <option value={opt} key={index}>{opt}</option>)}
        </select>
    );
};