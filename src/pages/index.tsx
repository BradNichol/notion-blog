import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>Hi, I'm Bradley Nichol 👋 </h1>
        <h2>
          Blazing Fast Notion Blog with Next.js'{' '}
          <ExtLink
            href="https://github.com/vercel/next.js/issues/9524"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            SSG
          </ExtLink>
        </h2>

        <Features />

        <div className="explanation">
          <p>
            I'm a software developer based in Leyland, Lancashire, working for a
            FTSE100 company in the automotive industry. I predominately work on
            backend systems using Java, with a sprinkle of Angular frontend work
            for internal tools.
          </p>

          <p>
            In my past life I was a digital marketing professional, and after
            two years of self-development I transitioned into a career in
            software development. I'm sharing my thoughts, journey and what I'm
            learning here. Thanks for stopping by.
          </p>
        </div>
      </div>
    </>
  )
}
