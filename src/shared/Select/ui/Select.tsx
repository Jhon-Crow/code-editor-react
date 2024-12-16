

// type TOption<T extends string> = {value: T, title: string}
interface SelectProps<T extends string>{
    // options: TOption<T>[];
    options: T[];
    value: T;
    onChange: (value: T)=> void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {options, value, onChange} = props;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as T);
    };

    return (
        <select
            value={value}
            onChange={handleChange}
        >
            {options.map((opt, index: number) => <option value={opt} key={index}>{opt}</option>)}
        </select>
    );
};