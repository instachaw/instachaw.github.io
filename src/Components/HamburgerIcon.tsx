import * as React from "react";

type transformValueTypes = {
  isOpen: boolean,
  rotate: number
}

type HamburgerMenuProps = transformValueTypes & {
  menuClicked: () => any,
  width: number,
  height: number,
  strokeWidth: number,
  color: string,
  borderRadius: number,
  animationDuration: number
}

const defaultProps = {
  width: 32,
  height: 24,
  isOpen: false,
  strokeWidth: 4,
  animationDuration: 0.4,
  rotate: 0,
  borderRadius: 8,
  color: '#000'
}

const getTransformValue = (isOpen:any, defaultPos:any, rotate:any, halfHeight:any) => {
  const height = isOpen ? halfHeight : defaultPos;
  const rotationDegree = isOpen ? `${rotate}deg`: '0';

  return `translate3d(0,${height},0) rotate(${rotationDegree})`;
}

export const HamburgerIcon:React.FC<HamburgerMenuProps> = props => {
  const {
    isOpen,
    strokeWidth,
    animationDuration
  } = props

  const width = `${props.width}px`,
    height = `${props.height}px`,
    halfHeight = `${parseInt(height.replace('px', '')) / 2}px`,
    halfStrokeWidth = `-${strokeWidth / 4}px`;

  const styles = {
    container: {
      width,
      height,
      position: 'relative',
      transform: `rotate(${props.rotate}deg)`
    },

    lineBase: {
      display: 'block',
      height: `${strokeWidth}px`,
      width: '100%',
      background: props.color,
      transitionTimingFunction: "ease",
      transitionDuration: `${animationDuration}s`,
      borderRadius: `${props.borderRadius}px`,
      transformOrigin: 'center',
      position: 'absolute'
    },

    firstLine: {
      transform: getTransformValue(isOpen, 0, 45, halfHeight),
      marginTop: halfStrokeWidth
    },

    secondLine: {
      transitionTimingFunction: 'ease-out',
      transitionDuration: `${animationDuration / 4}s`,
      opacity: isOpen ? '0' : '1',
      transform: isOpen ? 'translateX(-500px)' : 'translateX(0)',
      top: halfHeight,
      marginTop: halfStrokeWidth
    },

    thirdLine: {
      transform: getTransformValue(isOpen, height, -45, halfHeight),
      marginTop: halfStrokeWidth
    }
  };

  return (
    <div style={{ ...styles.container }} onClick={props.menuClicked}>
      <span style={{ ...styles.lineBase, ...styles.firstLine }} />
      <span style={{ ...styles.lineBase, ...styles.secondLine }} />
      <span style={{ ...styles.lineBase, ...styles.thirdLine }} />
    </div>
  );
}

HamburgerIcon.defaultProps = defaultProps;