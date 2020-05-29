import React from 'react';
import { useSpring, animated } from 'react-spring';
import './booklistStyle.css';
import { Container } from 'react-bootstrap';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Booklist = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div>
      <div>
        <div className='w3-container'>
          <div class='w3-card-4 w3-dark-grey'>
            <div class='w3-container w3-center'>
              <h3>Flirt with Flutter</h3>
              <animated.div
                class='cardt'
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              ></animated.div>
              <div class='w3-section'>
                <button class='w3-button w3-green'>📖 </button>
                <button class='w3-button w3-red'>📕</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <b />
      <br />
      <b />
      <br />
      <b />

      <div>
        <div className='w3-container'>
          <div class='w3-card-4 w3-dark-grey'>
            <div class='w3-container w3-center'>
              <h3>Act with React</h3>
              <animated.div
                class='cardone'
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              ></animated.div>
              <div class='w3-section'>
                <button class='w3-button w3-green'>📖 </button>
                <button class='w3-button w3-red'>📕</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booklist;
