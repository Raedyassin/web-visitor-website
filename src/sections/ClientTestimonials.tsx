
import { reviews } from "@/constants/constaints";
import { Star } from "lucide-react";

export default function ClientTestimonials() {
  return (
    <section className="min-h-screen px-15 overflow-hidden">
      <div className="flex flex-col items-center gap-5 px-10 py-10 mb-3">
        <p className="text-5xl font-bold">
          Client <span className="text-lime-400">Testimonials</span>
        </p>
        <p>Do not just take our word for it </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className=" border-2 rounded-2xl p-10
          "
          >
            <div className="flex flex-row">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="fill-lime-400" />
              ))}
            </div>
            <p className="my-4">{review.review}</p>
            <div className="h-1 w-full bg-lime-400" />
            <p className="mt-4">- {review.name}</p>
            <p>{review.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
