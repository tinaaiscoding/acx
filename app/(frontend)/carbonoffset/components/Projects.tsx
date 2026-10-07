import projectImage1 from '@/public/images/projects-1.jpg';
import projectImage2 from '@/public/images/projects-2.jpg';
import projectImage3 from '@/public/images/projects-3.jpg';

import Project from './Project';

const Projects = () => {
  return (
    <section>
      <div className='u-container py-section-main'>
        <div>
          <div className='my-fl-6 flex flex-col gap-(--size--2rem)'>
            <h2 className='u-text-style-main text-light uppercase'>
              Carbon Offset
            </h2>

            <p className='u-text-style-h3 text-light !text-wrap'>
              Access accredited carbon offset projects from Australia and around
              the world.
            </p>
          </div>

          <div className='flex flex-col gap-(--size--3rem)'>
            <Project
              image={projectImage1}
              grade='compliance grade'
              name='Australian Carbon Credit Unit'
              text={
                <>
                  <p>
                    Issued by federal government these credits are available to
                    meet either voluntary or compliance objectives.
                  </p>

                  <p>
                    Units offered are from Savanna Burning projects where the
                    income goes to groups who carry out cool season burning of
                    savanna thus restricting high emission “hot burns” which
                    would otherwise occur during summer.
                  </p>

                  <p>
                    Alternatively, units may be from Australian energy
                    efficiency projects which have demonstrated a reduction in
                    emissions over time due to upgrades of electrical plant and
                    equipment in industrial processes.
                  </p>
                </>
              }
            />

            <Project
              image={projectImage2}
              grade='voluntary grade'
              name='Gold Standard Unit'
              text={
                <>
                  <p>
                    Voluntary market accreditation scheme which applies a
                    greater level of community consultation to projects than
                    other voluntary standards. As a result they tend to be more
                    expensive than other voluntary standards.
                  </p>

                  <p>
                    Units offered are renewable energy credits from wind farms
                    in Turkey which reduce emissions from the SW Turkish grid
                    which would otherwise use coal fired generation.
                  </p>
                </>
              }
            />

            <Project
              image={projectImage3}
              grade='voluntary grade'
              name='Verified Carbon Unit'
              text={
                <>
                  <p>
                    Verified Carbon Standard (VCS) is the most commonly traded
                    international voluntary credit. The highly liquid market
                    ensures they are also the most price competitive.
                  </p>

                  <p>
                    Units are from various renewable energy projects in India
                    which have the co-benefit of improving access to power for
                    rural populations whilst importantly reducing coal
                    emissions, a major cause of poor health outcomes amongst the
                    local population.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
