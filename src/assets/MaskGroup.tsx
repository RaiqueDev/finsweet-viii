import { MaskGroupContainer } from "./styles";

export const MaskGroup = () => {
  return (
    <>
      <MaskGroupContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="416"
          height="320"
          fill="none"
          viewBox="0 0 416 320"
        >
          <mask
            id="a"
            width="416"
            height="320"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
          >
            <path fill="#F4F2FF" d="M0 0h416v320H0z"></path>
          </mask>
          <g mask="url(#a)">
            <path
              fill="#1AD993"
              d="M.442 485.66l-52.819-52.437L383.993 0l52.819 52.438z"
            ></path>
            <path
              fill="#503AE7"
              d="M7.493 251.207l-52.82-52.439L119.634 35l52.819 52.439zm177.278 269.306l-52.819-52.439L430.18 172l52.819 52.438z"
            ></path>
          </g>
        </svg>
      </MaskGroupContainer>
    </>
  );
}
