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

export const Main = () => {
    const [code, setCode] = useState(
        "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"hello world!\")\n}"
    );
    const langNamesArr: TLanguage[] = ['go', 'python'];
    const languagesMap: Record<TLanguage, () => Extension> = {
        'go': go,
        'python': python
    };
    const [selectedLang, setSelectedLang] = useState(langNamesArr[0]);
    const [apiRes, setApiRes] = useState<ApiResponseObjInterface>();
    return (
        <main>
            <TaskText
                theme='dark'
                header="Fibanaccie nums"
                description="Необходимо реализовать функцию, которая будет
                    генерировать последовательность Фибоначчи на основе заданного количества чисел.
                    Последовательность Фибоначчи — это ряд чисел, в котором каждое число (после первых двух) является суммой двух предыдущих. Первые два числа в последовательности равны 0 и 1. То есть, последовательность выглядит следующим образом:
                    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..."
            />
            <Select
                theme='dark'
                onChange={setSelectedLang}
                value={selectedLang}
                options={langNamesArr}
            />
            <CodeSpace
                value={code}
                setValue={setCode}
                language={languagesMap[selectedLang]}
                theme='dark'
            />
            <TestButton
                language={selectedLang}
                code={code}
                setApiRes={setApiRes}
            />
            <ApiResponseText res={apiRes}/>
        </main>
    );
};

