import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'
import { BackgroundGradient } from './ui/background-gradient'

const Home_AboutSection = () => {
  return (
    <ContainerScroll titleComponent={<></>}>
    <BackgroundGradient
      className="relative rounded-[22px] bg-white dark:bg-zinc-900 w-[80vw] h-[80vh]"
<<<<<<< HEAD
      backgroundImage="/assets/background6.webp"
=======
<<<<<<< HEAD
      backgroundImage="/assets/background6.webp"
=======
      backgroundImage="/assets/background/background6.webp"
>>>>>>> b9cc671 (Your commit message)
>>>>>>> 5572e05 ( commit)
    >
      <div className="background-about rounded-[22px] h-full">
        <div className="glasomorphic-about p-32 rounded-[22px]">
          <p className="harry-text-Medium">About Exodia</p>
          <p className="harry-text-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus et minus impedit facilis. Illo neque libero odio
            eveniet optio laborum voluptate culpa temporibus architecto
            autem cupiditate eos, facilis, earum natus. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Odio nulla
            animi, ullam temporibus voluptatum eos doloremque,
            laboriosam exercitationem molestias similique velit corrupti
            modi alias dolore,
          </p>
        </div>
      </div>
    </BackgroundGradient>
  </ContainerScroll>
  )
}

export default Home_AboutSection