import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { zoomIn, jello, tada } from "react-animations";
import styled, { keyframes, css } from "styled-components";
const up = keyframes`
  0% {
    transform: translateY(0px)
  }
  25% {
    transform: translateY(5px)

  }
  50% {
    transform: translateY(0px)
  }
  75% {
    transform: translateY(-5px)
  }
  100% {
    transform: translateY(0px)

  }
  `;
const down = keyframes`
  0% {
    transform: translateY(0px)
  }
  25% {
    transform: translateY(-5px)

  }
  50% {
    transform: translateY(0px)
  }
  75% {
    transform: translateY(5px)
  }
  100% {
    transform: translateY(0px)

  }
  `;
const rat1Anim = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    visibility: hidden;
  }
  `;
const rat2Anim = keyframes`
  0% {
    opacity: 1;
  }
  
  `;
const rat3Anim = keyframes`
  0% {
    opacity: 0;
  }
  33% {
    opacity: 0;
  }
  66% {
    opacity: 1;
  }
  100% {
    opacity:1;
  }
  `;
const Rubber = styled.div`
  animation: 1s ${keyframes`${zoomIn}`} infinite;
`;
const BlockUp = styled.div`
  animation: 4s ${css`
      ${up}`} ease-in-out infinite;
`;
const BlockDown = styled.div`
  animation: 4s ${css`
      ${down}`} ease-in-out infinite;
`;
const Wobble = styled.div`
  animation: 1s ${keyframes`${jello}`} infinite;
`;
const NoseAnimate = styled.div`
  animation: 1s ${keyframes`${tada}`} infinite;
`;
// const Rat1 = styled.div`
//   animation: 3s ${css`
//       ${rat1Anim}`} ease-in-out infinite;
// `;
// const Rat2 = styled.div`
//   animation: 3s ${css`
//       ${rat2Anim}`} ease-in-out 1s infinite;
// `;
// const Rat3 = styled.div`
//   animation: 3s ${css`
//       ${rat3Anim}`} ease-in-out 2s infinite;
// `;
const Home: NextPage = () => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [difference, setDifference] = React.useState(1);

  useEffect(() => {
    const target = new Date("09/22/2022 00:00:00");


    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      setDifference(difference);
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return difference >= 0 ? (
    <div className={styles.container}>
      <Head>
        <title>{"Mouse <3"}</title>
        <meta name="description" content="for my little mouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.happy}>
        <BlockUp>H</BlockUp>
        <BlockDown>A</BlockDown>
        <BlockUp>P</BlockUp>
        <BlockDown>P</BlockDown>
        <BlockUp>Y</BlockUp>

        <BlockDown className={styles.word}>B</BlockDown>
        <BlockUp>I</BlockUp>
        <BlockDown>R</BlockDown>
        <BlockUp>T</BlockUp>
        <BlockDown>H</BlockDown>
        <BlockUp>D</BlockUp>
        <BlockDown>A</BlockDown>
        <BlockUp>Y</BlockUp>
      </div>

      <div className={styles.timer}>
        <div className={styles.img}>
          <Rubber>
            <Image
              src={"/love.svg"}
              width={118}
              height={102}
              alt={"heart image"}
            />
          </Rubber>
        </div>
        <BlockUp className={`${styles.block} ${styles.days}`}>
          <div className={styles.time}>{days}</div>
          <div className={styles.label}>Days</div>
        </BlockUp>
        <BlockDown className={`${styles.block} ${styles.hours}`}>
          <div className={styles.time}>{hours}</div>
          <div className={styles.label}>Hours</div>
        </BlockDown>
        <BlockUp className={`${styles.block} ${styles.minutes}`}>
          <div className={styles.time}>{minutes}</div>
          <div className={styles.label}>Minutes</div>
        </BlockUp>
        <BlockDown className={`${styles.block} ${styles.seconds}`}>
          <div className={styles.time}>{seconds}</div>
          <div className={styles.label}>Seconds</div>
        </BlockDown>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.end}>
        <div className={styles.title}>See your surprise in backpack :3</div>
        
        <div className={styles.heart}>
          <Rubber>
            <Image
              src={"/rat-love.svg"}
              width={140}
              height={78}
              alt={"rat-end image"}
            />
          </Rubber>
        </div>
        <div className={styles.rat}>
          <Image
            src={"/rat.svg"}
            width={149}
            height={112}
            alt={"rat-end image"}
          />
        </div>
        {<div className={styles.rat1}>
          
            <Image
              src={"/rat1.svg"}
              width={149}
              height={112}
              alt={"rat-end image"}
            />
        
        </div>}
        {<div className={styles.rat2}>
          
            <Image
              src={"/rat2.svg"}
              width={149}
              height={112}
              alt={"rat-end image"}
            />
         
        </div>}
        <div className={styles.rat3}>
         
            <Image
              src={"/rat3.svg"}
              width={149}
              height={112}
              alt={"rat-end image"}
            />
         
        </div>
        <div className={styles.eyes}>
          <Rubber>
            <Image
              src={"/eyes.svg"}
              width={8}
              height={8}
              alt={"rat-eyes image"}
            />
          </Rubber>
        </div>
        <div className={styles.nose}>
          <NoseAnimate>
            <Image
              src={"/nose.svg"}
              width={8}
              height={8}
              alt={"rat-nose image"}
            />
          </NoseAnimate>
        </div>
        <div className={styles.upEar}>
          <Wobble>
            <Image
              src={"/up-ear.svg"}
              width={12}
              height={10}
              alt={"rat-ear image"}
            />
          </Wobble>
        </div>
        <div className={styles.downEar}>
          <Wobble>
            <Image
              src={"/down-ear.svg"}
              width={32}
              height={32}
              alt={"rat-ear image"}
            />
          </Wobble>
        </div>
      </div>
    </div>
  );
};

export default Home;
