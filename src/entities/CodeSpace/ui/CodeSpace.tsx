import {useCallback} from 'react';
import CodeMirror, {Extension, ReactCodeMirrorProps} from '@uiw/react-codemirror';

interface CodeSpaceProps extends ReactCodeMirrorProps{
    language: () => Extension;
    setValue: (val: string) => void;
}

export const CodeSpace = (props: CodeSpaceProps) => {
    const { language, value, setValue, ...otherProps } = props;

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