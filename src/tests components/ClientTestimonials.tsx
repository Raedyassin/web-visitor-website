import { reviews } from "@/lib/constaints";
import { Star } from "lucide-react";

export default function ClientTestimonials() {
  return (
    <section className="min-h-screen px-15 overflow-hidden">
      <div className="flex flex-col items-center gap-5 px-10 py-10 mb-3">
        <p className="text-5xl font-bold">
          Client{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Testimonials
          </span>
        </p>
        <p className="text-gray-400">Do not just take our word for it </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className=" border-2 border-gray-400/50 rounded-2xl p-10
            backdrop-blur-xl bg-slate-900/50 shadow-[1px_10px_10px_1px_rgba(34,211,238,0.4)] 
          "
          >
            <div className="flex flex-row">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="fill-cyan-400" />
              ))}
            </div>
            <p className="my-4 text-gray-300">{review.review}</p>
            <div className="h-1 w-full bg-cyan-400" />
            <p className="mt-4">- {review.name}</p>
            <p>{review.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
