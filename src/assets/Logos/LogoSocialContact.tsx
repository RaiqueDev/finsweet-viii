import { motion } from 'framer-motion';

export const LogoSocialContact = () => {
  return (
    <>
      <motion.div
        style={{ width: '100%' }}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
          mass: 3.5,
          delay: 0.5,
        }}>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="107"
          height="26"
          fill="none"
          viewBox="0 0 107 26"
        >
          <g fill="#14142B" clipPath="url(#a)">
            <path d="M106.975 8.35c-.058-1.328-.273-2.241-.581-3.033a6.104 6.104 0 00-1.445-2.217 6.164 6.164 0 00-2.213-1.44c-.796-.308-1.704-.523-3.032-.582C98.365 1.015 97.94 1 94.546 1s-3.819.015-5.152.073c-1.329.059-2.242.274-3.033.581A6.1 6.1 0 0084.144 3.1a6.155 6.155 0 00-1.441 2.212c-.308.796-.523 1.705-.581 3.033-.064 1.338-.078 1.763-.078 5.157 0 3.395.014 3.82.073 5.153.058 1.328.273 2.241.581 3.033.318.84.81 1.592 1.446 2.217a6.153 6.153 0 002.212 1.44c.796.308 1.705.523 3.033.582 1.333.058 1.758.073 5.152.073 3.395 0 3.82-.015 5.153-.073 1.328-.059 2.241-.274 3.032-.581a6.39 6.39 0 003.658-3.658c.308-.796.523-1.705.582-3.033.058-1.334.073-1.758.073-5.153 0-3.394-.005-3.819-.064-5.152zm-2.251 10.207c-.054 1.221-.259 1.88-.43 2.32a4.146 4.146 0 01-2.373 2.373c-.44.171-1.104.377-2.32.43-1.319.059-1.714.073-5.05.073s-3.736-.014-5.05-.073c-1.22-.053-1.88-.259-2.32-.43a3.846 3.846 0 01-1.435-.932 3.886 3.886 0 01-.933-1.436c-.171-.44-.376-1.104-.43-2.32-.059-1.319-.073-1.714-.073-5.05 0-3.335.014-3.736.073-5.05.054-1.22.259-1.88.43-2.32a3.8 3.8 0 01.938-1.435 3.881 3.881 0 011.435-.933c.44-.17 1.104-.376 2.32-.43 1.319-.058 1.714-.073 5.05-.073 3.34 0 3.736.015 5.05.073 1.221.054 1.88.26 2.32.43.542.2 1.035.518 1.435.933.415.405.733.893.933 1.436.171.44.376 1.103.43 2.32.059 1.318.073 1.714.073 5.05 0 3.335-.014 3.725-.073 5.044z"></path>
            <path d="M94.546 7.08a6.424 6.424 0 00-6.422 6.423 6.424 6.424 0 006.422 6.422 6.423 6.423 0 000-12.845zm0 10.588a4.167 4.167 0 11.002-8.333 4.167 4.167 0 01-.002 8.334zm8.177-10.842a1.5 1.5 0 11-2.999 0 1.5 1.5 0 012.999 0z"></path>
          </g>
          <g clipPath="url(#b)">
            <path
              fill="#14142B"
              d="M65.994 25v-.001H66V15.83c0-4.485-.965-7.94-6.21-7.94-2.52 0-4.212 1.383-4.902 2.694h-.073V8.308h-4.972v16.69h5.177v-8.264c0-2.176.413-4.28 3.107-4.28 2.656 0 2.695 2.483 2.695 4.42V25h5.172zM41.413 8.31h5.183V25h-5.183V8.31zM44.002 0A3.003 3.003 0 0041 3.002c0 1.657 1.345 3.03 3.002 3.03 1.657 0 3.002-1.373 3.002-3.03A3.004 3.004 0 0044.002 0z"
            ></path>
          </g>
          <g clipPath="url(#c)">
            <path
              fill="#14142B"
              d="M16.664 4.818h2.282V.843c-.394-.055-1.748-.176-3.325-.176-3.29 0-5.545 2.07-5.545 5.874v3.5h-3.63v4.444h3.63v11.182h4.452v-11.18h3.485l.553-4.444h-4.039V6.98c.001-1.284.347-2.163 2.137-2.163z"
            ></path>
          </g>
          <defs>
            <clipPath id="a">
              <path
                fill="#fff"
                d="M0 0h25v25H0z"
                transform="translate(82 1)"
              ></path>
            </clipPath>
            <clipPath id="b">
              <path fill="#fff" d="M0 0h25v25H0z" transform="translate(41)"></path>
            </clipPath>
            <clipPath id="c">
              <path
                fill="#fff"
                d="M0 0h25v25H0z"
                transform="translate(0 .667)"
              ></path>
            </clipPath>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}