import {useCallback, useState} from 'react';
import CodeMirror, {Extension, ReactCodeMirrorProps} from '@uiw/react-codemirror';

interface CodeSpaceProps extends ReactCodeMirrorProps{
    language: () => Extension;
}

export const CodeSpace = (props: CodeSpaceProps) => {
    const { language, ...otherProps } = props;
    const [value, setValue] = useState(
        "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"hello world!\")\n}"
    );

    const onChange = useCallback((val: string) => {
        setValue(val);
    }, []);

    return (
        <CodeMirror
            value={value}
            height="100%"
            extensions={[language()]}
            onChange={onChange}
            {...otherProps}
        />
    );
}