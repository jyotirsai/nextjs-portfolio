import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Hi, I'm a Software Engineering Graduate student at the University of Alberta. I like to blog about
              projects I'm working on, and things I'm learning. My interests include software development, AI/ML, and robotics.
            </p>
            <p>
              I am currently an incoming Master's student in Software Engineering & Intelligent Systems. I would like to find a technical role
              where I can learn more about software development practices.
            </p>
            <p>
              I have completed prior internships in industry and have been previously employed as a
              research assistant. Please visit my{' '}
              <a href="https://www.linkedin.com/in/jyotirsai/">linkedin</a> to learn more.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
