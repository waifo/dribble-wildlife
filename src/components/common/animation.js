import { keyframes } from "styled-components";

export const Bubble = keyframes`
 0%{
     transform:scale(0.1);
 }
 60%{
     transform:scale(1.2);
 }

 100%{
     transform:scale(1);
 }

`;

export const SlideDown = keyframes`
0%{
    transform:translateY(-100px);
    visibility:hidden;
}
30%{
    visibility:hidden;
}
100%{
    transform:translateY(0px);
    visibility:visible;

}
`;
