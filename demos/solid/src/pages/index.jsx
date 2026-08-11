import { Layout } from "../layouts/Layout"
export default function App(){
    return (
    <Layout
        sidebar={[
            { label: "Home", href: "/" },
            { label: "Documentation", href: "/docs" },
            { label: "Examples", href: "/examples" },
            { label: "About", href: "/about" },
        ]}
    >
    <h1>Documentation</h1> 
    <p>Welcome to the documentation.</p>
    </Layout>
    )
}