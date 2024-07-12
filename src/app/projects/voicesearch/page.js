import Link from "next/link";
import { Poppins,Inter } from "next/font/google"

const inter = Inter({
    weight:'500',
    subsets:['latin']
  })

  const poppins = Poppins({
    weight:'600',
    subsets:['latin']
  }) 

export default function VoiceSearch() {
    return(
        <>
            <div className={`${inter.className} mx-10 max-sm:mx-5 flex justify-center flex-col`}>
                <p className={`${poppins.className} text-4xl max-sm:text-3xl my-5 border-b border-black w-fit`}>voice search</p>
                <div>
                    <video className="rounded-xl w-full h-full" src="/voicesearch.mp4" controls preload="none"></video>
                    <p className="text-2xl max-sm:text-xl border-b border-black w-fit my-3"><Link href='https://happyprajapati.github.io/voice-search/'>Visit here &#x2197;</Link></p>
                    <p className={`${poppins.className} text-3xl my-5 max-sm:text-2xl border-b border-black w-fit`}>About</p>
                    <p className="text-xl max-sm:text-lg">Transforming the way we interact with technology, my Node.js-based Voice Search project is at the forefront of innovation. This project seamlessly integrates cutting-edge technologies to enable users to search and interact with applications using their voice.</p>
                    <p className={`${poppins.className} text-2xl my-5 max-sm:text-xl border-b border-black w-fit`}>Key Features</p>
                    <div className="grid grid-cols-2 gap-x-3 max-sm:grid-cols-1">
                        <div className="py-2 px-3 my-3 border border-slate-700 rounded-lg shadow-lg">
                            <p className={`${poppins.className} text-xl my-2 max-sm:text-lg border-r pr-2`}>Voice Recognition</p>
                            <p className="text-xl max-sm:text-lg border-t border-black pt-2">Implementing robust voice recognition capabilities, the project understands natural language commands for an intuitive user experience.</p>
                        </div>
                        <div className="py-2 px-3 my-3 border border-slate-700 rounded-lg shadow-lg">
                            <p className={`${poppins.className} text-xl my-2 max-sm:text-lg border-r pr-2`}>Audio Processing</p>
                            <p className="text-xl max-sm:text-lg border-t border-black pt-2">Incorporating advanced audio processing techniques, the system effectively captures, analyzes, and responds to voice inputs with precision.</p>
                        </div>
                        <div className="py-2 px-3 my-3 border border-slate-700 rounded-lg shadow-lg">
                            <p className={`${poppins.className} text-xl my-2 max-sm:text-lg border-r pr-2`}> Node.js Backend</p>
                            <p className="text-xl max-sm:text-lg border-t border-black pt-2">The project leverages the power of Node.js to ensure a scalable, efficient, and high-performance backend, catering to the demands of real-time voice processing.</p>
                        </div>
                    </div>
                    <p className={`${poppins.className} text-2xl my-5 max-sm:text-xl border-b border-black w-fit`}>Tech Stack</p>
                    <ul className="list-disc mb-5">
                        <li className="text-xl ml-5 max-sm:text-lg">React JS</li>
                        <li className="text-xl ml-5 max-sm:text-lg">Node JS</li>
                        <li className="text-xl ml-5 max-sm:text-lg">Speech Recognition API</li>
                        <li className="text-xl ml-5 max-sm:text-lg">Google Bard API</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
