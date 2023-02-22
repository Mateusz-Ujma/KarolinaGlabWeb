import { keyframes } from 'styled-components';

export const MenuTopButtonOpenAnim = keyframes`

    from{
        transform: rotate(180deg);
        top: 10px;
    }
    to{
        top:0px;
        transform: rotate(45deg);
    }
`;
export const MenuTopButtonCloseAnim = keyframes`

    from{
        transform: rotate(45deg);
        top: 0px;
    }
    to{
        top: 10px;
        transform: rotate(180deg);
    }
`;
export const MenuBottomButtonOpenAnim = keyframes`

    from{
        transform: rotate(180deg);
        top: -10px;
    }
    to{
        top: 0px;
        transform: rotate(135deg);
    }
`;
export const MenuBottomButtonCloseAnim = keyframes`

    from{
        top:0px;
        transform: rotate(135deg);
    }
    to{
        top: -10px;
        transform: rotate(180deg);
    }
`;
export const MenuButtonOpenAnim = keyframes`

    from{
        opacity: 1;
    }
    to{
       opacity: 0;
    }
`;
export const MenuButtonCloseAnim = keyframes`

    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;
