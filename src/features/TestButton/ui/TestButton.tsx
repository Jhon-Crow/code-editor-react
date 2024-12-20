import {PostRequest} from "@/features/TestButton/api/TestApi.ts";
import {memo, useCallback, useState} from "react";
import {ApiResponseObjInterface} from "@/entities/ApiResponseText/type/ApiResponseObjInterface.ts";

interface TestButtonProps {
    code: string;
    language: string;
    setApiRes: (res: ApiResponseObjInterface) => void;
    className?: string;
}

export const TestButton = memo((props: TestButtonProps) => {
    const [disabled, setDisabled] = useState(false);
    const {code, language, setApiRes, className} = props;

    const onClickHandler = useCallback(async () => {
        setDisabled(true);
        const res = await PostRequest({language, code});
        setApiRes(res);
        setDisabled(false);
    }, [code, language, setApiRes]);

    return (
        <button
            disabled={disabled}
            onClick={onClickHandler}
            className={`
                        max-h-fit
            disabled:opacity-60
            bg-green-800 text-green-950 rounded-md p-2
            hover:bg-green-700 hover:shadow-green-300 shadow-md hover:text-white transition duration-200
            ${className}
            `}
        >
            Test
        </button>
    );
},  () => true);