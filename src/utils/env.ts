export function getAppEnvConfig() {
  // 在生产过程中，这些env变量被静态地替换。因此，必须始终使用完整的静态字符串引用它们。例如，像import.meta这样的动态密钥访问。env[key]不起作用。
  // const ENV = (import.meta.env as unknown) as GlobalEnvConfig;
  const ENV = import.meta.env as unknown as any;
  const { VITE_BASE_API, VITE_PREFIXURL } = ENV;

  return {
    VITE_BASE_API,
    VITE_PREFIXURL,
  };
}
