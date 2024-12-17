// lets generate agora education token

export const generateEducationToken = (userUuid: string, userName: string, roomUuid: string) => {
  const appId = process.env.NEXT_PUBLIC_AGORA_APP_ID;
  const appCertificate = process.env.NEXT_PUBLIC_AGORA_APP_CERTIFICATE;
  const expirationTimeInSeconds = 3600;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const expirationTimestamp = currentTimestamp + expirationTimeInSeconds;
};

  const appId = process.env.NEXT_PUBLIC_AGORA_APP_ID;
