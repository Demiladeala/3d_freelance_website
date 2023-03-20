import { motion } from 'framer-motion'
import Tilt from 'react-tilt'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, owner, star, tags, image, source_code_link}) => {
   return (
      <motion.div variants={fadeIn("up", "string", index * 0.2, 0.75)}>
        <Tilt
        options={{
          max: 45,
          scale:1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full"
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
              onClick={() => window.open
              (source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
          </div>

          <div className='mt-5 flex justify-between items-baseline mx-2'>
              <h3 className='text-white font-bold'>{name}</h3>
              <p className='text-secondary'>{star}</p>
          </div>
          <div className='mx-2 text-secondary mt-2'>
            <h2 >{owner}</h2>
          </div>
        </Tilt>
      </motion.div>
   )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Available for projects
      </p>
      <h2 className={styles.sectionHeadText}>
        Hire Freelancers
      </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Learn about the freelancers' past projects. Based on evaluations and ratings, hire low-cost freelancers, 
          remote employees, and agencies.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");