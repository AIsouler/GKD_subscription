import path from 'node:path';
import qiniu from 'qiniu';
import 'dotenv/config';

const {
  QINUI_ACCESS_KEY,
  QINUI_SECRET_KEY,
  QINIU_BUCKET_NAME,
  QINIU_CDN_ORIGIN,
} = process.env;

const mac = new qiniu.auth.digest.Mac(QINUI_ACCESS_KEY, QINUI_SECRET_KEY);
export const uploadFile = async (
  filePath: string,
  fileKey: string | ((filePath: string) => string) = path.basename(filePath),
) => {
  const key = typeof fileKey == 'string' ? fileKey : fileKey(filePath);
  const putPolicy = new qiniu.rs.PutPolicy({
    scope: QINIU_BUCKET_NAME + `:` + fileKey,
  });
  const uploadToken = putPolicy.uploadToken(mac);

  const formUploader = new qiniu.form_up.FormUploader();
  const putExtra = new qiniu.form_up.PutExtra();

  const respInfo = await new Promise<{
    status: number;
    headers: Record<string, string>;
    size: number;
    data: { hash: string; key: string };
  }>((res, rej) => {
    formUploader.putFile(
      uploadToken,
      key,
      filePath,
      putExtra,
      (respErr, respBody, respInfo) => {
        if (respErr) {
          return rej(respErr);
        }
        res(respInfo);
      },
    );
  });
  if (respInfo.status != 200) {
    console.error(respInfo);
    throw new Error(`upload file failed`);
  }
  return respInfo.data;
};

const cdnManager = new qiniu.cdn.CdnManager(mac);
export const refreshUrls = async (...keys: string[]) => {
  if (keys.length == 0) return;
  const urls = keys.map((s) => QINIU_CDN_ORIGIN + `/` + s);
  const refreshResult = await new Promise<{
    taskIds: Record<string, string>;
    urlQuotaDay: number;
    urlSurplusDay: number;
    dirQuotaDay: number;
    dirSurplusDay: number;
  }>((res, rej) => {
    cdnManager.refreshUrls(urls, (err, _, respInfo) => {
      if (err) {
        return rej(err);
      }
      if (respInfo.statusCode != 200) {
        console.error(respInfo);
        return rej(new Error(`refreshUrls failed`));
      }
      res(respInfo.data);
    });
  });
  return refreshResult;
};
