import { ApiResponseObjInterface } from '../type/ApiResponseObjInterface.ts';

interface ApiResponseProps {
    res?: ApiResponseObjInterface;
}

export const ApiResponseText = (props: ApiResponseProps) => {
    const { res } = props;

    const bgClass = res?.status === 'success' ? 'bg-green-500 bg-opacity-20' : 'bg-red-500 bg-opacity-30';
    const textClass = res?.status === 'success' ? 'text-green-800' : 'text-red-800';
    const shadowClass = res?.status === 'success' ? 'shadow-green-200 ' : 'shadow-red-200';

    return res && (
        <div className={`p-4 rounded-md ${bgClass} ${shadowClass} shadow-lg`}>
            {/*  todo  +svg*/}

            <h1 className={`text-lg font-bold ${textClass}`}>{res.status}</h1>
            <p className={textClass}>{res.status === 'success' ? res.output : res.error}</p>
        </div>
    );
};
