export function getQueryObject(url?: any) {
  url = url == null ? window.location.href : url;
  let search = url.substring(url.indexOf('?') + 1);
  // 处理search中还有？号的情况
  if (search.indexOf('?') > -1) {
    search = search.replace('?', '&');
  }
  const obj: any = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs: string, $1: string, $2: string) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });

  return obj;
}

export function getUserAgent() {
  const isWeb = /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);
  return isWeb;
}
