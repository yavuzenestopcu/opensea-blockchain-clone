import { createThirdwebClient } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY

export const client = createThirdwebClient({
    // clientId: "2637736765b63b924164e4b50a7b86f0",
    secretKey: "HFeyJgKAqoTkXNlp7di0CLh-RsjhW4LGz2VgghAWPRvrnXemTcSv6HdmED9limKkZdHTeGkxovZuqTF85z1Wmg"
})

export const chain = sepolia