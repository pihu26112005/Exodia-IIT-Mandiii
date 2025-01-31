import Marquee from "@/components/animata/container/marquee";
 
interface Testimonial {
  name: string;
  image: string;
  description: string;
}
 
interface TestimonialProps {
  data: Testimonial[];
}
 
function TestimonialCard({
  testimonial: { image, name, description },
}: {
  testimonial: Testimonial;
}) {
  return (
    <div
  className="flex h-44 w-56 overflow-hidden border-[3px] border-gold bg-background dark:border-gold-700 relative group"
  key={name}
>

  <img src={image} alt={name} className="h-full w-full object-cover rounded-none" />

  <div
    className="absolute inset-0 flex items-center justify-center px-4 py-2 bg-black bg-opacity-0 transition-opacity duration-300 opacity-0 group-hover:opacity-60 group-hover:bg-opacity-60"
    style={{
      transition: 'opacity 0.3s ease-in-out, background-color 0.3s ease-in-out',
    }}
  >
    <span
      className="block text-lg font-bold text-white opacity-0 group-hover:opacity-100"
    >
      {name}
    </span>
  </div>
</div>

  );
}
 
export default function ScrollingTestimonials({ data }: TestimonialProps) {
  return (
    <div className="w-full">
      <Marquee className="[--duration:25s]" pauseOnHover applyMask={false}>
        {data.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Marquee>
 
      <Marquee reverse className="[--duration:25s]" pauseOnHover applyMask={false}>
        {data.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Marquee>
    </div>
  );
}