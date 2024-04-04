"use client"

import { chain, client } from "@/utils/constants"
import { ConnectButton, useActiveAccount } from "thirdweb/react"
import Hero from "@/components/Hero"
import Header from "@/components/Header"


const Login: React.FC = () => {
    const account = useActiveAccount()
    return (
        <div>
            {account ? (
                <>
                    <Header />
                    <Hero />
                </>
            ) : (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh"
                }}>
                    <ConnectButton
                        client={client}
                        chain={chain} />
                </div>
            )}
        </div>
    )
}

export default Login