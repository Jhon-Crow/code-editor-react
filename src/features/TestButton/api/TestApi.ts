interface PostRequestBody {
    language: string;
    code: string;
}

export const PostRequest = async (body: PostRequestBody) => {
    try {
        const responseJson = await mockedRandomResponse(JSON.stringify(body));
        return JSON.parse(responseJson);
    } catch (error) {
        console.error("Server error:", error);
        return error;
    }
}

function mockedRandomResponse(jsonReq: string): Promise<any> {
    return new Promise((resolve) => {
        const status = Math.random() * jsonReq.length * 2 >= jsonReq.length;
        setTimeout(() => {
            resolve(JSON.stringify(status ? {
                "status": "success",
                "output": "0, 1, 1, 2, 3, 5, 8, 13, 21, 34\n"
            } : {
                "status": "error",
                "error": "SyntaxError: Unexpected token"
            }));
        }, 2000);
    });
}
