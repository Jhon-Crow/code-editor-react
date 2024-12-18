export const codeEditorInitialState =
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
    "}";