"use client"
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const MainCarousel = () => {
  const [tX, setTX] = useState(0);
  const [tY, setTY] = useState(10);
  const [desX, setDesX] = useState(0);
  const [desY, setDesY] = useState(0);

  const odragRef = useRef(null);

  // You can change global variables here
  const radius = 310; // how big is the radius
  const autoRotate = true; // auto rotate or not
  const rotateSpeed = -60; // unit: seconds/360 degrees
  const imgWidth = 120; // width of images (unit: px)
  const imgHeight = 220; // height of images (unit: px)

  useEffect(() => {
    setTimeout(() => {
      init();
    }, 1000);
  }, []);

  const init = (delayTime) => {
    const ospin = document.getElementById("spin-container");
    const aImg = ospin.getElementsByTagName("img");
    const aVid = ospin.getElementsByTagName("video");
    const aEle = [...aImg, ...aVid]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    const ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    for (let i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  };

  const applyTranform = () => {
    // Constrain the angle of the camera (between 0 and 180)
    let newY = tY;
    if (newY > 180) newY = 180;
    if (newY < 0) newY = 0;

    // Apply the angle
    odragRef.current.style.transform = `rotateX(${-newY}deg) rotateY(${tX}deg)`;
  };

  const playSpin = (yes) => {
    const ospin = document.getElementById("spin-container");
    ospin.style.animationPlayState = yes ? "running" : "paused";
  };

  // auto spin
  useEffect(() => {
    if (autoRotate) {
      const ospin = document.getElementById("spin-container");
      const animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }
  }, [autoRotate, rotateSpeed]);

  // setup events
  const handlePointerDown = (e) => {
    clearInterval(odragRef.current.timer);
    e = e || window.event;
    let sX = e.clientX;
    let sY = e.clientY;

    document.onpointermove = (e) => {
      e = e || window.event;
      const nX = e.clientX;
      const nY = e.clientY;
      setDesX(nX - sX);
      setDesY(nY - sY);
      setTX((prevTX) => prevTX + desX * 0.1);
      setTY((prevTY) => prevTY + desY * 0.1);
      applyTranform();
      sX = nX;
      sY = nY;
    };

    document.onpointerup = (e) => {
      odragRef.current.timer = setInterval(() => {
        setDesX((prevDesX) => prevDesX * 0.95);
        setDesY((prevDesY) => prevDesY * 0.95);
        setTX((prevTX) => prevTX + desX * 0.1);
        setTY((prevTY) => prevTY + desY * 0.1);
        applyTranform();
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odragRef.current.timer);
          playSpin(true);
        }
      }, 17);
      document.onpointermove = document.onpointerup = null;
    };

    return false;
  };

  return (
    <div className="carousel">
      <div id="drag-container" ref={odragRef} onPointerDown={handlePointerDown}>
        <div id="spin-container">
          {/* Add your images (or video) here */}
          <Image
            src={"https://cdn.sanity.io/images/odnncdrb/production/3c0e8f740146ae7dfe5e8bd1ec5c0e59ad4d4ae8-1153x2048.jpg"}
            width={300}
            height={400}
            alt=""
          />
           <Image
            src={"https://cdn.sanity.io/images/odnncdrb/production/80f841e8d784e68c6b65248149feb2cff11dc796-1153x2048.jpg"}
            width={300}
            height={400}
            alt=""
          />
           <Image
            src={"https://cdn.sanity.io/images/odnncdrb/production/6b6c00d6082f21a728243f2257b2cea439e83325-1153x2048.jpg"}
            width={300}
            height={400}
            alt=""
          />
           <Image
            src={"https://cdn.sanity.io/images/odnncdrb/production/41ce0264768c1a57eee32fcd4900f50df8dc6acb-1153x2048.jpg"}
            width={300}
            height={400}
            alt=""
          />
           <Image
            src={"https://cdn.sanity.io/images/odnncdrb/production/f6d41f6573f16f0fa7e87b47f6d5e5f5f63d46a3-1153x2048.jpg"}
            width={300}
            height={400}
            alt=""
          />
           <Image
            src={"https://cdn.sanity.io/images/odnncdrb/production/bdb6c273b520975be38860e7c952aed705a41d9e-1153x2048.jpg"}
            width={300}
            height={400}
            alt=""
          />
           <Image
            src={"https://cdn.sanity.io/images/odnncdrb/production/63a20e946057be7755dacf8b9f36674664fe97c7-1153x2048.jpg"}
            width={300}
            height={400}
            alt=""
          />
           <Image
            src={"https://cdn.sanity.io/images/odnncdrb/production/be562cb2c03e321bf6711da5ade6c4f2cbee07ff-1153x2048.jpg"}
            width={300}
            height={400}
            alt=""
          />
        </div>
        <div id="ground"></div>
      </div>
    </div>
  );
};

export default MainCarousel;
