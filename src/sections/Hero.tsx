import Image from "next/image";
import Header from "./Header";
import Button from "../components/Button";

export default function Hero() {

  return (
    <div
      className="min-h-[90vh] w-full relative
      
    "
      // min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden
    >
      <div className="grid grid-cols-2  ">
        <div className="pl-15 flex flex-col mt-20 space-y-5">
          {/* <h1>Your Business Deserves a World-Class Online Home</h1> */}
          <h1 className="text-6xl font-bold ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-lime-400">
              Build Your Dream Website
            </span>{" "}
            With Expert Engineering
          </h1>
          <h2 className="text-xl font-semibold">
            Don't Settle for a Template. Get a Custom-Built Digital Experience
          </h2>
          <p className="text-lg">
            High-quality{" "}
            <span
              className="
            bg-cyan-500/10 border border-cyan-500/30 
            rounded-full px-3 py-1 backdrop-blur-sm
            text-cyan-500 text-sm font-semibold"
            >
              landing pages
            </span>{" "}
            <span
              className="
            bg-cyan-500/10 border border-cyan-500/30 
            rounded-full px-3 py-1 backdrop-blur-sm
            text-cyan-500 text-sm font-semibold"
            >
              e-commerce
            </span>{" "}
            <span
              className="
            bg-cyan-500/10 border border-cyan-500/30 
            rounded-full px-3 py-1 backdrop-blur-sm
            text-cyan-500 text-sm font-semibold"
            >
              websites
            </span>{" "}
            and apps built with modern full-stack technologies with
            SEO-optimized and Mobile-ready
          </p>

          <span className="mt-10">
            <Button href="/#contact">Start Your Project Now</Button>
          </span>
        </div>
        <div className="relative">
          <div
            className="z-0 animate-pulse absolute inset-0 rounded-full
            bg-blue/20 blur-xl "
          ></div>
          {/* <div className="">
            <div className="z-9 absolute animate-pulse left-1/2 top-10 rounded-full size-15 bg-lime-200 blur"></div>
            <div className="z-9 absolute animate-pulse left-1/2 bottom-4 rounded-full size-15 bg-lime-200 blur"></div>
            <div className="z-9 absolute animate-pulse right-20 top-70 rounded-full size-15 bg-lime-200 blur"></div>
            <div className="z-9 absolute animate-pulse left-20 top-50 rounded-full size-15 bg-lime-200 blur"></div>
          </div> */}
          <Image
            className="z-10 relative"
            alt="hero"
            src="/hero-side.png"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );

}


          // <div
          //   className={`relative transition-all duration-1000 delay-300 transform`}
          // >
          //   <div className="relative">
          //     {/* Decorative Elements */}
          //     <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          //     <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse delay-700"></div>

          //     {/* Main Image Container */}
          //     <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-1 border border-purple-500/20">
          //       <div className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm">
          //         {/* Browser mockup */}
          //         <div className="bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
          //           <div className="bg-slate-700 px-4 py-3 flex items-center space-x-2">
          //             <div className="flex space-x-2">
          //               <div className="w-3 h-3 rounded-full bg-red-500"></div>
          //               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          //               <div className="w-3 h-3 rounded-full bg-green-500"></div>
          //             </div>
          //             <div className="flex-1 bg-slate-600 rounded px-3 py-1 text-xs text-gray-400">
          //               webvisitor.dev
          //             </div>
          //           </div>
          //           <div className="bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 p-8 min-h-[400px] flex flex-col items-center justify-center">
          //             {/* Animated code lines effect */}
          //             <div className="space-y-4 w-full max-w-md">
          //               <div className="h-4 bg-purple-500/30 rounded animate-pulse w-3/4"></div>
          //               <div className="h-4 bg-blue-500/30 rounded animate-pulse delay-100 w-full"></div>
          //               <div className="h-4 bg-pink-500/30 rounded animate-pulse delay-200 w-5/6"></div>
          //               <div className="h-4 bg-purple-500/30 rounded animate-pulse delay-300 w-2/3"></div>
          //               <div className="my-8 text-center">
          //                 <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
          //                   <Zap className="w-12 h-12 text-white" />
          //                 </div>
          //                 <p className="text-white font-bold text-2xl mt-4">
          //                   Your Website
          //                 </p>
          //                 <p className="text-purple-300">Built to Perfection</p>
          //               </div>
          //               <div className="h-4 bg-blue-500/30 rounded animate-pulse delay-400 w-4/5"></div>
          //               <div className="h-4 bg-pink-500/30 rounded animate-pulse delay-500 w-full"></div>
          //               <div className="h-4 bg-purple-500/30 rounded animate-pulse delay-600 w-3/5"></div>
          //             </div>
          //           </div>
          //         </div>

          //         {/* Floating badges */}
          //         <div className="absolute -right-4 top-20 bg-white rounded-lg shadow-xl p-3 animate-bounce">
          //           <p className="text-xs text-gray-600 font-semibold">
          //             Next.js
          //           </p>
          //           <p className="text-2xl font-bold text-purple-600">⚡</p>
          //         </div>
          //         <div className="absolute -left-4 bottom-32 bg-white rounded-lg shadow-xl p-3 animate-bounce delay-300">
          //           <p className="text-xs text-gray-600 font-semibold">React</p>
          //           <p className="text-2xl font-bold text-blue-600">⚛️</p>
          //         </div>
          //       </div>
          //     </div>

          //     {/* Stats card */}
          //     <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 min-w-[280px]">
          //       <div className="flex items-center justify-around">
          //         <div className="text-center">
          //           <p className="text-2xl font-bold text-purple-600">99%</p>
          //           <p className="text-xs text-gray-600">Performance</p>
          //         </div>
          //         <div className="w-px h-10 bg-gray-300"></div>
          //         <div className="text-center">
          //           <p className="text-2xl font-bold text-pink-600">14</p>
          //           <p className="text-xs text-gray-600">Days Delivery</p>
          //         </div>
          //         <div className="w-px h-10 bg-gray-300"></div>
          //         <div className="text-center">
          //           <p className="text-2xl font-bold text-blue-600">100%</p>
          //           <p className="text-xs text-gray-600">Satisfaction</p>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>;
