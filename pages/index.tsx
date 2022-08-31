import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { zoomIn } from "react-animations";
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
const Home: NextPage = () => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  useEffect(() => {
    const target = new Date("09/22/2022 00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

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

  return (
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
            ></Image>
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
  );
};

export default Home;
