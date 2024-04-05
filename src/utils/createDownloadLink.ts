const MIMETypes = {
  css: "text/css",
  csv: "text/csv",
  html: "text/html",
  jpg: "image/jpeg",
  js: "text/javascript",
  json: "text/json",
  jsx: "text/javascript",
  png: "image/png",
  svg: "image/svg+xml",
  ts: "text/javascript",
  tsx: "text/javascript",
  txt: "text/plain",
  webp: "image/webp",
};

export type DownloadType = keyof typeof MIMETypes;

/**
 * Creates a download link for the given data.
 * @param content
 * @param type
 * @returns
 */
export function createDownloadLink(
  data: string,
  type: DownloadType = "txt",
): string {
  return URL.createObjectURL(new Blob([data], { type: MIMETypes[type] }));
}
