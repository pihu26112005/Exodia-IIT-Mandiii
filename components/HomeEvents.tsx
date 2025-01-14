import Link from "next/link";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import ArrowButton from "./Button";
import Home_EventsSection from "./Home_EventsSection";

export function HomeEvents() {
  return (
    <div className="box12 h-[100vh] flex justify-center items-center">
      {/* <BackgroundGradientAnimation> */}
        <div className="z-50 ">
          <div id="events" className="relative z-50  flex flex-col justify-center items-center gap-4">
            <Home_EventsSection />
            <br />
            <Link href="/events">
              <ArrowButton text='more events' />
            </Link><br /><br /><br /><br /><br />
          </div>
        </div>
      {/* </BackgroundGradientAnimation> */}
    </div>
  );
}