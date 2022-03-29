import { getProviders, signIn as signInToProvider } from "next-auth/react";

function signIn({ providers }: any) {
    return <div className="flex flex-col items-center p-20">
        {Object.values(providers).map((provider: any) => (
            <div key={provider.name}>
                <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => {
                    signInToProvider(provider.id, {callbackUrl:"/"});
                }}>
                    SignIn with {provider.name}
                </button>
            </div>
        ))}
    </div>
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}

export default signIn;