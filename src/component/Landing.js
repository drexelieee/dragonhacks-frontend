import React from 'react'
import { Typography, Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import LoginForm from '../forms/LoginForm'

const YEAR = 2020
const START_DATE = 'Saturday, February 22'
const START_TIME = '2:00 PM (EST)'
const END_DATE = 'Sunday, February 23'
const END_TIME = '2:00 PM (EST)'

const useStyles = makeStyles({
  root: {},
  login: {
    textAlign: 'center'
  },
  faq: {
    margin: '1em 0'
  },
  paragraph: {
    margin: '0.5em 0'
  }
})

export default function Landing() {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Container maxWidth='md' className={classes.login}>
        <Typography style={{ margin: '1em 0' }} variant='h1'>
          Login with Love
        </Typography>
        <Typography style={{ margin: '1em 0' }} variant='h2'>
          Welcome to Dragon
          <wbr />
          Hacks {YEAR}!
        </Typography>
        <LoginForm />
      </Container>
      <Container>
        <Typography variant='h3'>About</Typography>
        <Typography className={classes.paragraph}>
          DragonHacks is Drexel University's 24 hour hardware-focused hackathon
          event hosted by Drexel University IEEE on {START_DATE} at {START_TIME}{' '}
          in the Bossone Research Enterprise Center. DragonHacks {YEAR} is
          bringing the brightest minds of the world's best schools to spend 24
          hours to hours to create ground breaking new products from scratch!
        </Typography>
        <Typography className={classes.paragraph}>
          We will have more than enough East coast exclusive food and caffeine
          to energize hungry and excited hackers. Your sleepless efforts will be
          rewarded with swag and other goodies!
        </Typography>
        <Typography className={classes.paragraph}>
          Hacking begins at {START_TIME} on {START_DATE} right after the opening
          ceremony and ends at {END_TIME} on {END_DATE}. You must submit your
          project on Devpost. In order to be eligible for prizes, you also must
          demonstrate your project.
        </Typography>
      </Container>
      <Container>
        <Typography variant='h3'>FAQ</Typography>
        <div className={classes.faq}>
          <Typography variant='h4'>Is there a code of conduct?</Typography>
          <Typography>
            Yes. Abide by the{' '}
            <Link href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>
              MLH Code of Conduct
            </Link>
            .
          </Typography>
        </div>
        <div className={classes.faq}>
          <Typography variant='h4'>
            What should I bring to the hackathon?
          </Typography>
          <Typography>
            A valid student ID, laptop, charger, and whatever makes you
            comfortable or supports your coding activities (keyboard, mouse,
            etc.).
          </Typography>
        </div>
        <div className={classes.faq}>
          <Typography variant='h4'>Do you provide any hardware?</Typography>
          <Typography>
            Yes! Here is the list of hardware MLH will be providing during
            DragonHacks {YEAR}: MLH Hardware. We will also be providing our own
            hardware which can be found on the DragonHacks Hardware List.
          </Typography>
        </div>
        <div className={classes.faq}>
          <Typography variant='h4'>Are there prizes?</Typography>
          <Typography>
            There are plenty of prizes to be won at DragonHacks {YEAR}! You will
            have the opportunity to compete in plenty of challenges for a chance
            to win: Xbox Ones, PS4s, GoPros, Apple Watches, Samsung LED TVs,
            Nintendo Switches, iPad Airs, and way more! First place gets first
            choice of prizes with each member in the winning team choosing one
            prize from the list, down to the last DragonHacks challenge winners.
            All projects must be submitted on Devpost in order to be eligible
            for judging.
          </Typography>
        </div>
        <div className={classes.faq}>
          <Typography variant='h4'>How do we submit our projects?</Typography>
          <Typography>
            All submissions will be due on Sunday at 2 PM on the DragonHacks
            {YEAR} Devpost site. We highly recommend you submit at 1:30 PM to
            give yourself some wiggle room for any last-minute technical issues.
            All projects must be submitted on Devpost in order to be eligible
            for judging and prizes!
          </Typography>
        </div>
        <div className={classes.faq}>
          <Typography variant='h4'>
            I don't have a team or idea :( What should I do?
          </Typography>
          <Typography>
            If you do not currently have a team or idea, do not fear! Many
            hackers come in without teams or ideas. There are two methods to
            find teammates, and trust us, hacking with a team is a lot more fun!
            Team sizes have to be 2–5 people. You should be invited to the
            official DragonHacks {YEAR} Slack Group where we have a
            #teamformation channel dedicated to team formations. We will also be
            holding a team formation event before the kickoff and opening
            ceremony. Also check out the DragonHacks {YEAR} Devpost challenges
            for inspiration on what problems to tackle.
          </Typography>
        </div>
        <div className={classes.faq}>
          <Typography variant='h4'>What challenges are there?</Typography>
          <Typography>
            On top of the usual first, second, and third places, we also have
            challenges like best healthcare hack, funniest hack, hack with the
            best design or name — not everything is fully technical! We also
            have sponsor challenges from JetBrains, .tech, Wolfram, Lockheed
            Martin, Close School of Entrepreneurship, GLOBO, and more! The full
            list of challenges are listed in the Official DragonHacks {YEAR}
            Devpost.
          </Typography>
        </div>
        <div className={classes.faq}>
          <Typography variant='h4'>Who can join?</Typography>
          <Typography>
            DragonHacks is open to all university students (undergrad/grad).
            High school students are welcome as well so long as they are 18
            years of age or older. No prior hackathon or hardware experience is
            necessary.
          </Typography>
        </div>
        <div className={classes.faq}>
          <Typography variant='h4'>How is the application process?</Typography>
          <Typography>
            Just register on the site! If space becomes limited, we will review
            applications. Registration is individual and teams can be formed the
            day of the event.
          </Typography>
        </div>
        <div className={classes.faq}>
          <Typography variant='h4'>How much will this cost me?</Typography>
          <Typography>
            Attendance is free. Dinner, lunch, breakfast, drinks, and snacks are
            on us! As well as T-shirts and other swag. We will be having free
            demos from companies. The only thing that you are responsible for is
            transportation.
          </Typography>
        </div>
        <div className={classes.faq}>
          <Typography variant='h4'>When and where is it?</Typography>
          <Typography>
            The event starts at {START_TIME} on {START_DATE}. It will be held in
            the{' '}
            <Link href='https://goo.gl/maps/SSncVEcKq53891VUA'>
              Bossone Research Center
            </Link>
            .
          </Typography>
        </div>
      </Container>
      <Container>
        <Typography variant='h3'>Sponsors</Typography>
      </Container>
    </main>
  )
}