import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { go } from '@codemirror/lang-go';

export const CodeSpace = () => {
    const [value, setValue] = React.useState("package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"hello world!\")\n}");

    const onChange = React.useCallback((val) => {
        setValue(val);
    }, []);

    return (
        <CodeMirror
            value={value}
            height="200px"
            extensions={[go()]} // Указываем язык Go
            onChange={onChange}
        />
    );
}

export default CodeSpace;
