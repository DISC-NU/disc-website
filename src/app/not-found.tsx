import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="space-y-6 text-center w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-4">
          <pre className="text-[#40B4B4] whitespace-pre text-[0.5rem] sm:text-xs md:text-sm lg:text-base font-bold">
            {`


███╗   ██╗ ██████╗ ████████╗
████╗  ██║██╔═══██╗╚══██╔══╝
██╔██╗ ██║██║   ██║   ██║   
██║╚██╗██║██║   ██║   ██║   
██║ ╚████║╚██████╔╝   ██║   
╚═╝  ╚═══╝ ╚═════╝    ╚═╝   
                                  
                    
            `}
          </pre>
          <pre className="text-[#40B4B4] whitespace-pre text-[0.5rem] sm:text-xs md:text-sm lg:text-base font-bold">
            {`

███████╗ ██████╗ ██╗   ██╗███╗   ██╗██████╗ 
██╔════╝██╔═══██╗██║   ██║████╗  ██║██╔══██╗
█████╗  ██║   ██║██║   ██║██╔██╗ ██║██║  ██║
██╔══╝  ██║   ██║██║   ██║██║╚██╗██║██║  ██║
██║     ╚██████╔╝╚██████╔╝██║ ╚████║██████╔╝
╚═╝      ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════
                                               
            `}
          </pre>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          oops! seems like this page doesn&apos;t exist. how did you get here?
        </p>
        <Link
          href="/"
          className="inline-block text-[#40B4B4] hover:text-[#40B4B4]transition-colors text-sm sm:text-base"
        >
          take me back home
        </Link>
      </div>
    </div>
  );
}
