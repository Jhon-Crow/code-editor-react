import {go} from '@codemirror/lang-go';
import {useState} from "react";
import {python} from "@codemirror/lang-python";
import {Select} from "@/shared/Select";
import {CodeSpace} from "@/entities/CodeSpace";
import {Extension} from "@uiw/react-codemirror";


type TLanguage = 'go' | 'python';

export const Main = () => {
    const langNamesArr: TLanguage[] = ['go', 'python'];
    const languagesMap: Record<TLanguage, () => Extension> = {
        'go': go,
        'python': python
    };
    const [selectedLang, setSelectedLang] = useState(langNamesArr[0]);
    return (
        <main>
            <Select onChange={setSelectedLang} value={selectedLang} options={langNamesArr}/>
            <CodeSpace
                language={languagesMap[selectedLang]}
                theme='dark'
            />
        </main>
    );
};

