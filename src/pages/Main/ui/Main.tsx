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
import {codeEditorInitialState} from "../consts/codeEditorInitialState.ts";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";

type TLanguage = 'go' | 'python';

export const Main = () => {
    const [code, setCode] = useState(
        codeEditorInitialState
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
            className='dark:bg-slate-800 bg-gray-50
            flex flex-col min-h-screen justify-start gap-1.5
            p-2'
        >
                <TaskText
                    header="Fibanaccie nums"
                    description="Необходимо реализовать функцию, которая будет
                    генерировать последовательность Фибоначчи на основе заданного количества чисел.
                    Последовательность Фибоначчи — это ряд чисел, в котором каждое число (после первых двух) является суммой двух предыдущих. Первые два числа в последовательности равны 0 и 1. То есть, последовательность выглядит следующим образом:
                    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..."
                />

            <CodeSpace
                maxHeight='55vh'
                value={code}
                setValue={setCode}
                language={languagesMap[selectedLang]}
                theme='dark'
            />
            <ApiResponseText res={apiRes}/>
            <div className='flex justify-between'>
                <ThemeSwitcher/>
                <div className='flex self-end gap-2 align-middle'>
                    <Select
                        className='w-fit'
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
            </div>
        </main>
    );
};

