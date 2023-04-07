import cl from "classnames";
import {Photo, CommonClassProps } from "../types";
import styles from './index.module.scss'
interface NavigationProps extends CommonClassProps{
    disabledPrev: boolean;
    disabledNext: boolean;
    onPrevClick: () => void;
    onNextClick: () => void;
}
export const Navigation: React.FC <NavigationProps> = ({
    disabledPrev, 
    disabledNext,
    onPrevClick,
    onNextClick,
    className
}) => (
    <div className={cl(styles.navigation, className)}>
        <button
            disabled = {disabledPrev}
            className = {cl(
                styles.navigationBtn,
                styles.navigationBtnLeft
            )}
            onClick = {onPrevClick}
        >
            prev Photo
        </button>
        <button
            disabled = {disabledNext}
            className = {cl(
                styles.navigationBtn,
                styles.navigationBtnRight
            )}
            onClick = {onNextClick}
        >
            next Photo
        </button>
    </div>
)