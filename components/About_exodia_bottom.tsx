import React from 'react';

const AboutExodiaBottom: React.FC = () => {
  return (
    <div className="AboutExodia_bottom flex flex-col p-8">
      <p className="AboutExodia_bottom_heading text-[#7d7e80] text-5xl font-normal tracking-[2.5px] text-center mb-4">
        FlashBack
      </p>
      <div className="AboutExodia_years flex gap-[15px] justify-center mb-[15px] rounded-[10px]">
        <div className="year" data-year="2017">2017</div>
        <div className="year" data-year="2018">2018</div>
        <div className="year" data-year="2019">2019</div>
        <div className="year" data-year="2023">2023</div>
        <div className="year" data-year="2024" id="AboutExodia_actYear">2024</div>
      </div>
      <div className="ytVideo aspect-[16/9] w-full text-center flex items-center justify-center mt-5 mb-2.5">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WvwU3scKoAI?si=0h1GsFznPIm6EBsZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          id="ytFrame"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutExodiaBottom;