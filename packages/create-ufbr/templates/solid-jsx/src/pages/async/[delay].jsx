import Delay from "@components/Delay";

export default function Page({ delay = 1000} = {} ){
    return (
        <Delay delay={delay} fallback={<p>Loading...</p>}>
         <p>This appears after {delay} ms.</p>
        </Delay>
    )
}