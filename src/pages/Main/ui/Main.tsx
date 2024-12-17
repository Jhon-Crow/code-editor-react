import {go} from '@codemirror/lang-go';
import {useState} from "react";
import {python} from "@codemirror/lang-python";
import {Select} from "@/shared/Select";
import {CodeSpace} from "@/entities/CodeSpace";
import {Extension} from "@uiw/react-codemirror";
import {TaskText} from "@/entities/TaskText";
import {TestButton} from "@/features/TestButton";
import {ApiResponseText} from "@/entities/ApiResponseText";
import {ApiResponseObjInterface} from "@/entities/ApiResponseText/type/ApiResponseObjInterface.ts";


type TLanguage = 'go' | 'python';
type Ttheme = 'dark' | 'light';

interface MainProps {
    theme?: Ttheme;
}

export const Main = (props: MainProps) => {
    const {theme = 'dark'} = props;
    const [code, setCode] = useState(
        "package main\n" +
        "\n" +
        "import (\n" +
        "    \"fmt\"\n" +
        ")\n" +
        "\n" +
        "func Fibonacci(n int) []int {\n" +
        "    if n <= 0 {\n" +
        "        return []int{}\n" +
        "    }\n" +
        "    if n == 1 {\n" +
        "        return []int{0}\n" +
        "    }\n" +
        "    if n == 2 {\n" +
        "        return []int{0, 1}\n" +
        "    }\n" +
        "\n" +
        "    fib := make([]int, n)\n" +
        "    fib[0] = 0\n" +
        "    fib[1] = 1\n" +
        "\n" +
        "    for i := 2; i < n; i++ {\n" +
        "        fib[i] = fib[i-1] + fib[i-2]\n" +
        "    }\n" +
        "\n" +
        "    return fib\n" +
        "}"
    );
    const langNamesArr: TLanguage[] = ['go', 'python'];
    const languagesMap: Record<TLanguage, () => Extension> = {
        'go': go,
        'python': python
    };
    const [selectedLang, setSelectedLang] = useState(langNamesArr[0]);
    const [apiRes, setApiRes] = useState<ApiResponseObjInterface>();
    return (
        <main
            className={`${theme === 'dark' ? 'bg-slate-800' : null} 
            flex flex-col min-h-screen justify-start gap-1.5
            p-2`}
        >
                <TaskText
                    theme={theme}
                    header="Fibanaccie nums"
                    description="Необходимо реализовать функцию, которая будет
                    генерировать последовательность Фибоначчи на основе заданного количества чисел.
                    Последовательность Фибоначчи — это ряд чисел, в котором каждое число (после первых двух) является суммой двух предыдущих. Первые два числа в последовательности равны 0 и 1. То есть, последовательность выглядит следующим образом:
                    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..."
                />

            <CodeSpace
                maxHeight='60vh'
                value={code}
                setValue={setCode}
                language={languagesMap[selectedLang]}
                theme={theme}
            />
            <ApiResponseText res={apiRes}/>
            <div className='flex self-end gap-2 align-middle'>
                <Select
                    className='w-fit'
                    theme={theme}
                    onChange={setSelectedLang}
                    value={selectedLang}
                    options={langNamesArr}
                />
                <TestButton
                    className='self-end'
                    language={selectedLang}
                    code={code}
                    setApiRes={setApiRes}
                />
            </div>
        </main>
    );
};

