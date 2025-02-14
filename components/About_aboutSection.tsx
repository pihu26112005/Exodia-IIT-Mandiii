import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { aboutNPfont, aboutNPfont11 } from '@/lib/font.utils'
import { TextRevealCard } from './text-reveal-card'

const words = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis magni, tempora porro optio neque quod vitae ad voluptas. Obcaecati beatae, accusantium dignissimos quidem commodi earum deleniti amet eveniet exercitationem nihil. Alias est consectetur non, ipsa recusandae modi atque, voluptate laboriosam provident fuga cum iure voluptatem ex dolorem dolores in nesciunt aliquid omnis velit enim totam harum. Facere deleniti cumque a? Earum accusamus adipisci optio itaque nostrum consequatur dolor esse reiciendis, repudiandae totam rem magnam voluptate culpa! Amet atque, commodi excepturi optio ipsa cumque eius odio ipsam repellat nisi harum sapiente! Totam nisi nulla harum repellat cum quam quod illo deleniti delectus quas pariatur, consequuntur ipsam dolorum error? Possimus quis laboriosam qui debitis repellat cupiditate eius repudiandae dolorem numquam, eum sequi. Quisquam, obcaecati modi. Ducimus magni quisquam temporibus aliquid natus perspiciatis quo consectetur, quae, ad unde saepe minima id fugit quaerat corrupti vel dolorem ipsam a illum in eos, reiciendis molestias! Illum libero repellendus provident ea, in consequatur est. Sit iure perferendis fugiat nam facilis quae necessitatibus repudiandae aut? Aut repudiandae eos tempore est, consequatur culpa amet. Pariatur nostrum blanditiis quis? Ullam amet et est atque magnam a maxime recusandae architecto ab pariatur voluptatibus alias officia similique, modi earum nihil. Delectus est possimus voluptate inventore soluta! Nihil deleniti impedit nam dolorem. Maiores, quis? Beatae at harum dolores aliquam numquam recusandae nam velit, cumque sequi fugit laboriosam dignissimos maxime qui nemo doloribus maiores animi, eius eos placeat amet esse ab quibusdam quisquam. Natus a nihil odio voluptate ipsum provident exercitationem odit, cum nostrum, mollitia, aliquam veritatis? Rem eum facere natus ad fugiat? Veritatis sit sequi praesentium maxime. Ab, maiores. Animi, perferendis fugiat! Quod velit dolorum asperiores! Alias rerum reprehenderit, error in cumque assumenda? Magnam sint cumque beatae fugiat quos fugit doloremque quo, itaque esse dolorum, debitis, molestias iste laudantium ex neque obcaecati?'

const About_aboutSection = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[10rem] mb-[5rem] gap-[5rem] p-0'>
      <div className={`text-gold text-[5rem] max-md:text-[4rem] max-sm:text-[3rem] max-[500px]:text-[2.5rem] ${aboutNPfont11.className}`}>
        About Exodia
      </div>

      <div className='h-[80%] w-[90%] flex justify-center items-center p-5 bg-white border-2 animate-buttonshine border-yellow-300 rounded-3xl'
        style={{ backgroundImage: 'url(/assets/about/abgxgx.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className='w-[100%] max-sm:w-[100%] p-5 max-sm:p-0 flex justify-center items-center text-center'>
        <TextGenerateEffect words={words} />
        <TextRevealCard text="" revealText={words}/>
        </div>
      </div>
    </div>
  )
}

export default About_aboutSection