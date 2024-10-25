import { useEffect, useState } from "react";
import { type DownloadType, createDownloadLink } from "src/utils/createDownloadLink";

/**
 * Returns a download link for the given data. The download link will be
 * invalidated when the parameters change or the component is unmounted.
 *
 * @param data The data to download
 * @param type The type of the data
 *
 * @remarks
 * This hook adds overhead to the {@linkcode createDownloadLink} function, but
 * is necessary to prevent memory leaks. This is because object URLs created
 * with {@linkcode URL.createObjectURL} are tied to the document in which they
 * are created. If the parameters change or the component is unmounted without
 * revoking the old URL, a memory leak will occur. This hook addresses this
 * issue.
 */
export function useDownloadLink(data: string, type: DownloadType = "txt") {
  const [downloadLink, setDownloadLink] = useState(() =>
    createDownloadLink(data, type),
  );

  useEffect(() => {
    const newLink = createDownloadLink(data, type);
    setDownloadLink(newLink);
    return () => URL.revokeObjectURL(newLink);
  }, [data, type]);

  return downloadLink;
}
